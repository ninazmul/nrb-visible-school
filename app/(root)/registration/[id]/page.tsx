import { getRegistrationById } from "@/lib/actions/registration.actions";
import { getCourseById } from "@/lib/actions/course.actions";
import { getSetting, isAdmin } from "@/lib/actions";
import RegistrationDetailsClient from "@/app/dashboard/components/RegistrationDetailsClient";
import { auth, clerkClient } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Link from "next/link";

export const revalidate = 60;

type PageProps = {
  params: Promise<{ id: string }>;
};

const RegistrationPage = async ({ params }: PageProps) => {
  const { id } = await params;

  // 1. Authentication check
  const { userId } = await auth();
  if (!userId) {
    redirect(`/sign-in?redirect_url=/registration/${id}`);
  }

  const clerk = await clerkClient();
  const user = await clerk.users.getUser(userId);
  const clerkEmail =
    user.emailAddresses.find(
      (e) => e.id === user.primaryEmailAddressId,
    )?.emailAddress || "";

  const registration = await getRegistrationById(id);

  if (!registration) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
        <p className="text-lg font-medium text-gray-700">Registration not found</p>
      </div>
    );
  }

  // 2. Access control: viewer must be owner or admin
  const isOwner =
    clerkEmail &&
    registration.email &&
    clerkEmail.toLowerCase() === registration.email.toLowerCase();
  const userIsAdmin = clerkEmail ? await isAdmin(clerkEmail) : false;

  if (!isOwner && !userIsAdmin) {
    return (
      <section className="w-full py-16 min-h-screen px-6 md:px-12 max-w-7xl mx-auto flex flex-col items-center justify-center">
        <div className="text-center border rounded-xl p-10 bg-red-50 max-w-md">
          <h2 className="text-2xl font-bold text-red-700 mb-2">Access Denied</h2>
          <p className="text-sm text-gray-600 mb-6">
            You do not have permission to view this registration.
          </p>
          <Link
            href="/registration"
            className="px-4 py-2 bg-primary text-white rounded-md text-sm font-medium hover:opacity-90 transition"
          >
            Back to Registrations
          </Link>
        </div>
      </section>
    );
  }

  const settings = await getSetting();
  const course = await getCourseById(registration.course._id);

  return (
    <main className="max-w-7xl mx-auto">
      <RegistrationDetailsClient
        registration={registration}
        course={course}
        settings={settings}
      />
    </main>
  );
};

export default RegistrationPage;

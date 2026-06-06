import { getCourseById } from "@/lib/actions/course.actions";
import { auth, clerkClient } from "@clerk/nextjs/server";
import Checkout from "@/components/shared/Checkout";
import { redirect } from "next/navigation";

export const revalidate = 60;

type PageProps = {
  params: Promise<{ id: string }>;
};

const CoursePage = async ({ params }: PageProps) => {
  const { id } = await params;
  const course = await getCourseById(id);

  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const clerk = await clerkClient();
  const user = await clerk.users.getUser(userId);

  const email = user.emailAddresses.find(
    (email) => email.id === user.primaryEmailAddressId,
  )?.emailAddress;

  if (!email) {
    redirect("/sign-in");
  }

  if (!course) {
    return <div>Course not found</div>;
  }

  return <Checkout course={course} email={email} />;
};

export default CoursePage;

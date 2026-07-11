"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ICourseSafe } from "@/lib/database/models/course.model";
import { useUploadThing } from "@/lib/uploadthing";
import { FileUploader } from "@/components/shared/FileUploader";
import toast from "react-hot-toast";
import { createPendingRegistration } from "@/lib/actions";

// -------------------- Schema --------------------
const registrationFormSchema = z.object({
  englishName: z.string().min(1, "English name is required"),
  fathersName: z.string().min(1, "Father's name is required"),
  mothersName: z.string().min(1, "Mother's name is required"),
  gender: z.enum(["Male", "Female", "Other"], {
    message: "Gender is required",
  }),
  email: z.string().email("Valid email is required"),
  number: z.string().min(1, "Phone number is required"),
  whatsApp: z.string().min(1, "WhatsApp number is required"),
  occupation: z.string().min(1, "Occupation is required"),
  institution: z.string().min(1, "Institution is required"),
  address: z.string().min(1, "Address is required"),
  photo: z.string().min(1, "Photo is required"),
  idProof: z.string().min(1, "ID proof is required"),
  paymentAmount: z.number(), // new field
});

type RegistrationFormProps = {
  course: ICourseSafe;
};

export default function RegistrationForm({ course }: RegistrationFormProps) {
  const { startUpload } = useUploadThing("mediaUploader");

  const form = useForm<z.infer<typeof registrationFormSchema>>({
    resolver: zodResolver(registrationFormSchema),
    defaultValues: {
      englishName: "",
      fathersName: "",
      mothersName: "",
      gender: "Male",
      email: "",
      number: "",
      whatsApp: "",
      occupation: "",
      institution: "",
      address: "",
      photo: "",
      idProof: "",
      paymentAmount: course.discountPrice ?? course.price, // auto-fill
    },
  });

  async function onSubmit(values: z.infer<typeof registrationFormSchema>) {
    try {
      const registration = await createPendingRegistration({
        ...values,
        courseId: course._id.toString(),
        paymentAmount: course.discountPrice ?? course.price,
      });

      if (!registration) {
        throw new Error("Failed to create registration");
      }

      toast.success(
        `Registration submitted successfully! Your registration number is ${registration.registrationNumber}. Please wait for payment verification.`,
      );

      form.reset();
    } catch (error: any) {
      console.error("Registration failed:", error);

      toast.error(error?.message || "Something went wrong. Please try again.");
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-6"
      >
        <h2 className="text-2xl font-bold">Register for {course.title}</h2>

        {/* English Name */}
        <FormField
          control={form.control}
          name="englishName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>English Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter English name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Father's Name */}
        <FormField
          control={form.control}
          name="fathersName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Father&apos;s Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter father's name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Mother's Name */}
        <FormField
          control={form.control}
          name="mothersName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mother&apos;s Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter mother's name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Gender */}
        <FormField
          control={form.control}
          name="gender"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Gender</FormLabel>
              <FormControl>
                <select
                  {...field}
                  className="w-full border rounded px-3 py-2"
                  defaultValue={field.value}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Enter your email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Phone Number */}
        <FormField
          control={form.control}
          name="number"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input placeholder="Enter phone number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* WhatsApp */}
        <FormField
          control={form.control}
          name="whatsApp"
          render={({ field }) => (
            <FormItem>
              <FormLabel>WhatsApp Number</FormLabel>
              <FormControl>
                <Input placeholder="Enter WhatsApp number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Occupation */}
        <FormField
          control={form.control}
          name="occupation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Occupation</FormLabel>
              <FormControl>
                <Input placeholder="Enter occupation" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Institution */}
        <FormField
          control={form.control}
          name="institution"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Institution</FormLabel>
              <FormControl>
                <Input placeholder="Enter institution" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Address */}
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Textarea placeholder="Enter address" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Photo */}
        <FormField
          control={form.control}
          name="photo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Passport Size Photo</FormLabel>
              <FormControl>
                <FileUploader
                  imageUrl={field.value}
                  setFiles={() => {}}
                  onFieldChange={async (_blobUrl, files) => {
                    if (files?.length) {
                      const uploaded = await startUpload(files);
                      if (uploaded?.[0]) field.onChange(uploaded[0].url);
                    }
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* ID Proof */}
        <FormField
          control={form.control}
          name="idProof"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ID Proof</FormLabel>
              <FormControl>
                <FileUploader
                  imageUrl={field.value}
                  setFiles={() => {}}
                  onFieldChange={async (_blobUrl, files) => {
                    if (files?.length) {
                      const uploaded = await startUpload(files);
                      if (uploaded?.[0]) field.onChange(uploaded[0].url);
                    }
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-colors"
        >
          Register
        </button>
      </form>
    </Form>
  );
}

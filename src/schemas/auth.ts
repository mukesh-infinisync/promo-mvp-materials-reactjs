import { z } from "zod";

export const signInSchema = z.object({
  email: z
    .string()
    .min(1, "We need your email to contact you")
    .email("Enter a valid email"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(64, "Password is too long"),
});

export type SignInFormValues = z.infer<typeof signInSchema>;
export const signupEmailSchema = z.object({
  email: z.string().nonempty("We need your email to contact you").email(),
  agree: z.boolean().refine((val) => val === true, { message: "You must agree" }),
});

export const signupDetailsSchema = z.object({
  name: z.string().min(1, "Name is required"),
  company: z.string().min(1, "Company Name is required"),
  mobile: z
    .string()
    .regex(/^\d{10}$/, "Enter a valid 10-digit mobile number"),
  address: z.string().min(1, "Address is required"),
  country: z.string().min(1, "Country is required"),
  state: z.string().min(1, "State is required"),
  city: z.string().min(1, "City is required"),
  //@ts-ignore
  role: z.enum(["buyer", "supplier"], {
    required_error: "Role is required",
  }),
});

// full values type
export type SignupFormValues = z.infer<typeof signupEmailSchema> &
  z.infer<typeof signupDetailsSchema>;

import z from "zod";

// ✅ Schema for Delivery Address
export const deliveryAddressSchema = z.object({
  fullName: z.string().min(2, "Full Name is required"),
  deliveryAddress: z.string().min(5, "Delivery Address is required"),
  city: z.string().min(2, "City is required"),
  state: z.string().min(2, "State is required"),
  country: z.string().min(2, "Country is required"),
  zip: z.string().regex(/^\d{5,6}$/, "Enter valid Zip / Postal Code"),
});
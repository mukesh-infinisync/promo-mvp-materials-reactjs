import React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { motion } from "framer-motion";
import { SignupFormValues } from "@/schemas/auth";
import { Link } from "react-router";

interface StepEmailFormProps {
  form: any;
  onNext: (values: SignupFormValues) => void;
}

const SignupStepEmailForm: React.FC<StepEmailFormProps> = ({ form, onNext }) => {
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onNext)}
        className="flex flex-col gap-6"
      >
        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => {
            const hasError = !!form.formState.errors.email;
            return (
              <FormItem>
                <FormLabel className="font-[Poppins] text-[18px] font-normal leading-[24px] text-black">
                  Email id<span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <motion.div
                    animate={{
                      backgroundColor: hasError ? "#FEE2E2" : "#FFFFFF",
                      borderColor: hasError ? "#DC2626" : "#929292",
                    }}
                    transition={{ duration: 0.25 }}
                    className="rounded-[12px] border overflow-hidden"
                  >
                    <Input
                      type="email"
                      placeholder="Enter Email Id"
                      {...field}
                      className="w-full border-none focus:ring-0 px-[12px] py-[12px] placeholder:text-[#6E6E6E] placeholder:font-[Poppins] placeholder:text-[1rem]"
                    />
                  </motion.div>
                </FormControl>
                <FormMessage className="text-red-600 text-sm mt-1" />
              </FormItem>
            );
          }}
        />

        {/* Terms */}
        <FormField
          control={form.control}
          name="agree"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-1">
              <div className="flex items-start gap-2">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={(checked) =>
                      field.onChange(checked === true)
                    }
                    className="border-[#4A4A4A] border-[1px]"
                  />
                </FormControl>
                <div className="text-sm text-[#6E6E6E] leading-tight">
                  I agree to the{" "}
                  <a href="/terms" className="text-blue-600 underline">
                    Term of Service
                  </a>{" "}
                  and{" "}
                  <a href="/privacy" className="text-blue-600 underline">
                    Privacy Policy
                  </a>
                </div>
              </div>
              <FormMessage className="text-red-600 text-sm" />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full bg-[#164B88] hover:bg-[#0e3970] text-white py-3 rounded-md"
        >
          Sign Up
        </Button>

        {/* ✅ Login link */}
        <p className="text-center text-sm text-[#6E6E6E]">
          Already have an account?{" "}
          <Link to="/login" className="text-[#164B88] font-medium hover:underline">
            Login
          </Link>
        </p>
      </form>
    </Form>
  );
};

export default SignupStepEmailForm;

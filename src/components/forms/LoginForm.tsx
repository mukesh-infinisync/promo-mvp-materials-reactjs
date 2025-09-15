import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { signInSchema, SignInFormValues } from "@/schemas/auth";
import FormHeader from "../common/AuthHeader";
import { loginApi } from "@/__mocks__/apis/auth";
import { useDispatch } from "react-redux";
import { login } from "@/store/user/userSlice";
import { Loader } from "lucide-react";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router";

const LoginForm: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
  const form = useForm<SignInFormValues>({
    resolver: zodResolver(signInSchema),
    defaultValues: { email: "", password: "" },
  });

  const navigateUser = (role: string) => {
    if(role === 'buyer') {
        navigate('/buyer');
    } else {
        navigate('/supplier');
    }   
  }

  const onSubmit = async (values: SignInFormValues) => {
    try {
        setLoading(true);
        const userData = await loginApi({email: values.email, password: values.password});
        console.log("User Data::", userData)
        if(userData) {
            dispatch(login(userData));
            toast.success('Login Successfull');
            navigateUser(userData.role);
        }
        setLoading(false);
    } catch(err: any) {
        setLoading(false);
        toast.error('Invalid email or password');
    }
  };

  return (
    <div className="w-full max-w-[640px] bg-white rounded-[12px] shadow-lg py-8 px-5 md:px-[100px] flex flex-col gap-3">
        <FormHeader />
      {/* Heading */}
      <h2 className="text-[#343434] text-[1.5rem] font-medium">Sign In</h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-6">
          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => {
              const hasError = !!form.formState.errors.email;
              return (
                <FormItem>
                  <FormLabel className="text-[18px] font-normal font-[Poppins] text-[#000000FA]">
                    Email<span className="text-red-500">*</span>
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
                        className="w-full border-none focus:ring-0 px-[12px] py-[12px]"
                      />
                    </motion.div>
                  </FormControl>
                  <FormMessage className="text-red-600 text-sm mt-1" />
                </FormItem>
              );
            }}
          />

          {/* Password */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => {
              const hasError = !!form.formState.errors.password;
              return (
                <FormItem>
                  <FormLabel className="text-[18px] font-normal font-[Poppins] text-[#000000FA]">
                    Password<span className="text-red-500">*</span>
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
                        type="password"
                        placeholder="Enter Password"
                        {...field}
                        className="w-full border-none focus:ring-0 px-[12px] py-[12px]"
                      />
                    </motion.div>
                  </FormControl>
                  <FormMessage className="text-red-600 text-sm mt-1" />
                </FormItem>
              );
            }}
          />

          {/* Submit */}
          <div className="flex justify-center w-full">
          <Button
            type="submit"
            className="w-[300px] bg-[#164B88] hover:bg-[#0e3970] text-white py-3 rounded-md"
          >
            {loading && <Loader className="animate-spin" />} Sign In
          </Button>
          </div>

          {/* Links */}
          <div className="flex flex-col justify-center items-center gap-3 text-[1.2rem] font-normal text-[#4B4B4B]">
            <Link to="/register">
              Don't have an account? <span className="underline text-[#4B4B4B] text-[1.2rem] font-normal">Sign Up</span>
            </Link>
            <Link to="/forget-password" className="text-[#4B4B4B] font-medium text-[1.2rem] hover:underline">
              Forgot Password?
            </Link>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default LoginForm;

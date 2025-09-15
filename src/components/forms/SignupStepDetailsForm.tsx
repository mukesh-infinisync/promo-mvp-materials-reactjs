import React, { JSX } from "react";
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { SignupFormValues } from "@/schemas/auth";
import { motion } from "framer-motion";

interface StepDetailsFormProps {
    form: any;
    onSubmit: (values: SignupFormValues) => void;
}

const fieldWrapper = (
    hasError: boolean,
    children: React.ReactNode
): JSX.Element => (
    <motion.div
        animate={{
            backgroundColor: hasError ? "#FEE2E2" : "#FFFFFF",
            borderColor: hasError ? "#DC2626" : "#929292",
        }}
        transition={{ duration: 0.25 }}
        className="rounded-[12px] border overflow-hidden"
    >
        {children}
    </motion.div>
);

const SignupStepDetailsForm: React.FC<StepDetailsFormProps> = ({
    form,
    onSubmit,
}) => {
    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-[12px]"
            >
                {/* Heading + Role */}
                <div className="flex justify-between items-center mb-2 mt-2">
                    <h3 className="text-[1.5rem] font-medium">Create Account</h3>
                    <RadioGroup
                        defaultValue="buyer"
                        onValueChange={(val) => form.setValue("role", val)}
                        className="flex gap-4"
                    >
                        <label className="flex items-center gap-2">
                            <RadioGroupItem value="supplier" className="text-[1.5rem] font-medium" /> Supplier
                        </label>
                        <label className="flex items-center gap-2">
                            <RadioGroupItem value="buyer" className="text-[1.5rem] font-medium" /> Buyer
                        </label>
                    </RadioGroup>
                </div>

                {/* Name */}
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => {
                        const hasError = !!form.formState.errors.name;
                        return (
                            <FormItem>
                                <FormLabel className="text-[18px] font-normal font-[Poppins] text-[#000000FA]">
                                    Name<span className="text-red-500">*</span>
                                </FormLabel>
                                <FormControl>
                                    {fieldWrapper(
                                        hasError,
                                        <Input
                                            {...field}
                                            placeholder="Enter Your full name"
                                            className="w-full border-none focus:ring-0 px-[12px] py-[12px]"
                                        />
                                    )}
                                </FormControl>
                                <FormMessage className="text-red-600 text-sm mt-1" />
                            </FormItem>
                        );
                    }}
                />

                {/* Company */}
                <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => {
                        const hasError = !!form.formState.errors.company;
                        return (
                            <FormItem>
                                <FormLabel className="text-[18px] font-normal font-[Poppins] text-[#000000FA]">
                                    Company Name<span className="text-red-500">*</span>
                                </FormLabel>
                                <FormControl>
                                    {fieldWrapper(
                                        hasError,
                                        <Input
                                            {...field}
                                            placeholder="Enter Company Name"
                                            className="w-full border-none focus:ring-0 px-[12px] py-[12px]"
                                        />
                                    )}
                                </FormControl>
                                <FormMessage className="text-red-600 text-sm mt-1" />
                            </FormItem>
                        );
                    }}
                />

                {/* Mobile with Country Code */}
                <FormField
                    control={form.control}
                    name="mobile"
                    render={({ field }) => {
                        const hasError = !!form.formState.errors.mobile;

                        const handlePhoneChange = (val: string) => {
                            const digits = val.replace(/\D/g, ""); // keep only digits
                            field.onChange(digits); // store digits in form state
                        };


                        return (
                            <FormItem>
                                <FormLabel className="text-[18px] font-normal font-[Poppins] text-[#000000FA]">
                                    Mobile No.<span className="text-red-500">*</span>
                                </FormLabel>
                                <FormControl>
                                    {fieldWrapper(
                                        hasError,
                                        <div className="flex w-full rounded-[12px] overflow-hidden h-[36px]">
                                            {/* Country Code */}
                                            <Select
                                                defaultValue="+91"
                                                onValueChange={(code) => form.setValue("countryCode", code)}
                                            >
                                                <SelectTrigger className="w-[90px] h-[48px] border-0 outline-none shadow-none rounded-none px-3 flex items-center justify-between">
                                                    <SelectValue />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="+91">🇮🇳 +91</SelectItem>
                                                    <SelectItem value="+1">🇺🇸 +1</SelectItem>
                                                    <SelectItem value="+44">🇬🇧 +44</SelectItem>
                                                    <SelectItem value="+81">🇯🇵 +81</SelectItem>
                                                    <SelectItem value="+49">🇩🇪 +49</SelectItem>
                                                </SelectContent>
                                            </Select>

                                            {/* Mobile Input */}
                                            <Input
                                                {...field}
                                                value={
                                                    field.value
                                                        ? field.value.replace(/(\d{3})(\d{3})(\d{0,4})/, (_, a, b, c) =>
                                                            c ? `${a}-${b}-${c}` : `${a}-${b}`
                                                        )
                                                        : ""
                                                }
                                                onChange={(e) => handlePhoneChange(e.target.value)}
                                                placeholder="Enter Mobile No."
                                                className="flex-1 border-0 outline-none shadow-none rounded-none px-[12px] h-[36px]"
                                            />
                                        </div>
                                    )}
                                </FormControl>
                                <FormMessage className="text-red-600 text-sm mt-1" />
                            </FormItem>
                        );
                    }}
                />


                {/* Address */}
                <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => {
                        const hasError = !!form.formState.errors.address;
                        return (
                            <FormItem>
                                <FormLabel className="text-[18px] font-normal font-[Poppins] text-[#000000FA]">
                                    Address <span className="text-red-500">*</span>
                                </FormLabel>
                                <FormControl>
                                    {fieldWrapper(
                                        hasError,
                                        <Input
                                            {...field}
                                            placeholder="Enter Address"
                                            className="w-full border-none focus:ring-0 px-[12px] py-[12px]"
                                        />
                                    )}
                                </FormControl>
                                <FormMessage className="text-red-600 text-sm mt-1" />
                            </FormItem>
                        );
                    }}
                />

                {/* Country */}
                <FormField
                    control={form.control}
                    name="country"
                    render={({ field }) => {
                        const hasError = !!form.formState.errors.country;
                        return (
                            <FormItem>
                                <FormLabel className="text-[18px] font-normal font-[Poppins] text-[#000000FA]">
                                    Country <span className="text-red-500">*</span>
                                </FormLabel>
                                <FormControl>
                                    {fieldWrapper(
                                        hasError,
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <SelectTrigger className="w-full px-[12px] py-[12px]">
                                                <SelectValue placeholder="Select Country" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="india">India</SelectItem>
                                                <SelectItem value="usa">USA</SelectItem>
                                                <SelectItem value="uk">UK</SelectItem>
                                                <SelectItem value="germany">Germany</SelectItem>
                                                <SelectItem value="japan">Japan</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    )}
                                </FormControl>
                                <FormMessage className="text-red-600 text-sm mt-1" />
                            </FormItem>
                        );
                    }}
                />

                {/* State */}
                <FormField
                    control={form.control}
                    name="state"
                    render={({ field }) => {
                        const hasError = !!form.formState.errors.state;
                        return (
                            <FormItem>
                                <FormLabel className="text-[18px] font-normal font-[Poppins] text-[#000000FA]">
                                    State <span className="text-red-500">*</span>
                                </FormLabel>
                                <FormControl>
                                    {fieldWrapper(
                                        hasError,
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <SelectTrigger className="w-full px-[12px] py-[12px]">
                                                <SelectValue placeholder="Select State" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="maharashtra">Maharashtra</SelectItem>
                                                <SelectItem value="karnataka">Karnataka</SelectItem>
                                                <SelectItem value="tamilnadu">Tamil Nadu</SelectItem>
                                                <SelectItem value="delhi">Delhi</SelectItem>
                                                <SelectItem value="gujarat">Gujarat</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    )}
                                </FormControl>
                                <FormMessage className="text-red-600 text-sm mt-1" />
                            </FormItem>
                        );
                    }}
                />

                {/* City */}
                <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => {
                        const hasError = !!form.formState.errors.city;
                        return (
                            <FormItem>
                                <FormLabel className="text-[18px] font-normal font-[Poppins] text-[#000000FA]">
                                    City <span className="text-red-500">*</span>
                                </FormLabel>
                                <FormControl>
                                    {fieldWrapper(
                                        hasError,
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <SelectTrigger className="w-full px-[12px] py-[12px]">
                                                <SelectValue placeholder="Select City" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="mumbai">Mumbai</SelectItem>
                                                <SelectItem value="pune">Pune</SelectItem>
                                                <SelectItem value="bangalore">Bangalore</SelectItem>
                                                <SelectItem value="chennai">Chennai</SelectItem>
                                                <SelectItem value="delhi">Delhi</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    )}
                                </FormControl>
                                <FormMessage className="text-red-600 text-sm mt-1" />
                            </FormItem>
                        );
                    }}
                />

                {/* Submit */}
                <div className="flex justify-center items-center w-full">
                    <Button
                        type="submit"
                        className="max-full max-w-[400px] min-w-[400px] bg-[#164B88] hover:bg-[#0e3970] text-white py-3 rounded-md mt-3"
                    >
                        Submit
                    </Button>
                </div>
            </form>
        </Form>
    );
};

export default SignupStepDetailsForm;

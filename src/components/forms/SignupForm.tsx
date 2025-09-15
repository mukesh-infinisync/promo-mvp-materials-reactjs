import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
    SignupFormValues,
    signupEmailSchema,
    signupDetailsSchema,
} from "@/schemas/auth";
import FormHeader from "../common/AuthHeader";
import SignupStepEmailForm from "./SignupStepEmailForm";
import SignupStepDetailsForm from "./SignupStepDetailsForm";
import VerifyEmailPrompt from "@/VerifyEmailPrompt";
import EmailVerified from "../EmailVerified";
import { cn } from "@/lib/utils";

const SignupForm: React.FC = () => {
    const [step, setStep] = useState<"email" | "details">("email");
    const [showEmailPrompt, setShowEmailPrompt] = useState<boolean>(false);
    const [mailSend, setMailSend] = useState<boolean>(false);

    const form = useForm<SignupFormValues>({
        mode: "onSubmit",
        reValidateMode: "onChange",
        defaultValues: {
            email: "",
            agree: false,
            role: "buyer",
            name: "",
            company: "",
            mobile: "",
            address: "",
            country: "",
            state: "",
            city: "",
        },
    });

    // ✅ Map Zod errors → RHF
    const applyZodErrors = (errors: any) => {
        Object.entries(errors).forEach(([field, messages]) => {
            if (Array.isArray(messages) && messages.length > 0) {
                form.setError(field as keyof SignupFormValues, {
                    type: "manual",
                    message: messages[0],
                });
            }
        });
    };

    const handleEmailStep = (values: SignupFormValues) => {
        const result = signupEmailSchema.safeParse(values);
        if (!result.success) {
            applyZodErrors(result.error.flatten().fieldErrors);
            return;
        }
        setStep("details");
    };

    const handleDetailsStep = (values: SignupFormValues) => {
        const result = signupDetailsSchema.safeParse(values);
        if (!result.success) {
            applyZodErrors(result.error.flatten().fieldErrors);
            return;
        } else {
            setShowEmailPrompt(true);
        }
        console.log("✅ Final Submitted:", result.data);
    };

    const verifyEmailHandler = () => {
        setMailSend(true);
    }

    if(mailSend) {
        return <EmailVerified />
    }

    return (
        <>
            {
                showEmailPrompt === false ? (
                    <div className={cn("w-max bg-white rounded-[12px] shadow-lg py-8 px-5 md:px-[100px]", step === 'email' ? 'w-[80%] md:w-[572px]' : 'w-[80%] md:w-[740px]')}>
                        <FormHeader />
                        {step === "email" ? (
                            <SignupStepEmailForm
                                form={form}
                                onNext={handleEmailStep}
                            />
                        ) : (
                            <SignupStepDetailsForm
                                form={form}
                                onSubmit={handleDetailsStep}
                            />
                        )}
                    </div>
                ) : (
                    <VerifyEmailPrompt onVerify={verifyEmailHandler} />
                )
            }
        </>
    );
};

export default SignupForm;

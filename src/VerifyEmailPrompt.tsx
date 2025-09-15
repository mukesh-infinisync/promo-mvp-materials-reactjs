import React from "react";
import { Button } from "@/components/ui/button";
import FormHeader from "./components/common/AuthHeader";
import MailSentSvg from "@/assets/icons/mail-send.svg";

interface VerifyEmailPromptProps {
    onVerify: () => void;
}

const VerifyEmailPrompt: React.FC<VerifyEmailPromptProps> = ({
    onVerify,
}) => {
    return (
        <div className="w-full max-w-[640px] bg-white rounded-[12px] shadow-lg p-8 flex flex-col items-center gap-4 text-center">
            {/* Logo */}
            <FormHeader />

            {/* Email Icon */}
            <img src={MailSentSvg} alt="Email Sent" />

            {/* Title */}
            <h2 className="text-[1.5rem] font-semibold text-black">
                Please Verify email address
            </h2>

            {/* Description */}
            <p className="text-[1rem] font-medium leading-relaxed text-[#575757]">
                Click on the link that has been sent to your email account to verify
                your email and continue the registration process.
            </p>

            {/* Verify Button */}
            <div className="flex justify-center items-center w-full">
                <Button
                    onClick={onVerify}
                    className="w-[436px] bg-[#164B88] hover:bg-[#0e3970] text-white py-3 rounded-md mt-8"
                >
                    Verify
                </Button>
            </div>
        </div>
    );
};

export default VerifyEmailPrompt;

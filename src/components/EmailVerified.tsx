import React from "react";
import { Button } from "@/components/ui/button";
import FormHeader from "./common/AuthHeader";
import { useNavigate } from "react-router";
import EmailVerifiedSvg from '@/assets/icons/email-verified.svg'

const EmailVerified: React.FC = () => {
    const navigate = useNavigate();

    const goToLogin = () => {
        navigate('/login');
    }

    return (
        <div className="w-full max-w-[640px] bg-white rounded-[12px] shadow-lg p-8 flex flex-col items-center gap-4 text-center">
            {/* Logo */}
            <FormHeader />

            {/* Success Icon */}
            <img src={EmailVerifiedSvg} alt="Email Verified" />

            {/* Title */}
            <h2 className="text-[1.5rem] font-semibold text-black">Email Verified</h2>

            {/* Description */}
            <p className="font-medium text-[1rem] text-[#575757] leading-relaxed">
                Your email was verified, you can continue using the application.
            </p>

            {/* Login Button */}
            <div className="flex justify-center items-center w-full">
                <Button
                    onClick={goToLogin}
                    className="w-[436px] bg-[#164B88] hover:bg-[#0e3970] text-white py-3 rounded-md mt-8"
                >
                    Login
                </Button>
            </div>
        </div>
    );
};

export default EmailVerified;

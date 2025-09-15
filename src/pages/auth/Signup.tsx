import Footer from "@/components/common/Footer";
import SignupForm from "@/components/forms/SignupForm";
import Header from "@/layouts/Header";
import React from "react";

const RegisterPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header showBtn={false} />

      {/* Content Area */}
      <main className="flex-1 bg-[#3A6EAA] flex justify-center items-center px-4 py-[120px] overflow-y-auto">
        <SignupForm />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default RegisterPage;

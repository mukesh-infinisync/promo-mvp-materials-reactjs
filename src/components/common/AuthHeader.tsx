import React from "react";
import AuthLogoSvg from '@/assets/icons/forms-logo.svg';


const FormHeader: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <img src={AuthLogoSvg} alt="MVP Materials" className="h-12 w-auto" />
    </div>
  );
};

export default FormHeader;

// src/components/common/MaterialCard.tsx
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import MaterialImg from "@/assets/images/battery-material.png";
import RequestForQuoteSvg from "@/assets/icons/request-for-quote.svg";
import { CertifiedSvg, CompliantSvg, TraceableSvg } from "@/assets";
import { AuthProtectedButton } from "./AuthProtectedButton";

export interface MaterialCardProps {
  id: number;
  title: string;
  subtitle: string;
  country: string;
  metrics: string[];
  tags: (string | { label: string; icon?: string })[];
  image: string;
  onViewDetailsClick?: () => void;
  showReqQuoteBtn?: boolean;
  onRequestQuote?: () => void;
}

const MaterialCard: React.FC<{ material: MaterialCardProps }> = ({ material }) => {
  const {showReqQuoteBtn = true, onRequestQuote = () => {}} = material;

  const handleViewDetailsClick = () => {
    if(material.onViewDetailsClick) {
      material.onViewDetailsClick();
    } else {
      console.log('view details clicked');
    }
  }

  const reqQouteHandler = () => {
    if(onRequestQuote) {
      onRequestQuote();
    }
  }

  return (
    <motion.div
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="w-full max-w-full sm:max-w-[95%] lg:max-w-[650px] border border-gray-200 rounded-2xl shadow-md 
                 p-6 sm:p-2 bg-white flex flex-col gap-6"
    >
      {/* Top Row */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Image */}
        <div className="flex justify-center md:justify-start w-full md:w-1/3">
          <img
            src={MaterialImg}
            alt={material.title}
            className="max-h-[180px] w-auto max-w-full object-contain"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-between w-full md:w-2/3 gap-4 pt-2">
          {/* Title + Info + CTA */}
          <div className="flex md:flex-row justify-between items-start gap-4 sm:flex-col sm:items-start sm:gap-6">
            {/* Title / Info */}
            <div className="flex flex-col gap-2">
              <h2 className="text-base sm:text-lg md:text-xl font-semibold leading-snug">
                {material.title}
              </h2>
              <p className="text-gray-500 text-xs sm:text-sm">Black Mass</p>
              <p className="text-gray-800 font-medium text-[1rem]">{material.subtitle}</p>
              <p className="text-gray-800 font-medium text-[1rem]">{material.country}</p>
            </div>

            {/* CTA + Metrics */}
            <div className="flex flex-col gap-3 items-end lg:items-start pr-6">
              {
                showReqQuoteBtn && (
              <AuthProtectedButton>
                <Button
                  onClick={reqQouteHandler}
                  variant="secondary"
                  className="flex items-center gap-2 bg-[#164B88] text-white hover:bg-[#0b4aa0] 
                           px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm rounded-lg"
                >
                  <img src={RequestForQuoteSvg} alt="Request For Quote" className="w-4 sm:w-5" />
                  Request for quote
                </Button>
              </AuthProtectedButton>
                )
              }

              <div>
                <p className="text-gray-500 text[.8rem] font-medium mb-1">Key Metrics</p>
                <div className="flex flex-col gap-1">
                  {material.metrics.map((m, i) => (
                    <p
                      key={i}
                      className="text-gray-800 text-[1rem] font-medium md:text-base leading-tight"
                    >
                      {m}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-dashed border-green-500" />

      {/* Bottom Row */}
      <div className="flex flex-row justify-between xl:items-center gap-4 lg:px-6 lg:pb-2">
        {/* Tags */}
        <div className="flex gap-3 flex-wrap">
          {material.tags.map((tag, i) => {
            const label = typeof tag === "string" ? tag : tag.label;
            return (
              <div
                key={i}
                className="flex items-center gap-2 border border-[#313131CC] rounded-full px-3 sm:px-4 py-1.5"
              >
                {i === 0 && <img src={CompliantSvg} alt={label} className="w-4 sm:w-5" />}
                {i === 1 && <img src={CertifiedSvg} alt={label} className="w-4 sm:w-5" />}
                {i === 2 && <img src={TraceableSvg} alt={label} className="w-4 sm:w-5" />}
                <span className="text-sm sm:text-base">{label}</span>
              </div>
            );
          })}
        </div>

        {/* View Details Button */}
        <AuthProtectedButton>
          <Button onClick={handleViewDetailsClick} className="bg-[#60B244] hover:bg-green-600 text-white text-sm sm:text-base rounded-md px-5 sm:px-6 py-2 sm:py-2.5 sm:ml-auto md:ml-0">
            View Details
          </Button>
        </AuthProtectedButton>
      </div>
    </motion.div>
  );
};

export default MaterialCard;

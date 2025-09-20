import React from "react";

interface CompanyLogoProps {
  size?: "sm" | "md" | "lg";
  variant?: "full" | "icon" | "text";
  className?: string;
}

const CompanyLogo: React.FC<CompanyLogoProps> = ({
  size = "md",
  variant = "full",
  className = "",
}) => {
  // Size variants
  const sizeClasses = {
    sm: "h-8",
    md: "h-12",
    lg: "h-16",
  };

  // Color scheme (customize these to match your brand)
  const primaryColor = "text-green-400";
  const secondaryColor = "text-emerald-500";
  // const darkColor = "text-gray-800";

  const LogoIcon = () => (
    <div className={`relative ${sizeClasses[size]} drop-shadow-lg`}>
      {/* This is a placeholder for your PNG image - replace with actual Image component */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className={`${sizeClasses[size]} aspect-square rounded-full bg-gradient-to-br from-indigo-500 to-emerald-400 flex items-center justify-center shadow-xl`}
        >
          <svg
            className="w-3/4 h-3/4 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        </div>
      </div>
    </div>
  );

  // Logo text component
  const LogoText = () => (
    <div
      className={`
      flex flex-col font-bold
      ${size === "sm" ? "text-sm" : size === "md" ? "text-lg" : "text-2xl"}
      p-4
      drop-shadow-sm
    `}
    >
      <span className={primaryColor}>IHIRWE</span>
      <span className={`${secondaryColor} -mt-1`}>TRADING</span>
      <span className={`text-xs ${primaryColor} font-normal mt-0.5`}>CO Ltd.</span>
    </div>
  );

  return (
    <div className={`flex items-center space-x-2 shadow-md rounded-xl ${className}`}>
      {(variant === "full" || variant === "icon") && <LogoIcon />}
      {(variant === "full" || variant === "text") && <LogoText />}
    </div>
  );
};

export default CompanyLogo;

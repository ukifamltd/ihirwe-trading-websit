import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SliderNavigationProps {
  onPrev: () => void;
  onNext: () => void;
  className?: string;
  buttonClassName?: string;
  iconSize?: number;
}

const SliderNavigation: React.FC<SliderNavigationProps> = ({
  onPrev,
  onNext,
  className = "",
  buttonClassName = "w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-green-400",
  iconSize = 24,
}) => {
  return (
    <div className={`flex gap-4 z-10 ${className}`}>
      <button
        onClick={onPrev}
        className={buttonClassName}
        aria-label="Previous slide"
      >
        <ChevronLeft size={iconSize} />
      </button>
      <button
        onClick={onNext}
        className={buttonClassName}
        aria-label="Next slide"
      >
        <ChevronRight size={iconSize} />
      </button>
    </div>
  );
};

export default SliderNavigation;
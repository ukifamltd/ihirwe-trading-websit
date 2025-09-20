import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselProps {
  items: Array<{
    id: number;
    image: string;
    title: string;
    date: string;
  }>;
  title: string;
  className?: string;
}

const Carousel: React.FC<CarouselProps> = ({ items, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const CARD_WIDTH = 320;
  const GAP = 24;
  const SCROLL_AMOUNT = CARD_WIDTH + GAP;

  useEffect(() => {
    if (!autoPlay) return;

    intervalRef.current = setInterval(() => {
      handleNext();
    }, 3000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [autoPlay, currentIndex, items.length]);

  const scrollToCard = (index: number) => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: index * SCROLL_AMOUNT,
        behavior: "smooth",
      });
    }
  };

  const handleNext = () => {
    setCurrentIndex((prev) => {
      const newIndex = prev === items.length - 1 ? 0 : prev + 1;
      scrollToCard(newIndex);
      return newIndex;
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => {
      const newIndex = prev === 0 ? items.length - 1 : prev - 1;
      scrollToCard(newIndex);
      return newIndex;
    });
  };

  const handleManualNavigation = (newIndex: number) => {
    setAutoPlay(false);
    setCurrentIndex(newIndex);
    scrollToCard(newIndex);
    setTimeout(() => setAutoPlay(true), 5000);
  };

  return (
    <div className="relative">
      <h2 className="text-2xl font-bold text-gray-800 mb-8 text-left">
        {title}
      </h2>

      <div className="relative overflow-hidden">
        <button
          onClick={() => {
            setAutoPlay(false);
            handlePrev();
          }}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-100 transition-all"
          aria-label="Previous events"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={() => {
            setAutoPlay(false);
            handleNext();
          }}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-100 transition-all"
          aria-label="Next events"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        <div
          ref={containerRef}
          className="flex gap-6 snap-x snap-mandatory py-2 px-2 overflow-hidden"
        >
          {items.map((item, index) => (
            <div
              key={item.id}
              className={`flex-shrink-0 w-80 bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 ${
                currentIndex === index ? "ring-2 ring-green-500" : ""
              }`}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-8 gap-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => handleManualNavigation(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentIndex === index ? "bg-green-600 w-6" : "bg-gray-300"
            }`}
            aria-label={`Go to event ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;

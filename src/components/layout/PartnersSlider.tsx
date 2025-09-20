import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const PartnersSlider: React.FC = () => {
  const partners = [
    {
      id: 1,
      name: "Rwanda Standards Board",
      logo: "/images/partners/rsb.png",
    },
    {
      id: 2,
      name: "Private Sector Federation",
      logo: "/images/partners/psf.png",
    },
    {
      id: 3,
      name: "Ministry of Trade and Industry",
      logo: "/images/partners/minicom.png",
    },
    {
      id: 4,
      name: "Ministry of Agriculture and Animal Resources",
      logo: "/images/partners/minagri.png",
    },
    {
      id: 5,
      name: "RWANDA FDA",
      logo: "/images/partners/fda.png",
    },
    {
      id: 6,
      name: "AMMIRWA",
      logo: "/images/partners/ammirwa.png",
    },
  ];

  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Double the partners array to create a seamless loop
  const duplicatedPartners = [...partners, ...partners];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setCurrentIndex((prevIndex) => {
          // Reset to 0 when reaching the end of the original array
          // but continue showing the duplicated items for seamless transition
          return (prevIndex + 1) % partners.length;
        });
      }
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [isPaused, partners.length]);

  const scrollLeft = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex - 1 + partners.length) % partners.length
    );
  };

  const scrollRight = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % partners.length
    );
  };

  // Calculate the transform value for the sliding animation
  const transformValue = `translateX(-${currentIndex * (100 / partners.length)}%)`;

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-green-600 font-medium tracking-wider">
            OFFICIALLY
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mt-2 font-serif">
            Recognized by
          </h2>
        </div>

        <div 
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all hover:scale-110"
            aria-label="Previous partners"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all hover:scale-110"
            aria-label="Next partners"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>

          <div className="relative w-full h-48">
            <div
              ref={sliderRef}
              className="flex absolute top-0 left-0 w-full transition-transform duration-500 ease-in-out"
              style={{ transform: transformValue }}
            >
              {duplicatedPartners.map((partner, index) => (
                <div
                  key={`${partner.id}-${index}`}
                  className="flex-shrink-0 w-full h-full flex items-center justify-center"
                  style={{ width: `${100 / partners.length}%` }}
                >
                  <div className="w-48 h-48 bg-gray-50 rounded-xl flex items-center justify-center p-6 border border-gray-200 hover:shadow-lg transition-all hover:border-green-300 mx-auto">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-h-full max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSlider;
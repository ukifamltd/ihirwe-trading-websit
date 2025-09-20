import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import slidesData from "../../data/slides.json";
import SliderNavigation from "../ui/SliderNavigation";

interface HeroSlide {
  title: string;
  descriptionLeft: string;
  descriptionRight: string;
  buttonText: string;
  imageUrl: string;
}

interface HeroSliderProps {
  onContactClick?: () => void;
  interval?: number;
}

const HeroSlider: React.FC<HeroSliderProps> = ({
  // onContactClick,
  interval = 5000,
}) => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  const slides: HeroSlide[] = slidesData;

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, interval);
    return () => clearInterval(timer);
  }, [current]);

  const nextSlide = () => {
    setDirection("next");
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection("prev");
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const setSlide = (index: number) => {
    setDirection(index > current ? "next" : "prev");
    setCurrent(index);
  };

  const slideTransition = {
    duration: 0.8,
    ease: "easeInOut" as const,
  };
  const slideVariants = {
    enter: (direction: string) => ({
      x: direction === "next" ? "100%" : "-100%",
      opacity: 0.5,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: slideTransition,
    },
    exit: (direction: string) => ({
      x: direction === "next" ? "-100%" : "100%",
      opacity: 0,
      transition: slideTransition,
    }),
  };

  const { title, descriptionLeft, descriptionRight, imageUrl } =
    slides[current];

  return (
    <div className="relative w-full h-screen">
      {/* Background overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30 z-10"></div>

      <AnimatePresence custom={direction} initial={false}>
        <motion.div
          key={current}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundPosition: "center center",
          }}
        >
          {/* Content container with responsive padding */}
          <div className="relative z-20 h-full flex flex-col justify-end pb-32 px-6 sm:px-10 md:flex-row md:items-end md:justify-between md:pb-24">
            {/* Left content - main headline and button */}
            <div className="max-w-md space-y-4 md:space-y-6 mb-8 md:mb-0">
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-green-400 drop-shadow-lg bg-white/90 px-4 py-2 rounded-lg"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                {title}
              </motion.h1>

              <motion.p
                className="text-xl sm:text-2xl font-semibold text-white drop-shadow-md bg-black/30 px-3 py-2 rounded-lg"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                {descriptionLeft}
              </motion.p>

              <motion.div
                className="hidden md:block max-w-sm text-right mb-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <p className="text-lg font-medium text-white leading-relaxed drop-shadow-sm bg-black/30 px-4 py-3 rounded-lg">
                  {descriptionRight}
                </p>
              </motion.div>
            </div>

            {/* Right content - secondary description (desktop only) */}
            <motion.div
              className="hidden md:block max-w-sm text-right mb-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <p className="text-base text-white leading-relaxed drop-shadow-sm">
                {descriptionRight}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation controls */}
      <SliderNavigation
        onPrev={prevSlide}
        onNext={nextSlide}
        className="absolute bottom-8 right-4 z-30 md:bottom-12 md:right-8"
      />

      {/* Dot indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2 md:bottom-8">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setSlide(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              idx === current
                ? "bg-white w-6 scale-110"
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;

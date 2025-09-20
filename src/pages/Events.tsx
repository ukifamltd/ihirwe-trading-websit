import React, {useEffect, useState} from "react";
import Navigation from "../components/layout/Navigation";
import Footer from "../components/layout/Footer";
import Carousel from "../components/ui/Carousel";
import { motion } from "framer-motion";
import PageLoader from "../components/layout/PageLoader";

const Events: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);
  const seasonalEvents = [
    {
      id: 1,
      image: "/images/avocados.jpg",
      title: "Spring Planting",
      date: "March 15, 2023",
      description: "Join us for our annual spring planting festival",
    },
    {
      id: 2,
      image: "/images/beans.jpg",
      title: "Summer Harvest",
      date: "June 20, 2023",
      description: "Celebrate the first harvest of the season",
    },
    {
      id: 3,
      image: "/images/tomatoes.jpg",
      title: "Autumn Preparation",
      date: "September 10, 2023",
      description: "Preparing our fields for the winter season",
    },
    {
      id: 4,
      image: "/images/maize.jpg",
      title: "Winter Planning",
      date: "December 5, 2023",
      description: "Community planning for next year's crops",
    },
  ];

  const upcomingEvents = [
    {
      id: 1,
      image: "/images/cassava.jpg",
      title: "Farm Open Day",
      date: "June 15, 2023",
      description: "Tour our facilities and meet our farmers",
    },
    {
      id: 2,
      image: "/images/coffee.jpg",
      title: "Harvest Festival",
      date: "August 20, 2023",
      description: "Annual celebration of our bountiful harvest",
    },
    {
      id: 3,
      image: "/images/harvest.jpg",
      title: "Agricultural Workshop",
      date: "October 12, 2023",
      description: "Learn sustainable farming techniques",
    },
    {
      id: 4,
      image: "/images/factory.jpg",
      title: "Processing Tour",
      date: "November 8, 2023",
      description: "See how we process our farm products",
    },
  ];

  if (isLoading) {
    return <PageLoader />;
  }
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <motion.div
        className="relative h-96 w-full bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/images/coffee.jpg')" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/30" />
        <div className="max-w-7xl mx-auto text-center text-white relative z-10 px-4">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4 font-serif"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Our Agricultural Events
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Join our community events and seasonal celebrations
          </motion.p>
        </div>
      </motion.div>

      {/* Events Section */}
      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto space-y-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center font-serif">
              Seasonal Events
            </h2>
            <Carousel
              items={seasonalEvents}
              title="Seasonal Changes"
              className="bg-gray-50 rounded-xl p-6"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center font-serif">
              Upcoming Events
            </h2>
            <Carousel
              items={upcomingEvents}
              title="Upcoming Events"
              className="bg-gray-50 rounded-xl p-6"
            />
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;

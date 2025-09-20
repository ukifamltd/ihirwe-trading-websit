import React, { useState, useEffect } from "react";
import HeroSlider from "../components/layout/HeroSlider";
import Navigation from "../components/layout/Navigation";
import PartnersSlider from "../components/layout/PartnersSlider";
import Footer from "../components/layout/Footer";
import PageLoader from "../components/layout/PageLoader";
import { Handshake, Heart, Sprout } from "lucide-react";
import { motion } from "framer-motion";

const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleContact = () => {
    window.location.href = "/contact";
  };

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navigation />

      <main className="flex-grow relative">
        <HeroSlider onContactClick={handleContact} />

        {/* Our Story Section */}
        <section className="py-24 px-4 bg-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-green-600 font-semibold uppercase tracking-widest">
                Our Journey
              </span>
              <h2 className="text-4xl font-bold text-gray-900 font-serif">
                From Maize Processing to Agricultural Excellence
              </h2>
              <div className="prose prose-gray max-w-none">
                <p>
                  Rwanda, a landlocked country with agricultural vocation, is
                  working to transform its economy through agricultural
                  development. Ihirwe Trading Co. began this journey in 2017
                  with the vision of establishing a maize processing factory to
                  contribute to this transformation.
                </p>
                <p>
                  We started as a small factory producing 5 tons per day, and
                  through dedication and commitment to quality, we have now
                  reached 80 tons per day. Our goal is to continue growing to
                  produce at least 200 tons per day in the coming years.
                </p>
                <p>
                  We work closely with local maize producers, traders,
                  consumers, and authorities as partners in development,
                  contributing to the revitalization of Rwanda's agricultural
                  sector.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src="/images/1.jpg"
                alt="Fresh farm produce basket"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </motion.div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-24 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-green-600 font-semibold uppercase tracking-widest">
                Our Mission
              </span>
              <h2 className="text-4xl font-bold text-gray-900 mt-2 font-serif">
                Transforming Rwanda's Agriculture
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                {
                  icon: <Handshake className="w-12 h-12 text-green-600" />,
                  title: "Local Partnerships",
                  description:
                    "Working closely with maize producers, traders, and local authorities as partners in development and community growth.",
                  bg: "bg-green-50",
                },
                {
                  icon: <Heart className="w-12 h-12 text-red-500" />,
                  title: "Quality Processing",
                  description:
                    "From 5 tons to 80 tons daily production, we maintain uncompromising standards in maize flour and animal feed processing.",
                  bg: "bg-red-50",
                },
                {
                  icon: <Sprout className="w-12 h-12 text-blue-600" />,
                  title: "National Development",
                  description:
                    "Contributing to Rwanda's agricultural transformation and economic growth through sustainable maize processing.",
                  bg: "bg-blue-50",
                },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  className={`${value.bg} p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center group`}
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <div className="mb-6 p-4 rounded-full bg-white shadow-md group-hover:scale-110 transition-transform">
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 text-gray-800 font-serif">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <PartnersSlider />
      <Footer />
    </div>
  );
};

export default Home;

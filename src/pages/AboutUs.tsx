import React, { useEffect, useState } from "react";
// import { Handshake, Heart, Sprout } from "lucide-react";
import Navigation from "../components/layout/Navigation";
import Footer from "../components/layout/Footer";
import { motion } from "framer-motion";
import PageLoader from "../components/layout/PageLoader";

const AboutUs: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <PageLoader />;
  }
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <motion.div
        className="relative h-96 w-full bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/images/5.jpg')" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/30" />
        <div className="max-w-7xl mx-auto text-center text-white relative z-10 px-4">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6 font-serif"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Our Story
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            From humble beginnings to becoming your trusted partner - this is
            who we are and what we stand for.
          </motion.p>
        </div>
      </motion.div>

      {/* Our Journey Section */}
      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="flex flex-col md:flex-row gap-12 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="md:w-1/2 space-y-6">
              <motion.h2
                className="text-3xl font-bold text-gray-800 font-serif"
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                Our Journey
              </motion.h2>
              <motion.div
                className="prose prose-gray max-w-none text-justify leading-relaxed"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                <p className="text-lg mb-6 text-gray-700">
                  Rwanda, a landlocked country with agricultural vocation is
                  ranked among the least developed countries. Its economy is
                  characterized by structural imbalances leading to widespread
                  poverty of the population, long term economic dependency on
                  outsiders, malnutrition and so on.
                </p>

                <p className="text-lg mb-6 text-gray-700">
                  Yet revitalizing its agricultural sector could provide much of
                  the financial resources needed to develop the rest of the
                  economy, as noticed in many developed countries at the
                  beginning of industrialization. The industrialization of
                  Rwanda could be effective, if certain prerequisites including
                  the transformation of the agricultural sector were available.
                </p>

                <p className="text-lg mb-6 text-gray-700">
                  Regarding this transformation, some are preaching the
                  installation of small units for processing of local production
                  of the peasants for their consumption first, and sell the
                  surplus to other markets, instead of starting with the
                  installation of larger units. It was not long ago that the
                  national maize production was consumed in its natural state,
                  either in the form of seeds, or in the form of leg made based
                  on crude flour obtained by milling with simple mills.
                </p>

                <p className="text-lg mb-6 text-gray-700">
                  Currently, few maize processing enterprises in maize flour
                  (akawunga) are emerging, but production remains at embryonic
                  stage and cannot meet the demand that is already on the market
                  and which is increasing from day to day. Furthermore, export
                  oriented business in this sector remains inconsistent.
                </p>

                <p className="text-lg mb-6 text-gray-700">
                  Yet the national maize production remains relatively promising
                  and initiatives for its development continue to grow, which
                  promises a certain increase in production in the future. Maize
                  remains one of the major food crops, and associations
                  alongside cooperatives are emerging to better defend their
                  interests and to promote this sector through maize growing
                  activities.
                </p>

                <p className="text-lg mb-6 text-gray-700">
                  The processing of maize flour has the advantage of
                  diversifying its integral maize flour consumption in ordinary
                  flour for porridge, as well as its use in the manufacture of
                  feed for livestock. It is in this context that this project
                  finds its opportunity.
                </p>

                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600 mt-8">
                  <h3 className="text-xl font-semibold text-green-800 mb-3 font-serif">
                    Ihirwe Trading Co.
                  </h3>
                  <p className="text-lg text-green-700">
                    It was in 2017 that the idea of establishing a maize
                    processing factory began. We have located our factory in
                    Kamonyi district, Runda sector, Ka Gihara cell. We started
                    as a small factory, where we could produce at least 5 tons
                    per day, and now we have reached 80 tons per day. We still
                    need to continue our growth journey whereby in the coming
                    years we will have the capacity to produce at least 200 tons
                    per day. In normal times, we work well with our neighbors
                    around us, partners and customers. We contribute to the
                    development of maize producers and traders as well as
                    consumers. Furthermore we work with local authorities as
                    partners in development.
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div
              className="md:w-1/2"
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] shadow-lg">
                <img
                  src="/images/3.jpg"
                  alt="Maize processing and farming in Rwanda"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <br />
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] shadow-lg">
                <img
                  src="/images/2.jpg"
                  alt="Maize processing and farming in Rwanda"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              {/* Additional image or content can go here if needed */}
              <div className="mt-6 bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">
                  Our Progress
                </h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-blue-700">2017</span>
                    <span className="font-semibold text-blue-800">
                      5 tons/day
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-700">Current</span>
                    <span className="font-semibold text-blue-800">
                      80 tons/day
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-700">Future Goal</span>
                    <span className="font-semibold text-blue-800">
                      200 tons/day
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Processing & Impact Section */}
      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl font-bold text-center text-gray-800 mb-12 font-serif"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            Our Processing Approach
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="bg-green-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-all"
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Value Addition
              </h3>
              <p className="text-gray-600">
                We transform raw maize into diversified products including
                quality maize flour (akawunga) for porridge and livestock feed,
                adding significant value to local agricultural production and
                reducing dependency on imported processed goods.
              </p>
            </motion.div>
            <motion.div
              className="bg-blue-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-all"
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Community Development
              </h3>
              <p className="text-gray-600">
                We work closely with local maize producers, traders, consumers,
                and authorities as partners in development. Our growth from 5 to
                80 tons daily production creates economic opportunities and
                contributes to Rwanda's agricultural transformation journey.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;

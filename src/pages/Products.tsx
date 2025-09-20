import React, { useEffect, useState } from "react";
import Navigation from "../components/layout/Navigation";
import Footer from "../components/layout/Footer";
import { motion } from "framer-motion";
import PageLoader from "../components/layout/PageLoader";
import { Link } from "react-router-dom";

const Products: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Sample product data
  const products = [
    {
      id: 1,
      name: "Pokea Champion Super (enveloppe)",
      description:
        "1st grade super maize flour packed in enveloppe(5kg)",
      image: "/images/products/PokeaChampionSuper.jpg",
      category: "Grains",
    },
    {
      id: 2,
      name: "Pokea Champion",
      description: "2nd grade Maize flour packed in laminated bags(5kg, 10kg, 25kg)",
      image: "/images/products/pokeaChampion.jpg",
      category: "Vegetables",
    },
    {
      id: 3,
      name: "Champion ordinaire",
      description: "Whole maize grain flour packed in laminated bags(25kg, 50kg)",
      image: "/images/products/championOrdinare.jpg",
      category: "Beverages",
    },
    {
      id: 4,
      name: "Kwema Maize Flour",
      description: "1st grade Maize flour packed in laminated bags(25kg)",
      image: "/images/products/kwema.jpg",
      category: "Root Crops",
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
        className="relative h-96 flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/15.jpg')" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/30" />
        <div className="max-w-7xl mx-auto text-center text-white relative z-10 px-4">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl text-white-800 font-bold mb-4 font-serif"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Our  Products
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl max-w-2xl text-white-900 mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Premium quality agricultural products produced with
          </motion.p>
        </div>
      </motion.div>

      {/* Products Section */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ y: -5 }}
              >
                {/* Product Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 font-serif">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-green-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 font-serif"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Interested in Our Products?
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Contact us today to discuss wholesale opportunities or special
            orders.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link to="/contact" className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-lg shadow-md transition-all duration-300 hover:scale-105">
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;

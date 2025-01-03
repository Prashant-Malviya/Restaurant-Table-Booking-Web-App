import React from "react";
import { motion } from "framer-motion";

const About = () => {
  
  const textVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } },
  };

  return (
    <section className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white py-20 px-6">
      <div className="container mx-auto">
        {/* Heading */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Neina
        </motion.h1>

        {/* Content Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
         
          <motion.div
            className="space-y-6"
            variants={textVariant}
            initial="hidden"
            animate="visible"
          >
            <p className="text-lg leading-relaxed">
              Neina is a platform that empowers influencers to monetize their
              content by sharing{" "}
              <span className="font-semibold">shoppable links</span> with their
              followers. This innovative approach bridges the gap between
              engaging social media content and seamless e-commerce experiences.
            </p>
            <p className="text-lg leading-relaxed">
              Our platform allows users to effortlessly discover and purchase
              products recommended by their favorite influencers. Each
              transaction helps influencers earn commissions, creating a
              win-win ecosystem for influencers, followers, and brands alike.
            </p>
            <p className="text-lg leading-relaxed">
              At Neina, we aim to redefine online shopping by making it
              personalized, trustworthy, and driven by authentic
              recommendations.
            </p>
          </motion.div>

          {/* Card Section  */}
          <div className="relative">
            <motion.div
              className="bg-white rounded-lg shadow-lg p-6 space-y-4 transform transition-all duration-300 hover:scale-105"
              variants={cardVariant}
              initial="hidden"
              animate="visible"
            >
              <h2 className="text-2xl font-bold text-purple-600">
                Influencers Empowered
              </h2>
              <p className="text-gray-700">
                Share shoppable links and earn commissions effortlessly.
              </p>
            </motion.div>
            <motion.div
              className="absolute bg-white rounded-lg shadow-lg p-6 space-y-4 transform transition-all duration-300 hover:scale-105 top-32 right-0"
              variants={cardVariant}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold text-pink-600">
                Seamless Shopping
              </h2>
              <p className="text-gray-700">
                Followers enjoy streamlined shopping experiences.
              </p>
            </motion.div>
            <motion.div
              className="absolute bg-white rounded-lg shadow-lg p-6 space-y-4 transform transition-all duration-300 hover:scale-105 top-64 left-0"
              variants={cardVariant}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-red-600">
                Revenue for Influencers
              </h2>
              <p className="text-gray-700">
                Monetize content with authentic recommendations.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

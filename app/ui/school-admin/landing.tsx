"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function Landing() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="flex items-center bg-gradient-to-br from-green-50 to-white py-30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center w-full">
          {/* Left Content Section */}
          <motion.div
            className="space-y-6 sm:space-y-8 text-center lg:text-left order-2 lg:order-1"
            initial="hidden"
            animate="visible"
            variants={slideInLeft}
          >
            <motion.div
              className="space-y-4 sm:space-y-6"
              variants={containerVariants}
            >
              <motion.h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
                variants={fadeInUp}
              >
                <motion.span variants={fadeInUp}>
                  Support Your Students' Career & Immigration Journey
                </motion.span>
              </motion.h2>

              <motion.p
                className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0"
                variants={fadeInUp}
              >
                Help your students transition from education to employment with
                ease.
              </motion.p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 justify-center lg:justify-start"
              variants={containerVariants}
            >
              <motion.button
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-[#A0C366] text-[#A0C366] font-medium rounded-full hover:bg-green-50 hover:border-[#A0C366] transition-all duration-300 text-base sm:text-lg order-2 sm:order-1"
                variants={fadeInUp}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(34, 197, 94, 0.15)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                Search Jobs
              </motion.button>

              <motion.button
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-[#A0C366] text-white font-medium rounded-full hover:bg-green-600 transition-all duration-300 text-base sm:text-lg order-1 sm:order-2"
                variants={fadeInUp}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(34, 197, 94, 0.25)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                Sign up Today
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Image Section */}
          <motion.div
            className="flex justify-center lg:justify-end order-2"
            initial="hidden"
            animate="visible"
            variants={slideInRight}
          >
            <motion.div
              className="relative w-full max-w-sm sm:max-w-md lg:max-w-none lg:w-[500px] h-64 sm:h-80 md:h-96 lg:h-[600px] bg-gray-100 rounded-2xl sm:rounded-3xl flex items-center justify-center overflow-hidden shadow-lg"
              variants={fadeInUp}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(34, 197, 94, 0.15)",
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-green-500/10 to-transparent z-10"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <Image
                src="/admin-landing.jpg"
                alt="admin landing"
                fill
                className="rounded-2xl sm:rounded-3xl object-cover"
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 500px"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

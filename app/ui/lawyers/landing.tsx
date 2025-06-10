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
    hidden: { opacity: 0, x: -60 },
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
    hidden: { opacity: 0, x: 60 },
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
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      className="flex items-center py-30 lg:py-40 bg-gradient-to-br from-yellow-50 to-white"
    >
      <div className="container mx-auto px-6 max-w-md lg:max-w-7xl lg:px-0">
        {/* Mobile Layout */}
        <motion.div
          className="lg:hidden text-center space-y-8"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Content */}
          <motion.div className="space-y-6" variants={fadeInUp}>
            <motion.h2
              className="text-3xl font-bold text-gray-900 leading-tight"
              variants={fadeInUp}
            >
              Simplify Case Management & Connect
              <span className="text-[#C1B666]"> With Clients</span>
            </motion.h2>

            <motion.p
              className="text-base text-gray-600 leading-relaxed"
              variants={fadeInUp}
            >
              Purpose Connect helps you support international students with
              efficient legal guidance.
            </motion.p>
          </motion.div>

          {/* Buttons */}
          <motion.div className="space-y-4" variants={containerVariants}>
            <motion.button
              className="w-full px-8 py-4 border-2 font-medium rounded-full transition-all duration-300 text-lg"
              style={{
                borderColor: "#C1B666",
                color: "#C1B666",
              }}
              variants={fadeInUp}
              whileHover={{
                scale: 1.02,
                backgroundColor: "#C1B66610",
                boxShadow: "0 8px 25px rgba(193, 182, 102, 0.15)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              Search Jobs
            </motion.button>

            <motion.button
              className="w-full px-8 py-4 text-white font-medium rounded-full transition-all duration-300 text-lg"
              style={{
                backgroundColor: "#C1B666",
              }}
              variants={fadeInUp}
              whileHover={{
                scale: 1.02,
                backgroundColor: "#e6c625",
              }}
              whileTap={{ scale: 0.98 }}
            >
              Sign up Today
            </motion.button>
          </motion.div>

          {/* Images */}
          <motion.div
            className="relative flex gap-2 pt-4 justify-start"
            variants={containerVariants}
          >
            {/* Left smaller image */}
            <motion.div
              className="relative w-60 aspect-square bg-gray-100 rounded-2xl overflow-hidden shadow-lg"
              variants={imageVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="absolute inset-0 z-10 opacity-0"
                style={{
                  background: `linear-gradient(135deg, #C1B66620, #EFD32920)`,
                }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <Image
                src="/lawyer-landing-1.png"
                alt="lawyer landing 1"
                fill
                className="rounded-2xl object-cover"
              />
            </motion.div>

            {/* Right larger image */}
            <motion.div
              className="absolute w-40 aspect-square -bottom-8 -right-4 bg-gray-100 rounded-3xl overflow-hidden shadow-lg"
              variants={imageVariants}
              initial={{ opacity: 0, scale: 0.6, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              whileHover={{ scale: 1.1 }}
            >
              <motion.div
                className="absolute inset-0 z-10 opacity-0"
                style={{
                  background: `linear-gradient(135deg, #EFD32920, #5DAFA120)`,
                }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <Image
                src="/lawyer-landing-2.jpg"
                alt="lawyer landing 2"
                fill
                className="rounded-3xl object-cover"
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content Section */}
          <motion.div
            className="space-y-8"
            initial="hidden"
            animate="visible"
            variants={slideInLeft}
          >
            <motion.div className="space-y-6" variants={containerVariants}>
              <motion.h2
                className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
                variants={fadeInUp}
              >
                Simplify Case Management & Connect
                <span className="text-[#C1B666]"> With Clients</span>
              </motion.h2>

              <motion.p
                className="text-xl text-gray-600 leading-relaxed max-w-2xl"
                variants={fadeInUp}
              >
                Purpose Connect helps you support international students with
                efficient legal guidance.
              </motion.p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex gap-4 pt-4"
              variants={containerVariants}
            >
              <motion.button
                className="px-8 py-4 border-2 font-medium rounded-full transition-all duration-300 text-lg"
                style={{
                  borderColor: "#C1B666",
                  color: "#C1B666",
                }}
                variants={fadeInUp}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#C1B66610",
                  boxShadow: "0 10px 25px rgba(193, 182, 102, 0.15)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                Search Jobs
              </motion.button>

              <motion.button
                className="px-8 py-4 text-white font-medium rounded-full transition-all duration-300 text-lg"
                style={{
                  backgroundColor: "#C1B666",
                }}
                variants={fadeInUp}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#C1B670",
                  boxShadow: "0 10px 25px rgba(239, 211, 41, 0.25)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                Sign up Today
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Image Section */}
          <motion.div
            className="relative flex justify-end"
            initial="hidden"
            animate="visible"
            variants={slideInRight}
          >
            <div className="relative">
              {/* Main large image */}
              <motion.div
                className="relative w-96 h-96 bg-gray-100 rounded-3xl overflow-hidden shadow-xl"
                variants={imageVariants}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 25px 50px rgba(6, 157, 222, 0.15)",
                }}
                transition={{ duration: 0.4 }}
              >
                <motion.div
                  className="absolute inset-0 z-10"
                  style={{
                    background: `linear-gradient(135deg, #C1B66610, #EFD32910)`,
                  }}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <Image
                  src="/lawyer-landing-1.png"
                  alt="lawyer landing 1"
                  fill
                  className="rounded-3xl object-cover"
                />
              </motion.div>

              {/* Overlapping smaller image */}
              <motion.div
                className="absolute -bottom-16 -right-32 w-64 h-64 bg-gray-100 rounded-2xl overflow-hidden shadow-lg"
                transition={{ delay: 0.5, duration: 0.8 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(193, 182, 102, 0.2)",
                }}
              >
                <motion.div
                  className="absolute inset-0 z-10"
                  style={{
                    background: `linear-gradient(135deg, #EFD32910, #5DAFA110)`,
                  }}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <Image
                  src="/lawyer-landing-2.jpg"
                  alt="lawyer landing 2"
                  fill
                  className="rounded-2xl object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

'use client'

import React from "react";
import { Zap, Users, Target } from "lucide-react";
import { motion } from "framer-motion";

const HowItWorks = () => {
  const steps = [
    {
      icon: Zap,
      title: "Create Your Profile",
      description: "Add your education, work eligibility, and visa status.",
      color: "#EFD329",
    },
    {
      icon: Users,
      title: "Get Matched",
      description: "See job opportunities that fit your profile.",
      color: "#EFD329",
    },
    {
      icon: Target,
      title: "Stay Prepared",
      description:
        "Practice interviews, track applications, and stay ahead of visa timelines.",
      color: "#EFD329",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="bg-gradient-to-b from-white to-yellow-50 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center lg:text-left mb-10 sm:mb-12 md:mb-16 lg:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headerVariants}
        >
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight"
            variants={headerVariants}
          >
            <span className="text-black">
              How it works
            </span>
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg md:text-xl lg:text-xl text-gray-600 max-w-3xl mx-auto lg:mx-0 leading-relaxed"
            variants={headerVariants}
          >
            Creating your profile and landing your dream job is easy with
            Purpose Connect.
          </motion.p>
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={index}
                className="bg-white hover:bg-gray-50 transition-colors duration-200 rounded-lg sm:rounded-xl p-6 sm:p-8 lg:p-10 flex flex-col justify-between min-h-[280px] sm:min-h-[320px] lg:min-h-[350px] group cursor-pointer shadow-sm hover:shadow-md border border-gray-100 hover:border-yellow-200"
                variants={itemVariants}
                whileHover={{
                  y: -2,
                  boxShadow: "0 20px 40px -10px rgba(239, 211, 41, 0.15)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Icon */}
                <motion.div className="mb-6 sm:mb-8 lg:mb-12">
                  <motion.div
                    className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-200 relative"
                    style={{ backgroundColor: '#C1B666' }}
                    whileHover={{
                      scale: 1.05,
                      rotate: 5
                    }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        delay: index * 0.1 + 0.5
                      }}
                    >
                      <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                    </motion.div>

                    {/* Animated ring effect */}
                    <motion.div
                      className="absolute inset-0 rounded-lg sm:rounded-xl border-2 border-yellow-300 opacity-0"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0, 0.3, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.5
                      }}
                    />
                  </motion.div>
                </motion.div>

                {/* Content */}
                <motion.div
                  className="flex-1"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                >
                  <motion.h3
                    className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 lg:mb-4 group-hover:text-[#EFD329] transition-colors duration-300"
                    transition={{ duration: 0.2 }}
                  >
                    {step.title}
                  </motion.h3>
                  <motion.p
                    className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {step.description}
                  </motion.p>
                </motion.div>

                {/* Step number indicator */}
                <motion.div
                  className="absolute top-4 right-4 w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center text-[#EFD329] font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {index + 1}
                </motion.div>

                {/* Subtle Accent Line */}
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-[#EFD329] rounded-b-lg sm:rounded-b-xl transition-all duration-300 w-0 group-hover:w-full"
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
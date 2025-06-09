'use client'

import React from "react";
import { Zap, Users, Target } from "lucide-react";
import { motion } from 'framer-motion';

const HowItWorks = () => {
  const steps = [
    {
      icon: Zap,
      title: "Create Your Profile",
      description: "Add your education, work eligibility, and visa status.",
      color: "#C1B666" // Premium Gold
    },
    {
      icon: Users,
      title: "Get Matched",
      description: "See job opportunities that fit your profile.",
      color: "#C1B666"
    },
    {
      icon: Target,
      title: "Stay Prepared",
      description: "Practice interviews, track applications, and stay ahead of visa timelines.",
      color: "#C1B666"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 80, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const iconVariants = {
    hover: {
      scale: 1.1,
      rotateY: 15,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="bg-gradient-to-b from-amber-50 to-white py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <span className="bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent">
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
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <motion.div 
                key={index}
                className="bg-white hover:bg-gradient-to-br hover:from-white hover:to-amber-50 transition-all duration-300 rounded-lg sm:rounded-xl p-6 sm:p-8 lg:p-10 flex flex-col justify-between min-h-[280px] sm:min-h-[320px] lg:min-h-[350px] group shadow-lg hover:shadow-2xl border border-amber-100"
                variants={itemVariants}
                whileHover={{ 
                  y: -12,
                  boxShadow: "0 25px 50px rgba(193, 182, 102, 0.15)",
                  borderColor: "rgba(193, 182, 102, 0.3)"
                }}
                transition={{ duration: 0.4 }}
              >
                {/* Icon */}
                <motion.div 
                  className="mb-6 sm:mb-8 lg:mb-12"
                  variants={iconVariants}
                  whileHover="hover"
                >
                  <div 
                    className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-lg sm:rounded-xl flex items-center justify-center relative overflow-hidden shadow-md"
                    style={{ backgroundColor: step.color }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100"
                      initial={false}
                      animate={{ 
                        scale: [1, 1.5, 1],
                        rotate: [0, 90, 180]
                      }}
                      transition={{ 
                        repeat: Infinity, 
                        duration: 4, 
                        ease: "easeInOut",
                        delay: index * 0.5
                      }}
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-tr from-yellow-200/30 to-amber-200/30 opacity-0 group-hover:opacity-60"
                      initial={false}
                      animate={{ 
                        scale: [1, 1.2, 1]
                      }}
                      transition={{ 
                        repeat: Infinity, 
                        duration: 3, 
                        ease: "easeInOut",
                        delay: index * 0.2
                      }}
                    />
                    <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white relative z-10" />
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div 
                  className="flex-1"
                  variants={itemVariants}
                >
                  <motion.h3 
                    className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 lg:mb-4"
                    variants={itemVariants}
                  >
                    {step.title}
                  </motion.h3>
                  <motion.p 
                    className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed"
                    variants={itemVariants}
                  >
                    {step.description}
                  </motion.p>
                </motion.div>

                {/* Step Number */}
                <motion.div
                  className="absolute -top-4 -right-4 w-10 h-10 bg-gradient-to-br from-amber-500 to-yellow-600 text-white rounded-full flex items-center justify-center text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg"
                  initial={{ scale: 0, rotate: -180 }}
                  whileHover={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  {index + 1}
                </motion.div>

                {/* Premium Accent Line */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-lg"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
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
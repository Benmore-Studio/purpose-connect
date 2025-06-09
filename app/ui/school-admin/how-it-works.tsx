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
      color: "#A0C366" // Academic Green
    },
    {
      icon: Users,
      title: "Get Matched",
      description: "See job opportunities that fit your profile.",
      color: "#A0C366"
    },
    {
      icon: Target,
      title: "Stay Prepared",
      description: "Practice interviews, track applications, and stay ahead of visa timelines.",
      color: "#A0C366"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="bg-gradient-to-b from-green-50 to-white py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28">
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
            <span className="bg-gradient-to-r from-green-600 to-lime-600 bg-clip-text text-transparent">
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
                className="bg-white rounded-lg sm:rounded-xl p-6 sm:p-8 lg:p-10 flex flex-col justify-between min-h-[280px] sm:min-h-[320px] lg:min-h-[350px] group shadow-sm hover:shadow-md border border-green-100 hover:border-green-200 transition-all duration-300 relative"
                variants={itemVariants}
                whileHover={{ 
                  y: -2,
                  transition: { duration: 0.2, ease: "easeOut" }
                }}
              >
                {/* Icon */}
                <motion.div 
                  className="mb-6 sm:mb-8 lg:mb-12"
                >
                  <motion.div 
                    className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-lg sm:rounded-xl flex items-center justify-center transition-all duration-300"
                    style={{ backgroundColor: step.color }}
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                  </motion.div>
                </motion.div>

                {/* Content */}
                <motion.div 
                  className="flex-1"
                  variants={itemVariants}
                >
                  <motion.h3 
                    className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 lg:mb-4 group-hover:text-green-700 transition-colors duration-300"
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

                {/* Subtle Accent Line */}
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-green-400 to-lime-500 rounded-b-lg transition-all duration-300 w-0 group-hover:w-full"
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
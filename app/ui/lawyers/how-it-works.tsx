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
    <section className="bg-gradient-to-b from-amber-50 to-white py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section - Reduced mobile spacing */}
        <motion.div 
          className="text-center lg:text-left mb-8 sm:mb-10 md:mb-12 lg:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headerVariants}
        >
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6 leading-tight"
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

        {/* Steps Grid - Optimized mobile spacing */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
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
                className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 flex flex-col min-h-[200px] sm:min-h-[240px] lg:min-h-[280px] group shadow-sm hover:shadow-md border border-amber-100 hover:border-amber-200 transition-all duration-300 relative"
                variants={itemVariants}
                whileHover={{ 
                  y: -2,
                  transition: { duration: 0.2, ease: "easeOut" }
                }}
              >
                {/* Icon - Reduced mobile spacing */}
                <motion.div 
                  className="mb-4 sm:mb-5 lg:mb-6"
                >
                  <motion.div 
                    className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-lg flex items-center justify-center transition-all duration-300"
                    style={{ backgroundColor: step.color }}
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" />
                  </motion.div>
                </motion.div>

                {/* Content - Optimized spacing */}
                <motion.div 
                  className="flex-1"
                  variants={itemVariants}
                >
                  <motion.h3 
                    className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-amber-700 transition-colors duration-300"
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
                  className="absolute bottom-0 left-0 h-0.5 sm:h-1 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-b-lg transition-all duration-300 w-0 group-hover:w-full"
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
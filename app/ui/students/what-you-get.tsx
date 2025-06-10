'use client'

import React from 'react';
import { Clock, Users, Calendar, MessageSquare, Bell, Gamepad2 } from 'lucide-react';
import { motion } from 'framer-motion';

const WhatYouGet = () => {
  const features = [
    {
      icon: Clock,
      title: "Smart Job Matching",
      description: "Purpose Connect uses advanced algorithms to match you with job opportunities based on your skills, education, and work eligibility."
    },
    {
      icon: Users,
      title: "Immigration Support", 
      description: "Navigating visa requirements and immigration laws can be overwhelming, but with Purpose Connect, you're not alone."
    },
    {
      icon: Calendar,
      title: "Interview Scheduling",
      description: "Purpose Connect's streamlined scheduling tool, you can easily book interviews with top employers."
    },
    {
      icon: MessageSquare,
      title: "AI Mock Interviews",
      description: "Preparing for interviews can be nerve-wracking, but Purpose Connect helps you build confidence through AI-powered mock interviews."
    },
    {
      icon: Bell,
      title: "Immigration Timeline Alerts",
      description: "Purpose Connect ensures you stay on track by sending timely alerts about important immigration deadlines and requirements."
    },
    {
      icon: Gamepad2,
      title: "Gamified Experience",
      description: "To make your job search more engaging, Purpose Connect adds an element of fun with a gamified experience."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const featureVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={headerVariants}
        >
          <motion.p 
            className="text-[#069DDE] font-medium text-base sm:text-lg mb-3 sm:mb-4"
            variants={headerVariants}
          >
            What you get
          </motion.p>
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight"
            variants={headerVariants}
          >
            We're here every step of the way
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0"
            variants={headerVariants}
          >
            Purpose Connect provides tailored job matching, expert immigration support, 
            and tools to help you succeed. Stay organized, prepare with AI-driven mock 
            interviews, and never miss important deadlines. Your career journey, simplified.
          </motion.p>
        </motion.div>

        {/* Features Grid - First 3 features */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16 mb-12 sm:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05, margin: "-50px" }}
          variants={containerVariants}
        >
          {features.slice(0, 3).map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div 
                key={index} 
                className="text-center px-4 sm:px-0 group"
                variants={featureVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="mb-4 sm:mb-6 flex justify-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="relative">
                    <div 
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center relative z-10"
                      style={{ backgroundColor: '#069DDE' }}
                    >
                      <IconComponent 
                        size={32} 
                        color="white" 
                        strokeWidth={1.5}
                        className="sm:w-8 sm:h-8 w-7 h-7"
                      />
                    </div>
                  </div>
                </motion.div>
                <motion.h3 
                  className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-teal-600 transition-colors duration-300"
                  variants={featureVariants}
                >
                  {feature.title}
                </motion.h3>
                <motion.p 
                  className="text-sm sm:text-base text-gray-600 leading-relaxed"
                  variants={featureVariants}
                >
                  {feature.description}
                </motion.p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Features Grid - Last 3 features */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05, margin: "-50px" }}
          variants={containerVariants}
        >
          {features.slice(3, 6).map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div 
                key={index + 3} 
                className="text-center px-4 sm:px-0 group"
                variants={featureVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="mb-4 sm:mb-6 flex justify-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="relative">
                    <div 
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center relative z-10"
                      style={{ backgroundColor: '#069DDE' }}
                    >
                      <IconComponent 
                        size={32} 
                        color="white" 
                        strokeWidth={1.5}
                        className="sm:w-8 sm:h-8 w-7 h-7"
                      />
                    </div>
                  </div>
                </motion.div>
                <motion.h3 
                  className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-teal-600 transition-colors duration-300"
                  variants={featureVariants}
                >
                  {feature.title}
                </motion.h3>
                <motion.p 
                  className="text-sm sm:text-base text-gray-600 leading-relaxed"
                  variants={featureVariants}
                >
                  {feature.description}
                </motion.p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default WhatYouGet;
'use client'

import React from 'react';
import { KeyRound, TrendingUp, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AdminFeatures() {
  const benefits = [
    {
      icon: KeyRound,
      title: "Simplified SSO Registration",
      description: "With Purpose Connect, school administrators can simplify the student registration process by enabling Single Sign-On (SSO)."
    },
    {
      icon: TrendingUp,
      title: "Enhanced Career Support",
      description: "Enhance the career services your school provides by offering students access to job matching, mock interviews, and real-time feedback from employers."
    },
    {
      icon: BarChart3,
      title: "Data Insights",
      description: "Purpose Connect provides data on student engagement, job placement rates, and the effectiveness of career support programs."
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
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
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={headerVariants}
        >
          <motion.p 
            className="font-medium text-base sm:text-lg mb-3 sm:mb-4"
            style={{ color: '#A0C366' }}
            variants={headerVariants}
          >
            Why partner with Purpose Connect:
          </motion.p>
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight"
            variants={headerVariants}
          >
            <span className="text-black">
              We're here every step
            </span>
            {" of the way"}
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0"
            variants={headerVariants}
          >
            Partnering with Purpose Connect allows your institution to provide students with 
            streamlined access to career resources and immigration support.
          </motion.p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05, margin: "-50px" }}
          variants={containerVariants}
        >
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <motion.div 
                key={index} 
                className="text-center px-4 sm:px-0 group"
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="mb-4 sm:mb-6 flex justify-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="relative">
                    <motion.div 
                      className="w-20 h-20 rounded-full flex items-center justify-center relative z-10 transition-colors duration-300"
                      style={{ backgroundColor: '#A0C366' }}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </motion.div>
                  </div>
                </motion.div>
                <motion.h3 
                  className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-green-600 transition-colors duration-300"
                  variants={itemVariants}
                >
                  {benefit.title}
                </motion.h3>
                <motion.p 
                  className="text-sm sm:text-base text-gray-600 leading-relaxed"
                  variants={itemVariants}
                >
                  {benefit.description}
                </motion.p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
'use client'

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Features() {
  const benefits = [
    {
      title: "Simplified SSO Registration",
      description: "With Purpose Connect, school administrators can simplify the student registration process by enabling Single Sign-On (SSO)."
    },
    {
      title: "Enhanced Career Support",
      description: "Enhance the career services your school provides by offering students access to job matching, mock interviews, and real-time feedback from employers."
    },
    {
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
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const iconVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-30 bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto px-8 max-w-7xl">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headerVariants}
        >
          <motion.p 
            className="text-green-600 font-medium text-lg mb-4"
            variants={headerVariants}
          >
            Why partner with Purpose Connect:
          </motion.p>
          <motion.h2 
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            variants={headerVariants}
          >
            <span className="bg-gradient-to-r from-green-600 to-lime-600 bg-clip-text text-transparent">
              We're here every step
            </span>
            {" of the way"}
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            variants={headerVariants}
          >
            Partnering with Purpose Connect allows your institution to provide students with 
            streamlined access to career resources and immigration support.
          </motion.p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div 
          className="grid md:grid-cols-3 gap-12 lg:gap-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index} 
              className="text-center group"
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="mb-6 flex justify-center"
                variants={iconVariants}
                whileHover="hover"
              >
                <div className="relative">
                  <motion.div
                    className="absolute inset-0 bg-green-100 rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-300"
                    initial={false}
                    animate={{ 
                      scale: [1, 1.2, 1]
                    }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 3, 
                      ease: "easeInOut",
                      delay: index * 0.5
                    }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-lime-100 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 180, 360]
                    }}
                    transition={{ 
                      scale: { repeat: Infinity, duration: 4, ease: "easeInOut" },
                      rotate: { repeat: Infinity, duration: 8, ease: "linear" },
                      delay: index * 0.2
                    }}
                  />
                  <Image
                    src="/what-you-get-icon.png"
                    alt="Feature icon"
                    width={80}
                    height={80}
                    className="w-20 h-20 relative z-10"
                  />
                </div>
              </motion.div>
              <motion.h3 
                className="text-xl font-bold text-gray-900 mb-4"
                variants={itemVariants}
              >
                {benefit.title}
              </motion.h3>
              <motion.p 
                className="text-gray-600 leading-relaxed"
                variants={itemVariants}
              >
                {benefit.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
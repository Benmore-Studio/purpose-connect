'use client'

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Features() {
  const features = [
    {
      title: "Qualified Leads",
      description: "Purpose Connect helps you connect with students who are actively seeking visa and immigration support."
    },
    {
      title: "Case Management",
      description: "You can track the progress of each case, from initial consultation to final submission, all in one central location."
    },
    {
      title: "Automated Notifications",
      description: "Stay updated on every stage of your clients' immigration process with automated notifications."
    },
    {
      title: "Secure Document Exchange",
      description: "Upload, share, and store immigration paperwork, ensuring that all confidential information is protected with end-to-end encryption."
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
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 40 },
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
      scale: 1.15,
      rotateY: 10,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-30 bg-gradient-to-b from-white to-amber-50">
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
            className="text-amber-600 font-medium text-lg mb-4"
            variants={headerVariants}
          >
            What you get
          </motion.p>
          <motion.h2 
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            variants={headerVariants}
          >
            <span className="bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent">
              We're here every step
            </span>
            {" of the way"}
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-5xl mx-auto leading-relaxed"
            variants={headerVariants}
          >
            We streamline your practice by connecting you with qualified international 
            student clients who need visa and immigration support, manage cases 
            efficiently, securely exchange documents, and stay on top of updates with 
            automated notifications.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* First Row - 3 columns */}
          {features.slice(0, 3).map((feature, index) => (
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
                    className="absolute inset-0 bg-gradient-to-br from-amber-200 to-yellow-200 rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-300"
                    initial={false}
                    animate={{ 
                      scale: [1, 1.3, 1],
                      rotate: [0, 180, 360]
                    }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 8, 
                      ease: "linear",
                      delay: index * 0.5
                    }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-tr from-yellow-100 to-amber-100 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"
                    animate={{ 
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 3, 
                      ease: "easeInOut",
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
                {feature.title}
              </motion.h3>
              <motion.p 
                className="text-gray-600 leading-relaxed"
                variants={itemVariants}
              >
                {feature.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>

        {/* Second Row - 1 column centered */}
        <motion.div 
          className="flex justify-center mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div 
            className="text-center max-w-md group"
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
                  className="absolute inset-0 bg-gradient-to-br from-amber-200 to-yellow-200 rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-300"
                  initial={false}
                  animate={{ 
                    scale: [1, 1.3, 1],
                    rotate: [360, 180, 0]
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 8, 
                    ease: "linear"
                  }}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-yellow-100 to-amber-100 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"
                  animate={{ 
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 3, 
                    ease: "easeInOut"
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
              {features[3].title}
            </motion.h3>
            <motion.p 
              className="text-gray-600 leading-relaxed"
              variants={itemVariants}
            >
              {features[3].description}
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
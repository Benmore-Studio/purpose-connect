'use client'

import React from 'react';
import { Users, FolderOpen, Bell, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

export default function LawyerFeatures() {
  const features = [
    {
      icon: Users,
      title: "Qualified Leads",
      description: "Purpose Connect helps you connect with students who are actively seeking visa and immigration support."
    },
    {
      icon: FolderOpen,
      title: "Case Management",
      description: "You can track the progress of each case, from initial consultation to final submission, all in one central location."
    },
    {
      icon: Bell,
      title: "Automated Notifications",
      description: "Stay updated on every stage of your clients' immigration process with automated notifications."
    },
    {
      icon: Shield,
      title: "Secure Document Exchange",
      description: "Upload, share, and store immigration paperwork, ensuring that all confidential information is protected with end-to-end encryption."
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
            className="text-yellow-600 font-medium text-base sm:text-lg mb-3 sm:mb-4"
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
            We streamline your practice by connecting you with qualified international 
            student clients who need visa and immigration support, manage cases 
            efficiently, securely exchange documents, and stay on top of updates with 
            automated notifications.
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
                      style={{ backgroundColor: '#C1B670' }}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </motion.div>
                  </div>
                </motion.div>
                <motion.h3 
                  className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-yellow-600 transition-colors duration-300"
                  variants={itemVariants}
                >
                  {feature.title}
                </motion.h3>
                <motion.p 
                  className="text-sm sm:text-base text-gray-600 leading-relaxed"
                  variants={itemVariants}
                >
                  {feature.description}
                </motion.p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Features Grid - Last feature centered */}
        <motion.div 
          className="flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1, margin: "-50px" }}
          variants={containerVariants}
        >
          <motion.div 
            className="text-center max-w-md px-4 sm:px-0 group"
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
                  style={{ backgroundColor: '#C1B666' }}
                >
                  <Shield className="w-8 h-8 text-white" />
                </motion.div>
              </div>
            </motion.div>
            <motion.h3 
              className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-yellow-600 transition-colors duration-300"
              variants={itemVariants}
            >
              {features[3].title}
            </motion.h3>
            <motion.p 
              className="text-sm sm:text-base text-gray-600 leading-relaxed"
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
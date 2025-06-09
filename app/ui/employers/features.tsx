'use client'
import Image from 'next/image';
import { motion } from 'motion/react';


export default function EmployerFeaturesSection() {
  const features = [
    {
      title: "Skill-Based Matching",
      description: "Advanced algorithms to match your job openings with candidates who have the precise skills, qualifications, and experience you're looking for."
    },
    {
      title: "Work Authorization Checks",
      description: "Purpose Connect automatically filters and presents only those candidates who are authorized to work in your region."
    },
    {
      title: "ATS-Compatible Resumes",
      description: "Easily export student profiles in formats that are fully compatible with your applicant tracking system (ATS)."
    },
    {
      title: "Seamless Interview Scheduling",
      description: "Purpose Connect integrates with Google Meet and Zoom, allowing you to effortlessly schedule and manage interviews."
    },
    {
      title: "Engagement Analytics",
      description: "Track how many students are viewing your job postings and how much interest your roles are generating."
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
      rotate: 5,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
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
          viewport={{ once: true, amount: 0.3 }}
          variants={headerVariants}
        >
          <motion.p 
            className="text-teal-600 font-medium text-base sm:text-lg mb-3 sm:mb-4"
            variants={headerVariants}
          >
            Why employers love us
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
            Purpose Connect simplifies your hiring process by connecting you with skilled, 
            work-eligible candidates
          </motion.p>
        </motion.div>

        {/* Features Grid - First 3 features */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16 mb-12 sm:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {features.slice(0, 3).map((feature, index) => (
            <motion.div 
              key={index} 
              className="text-center px-4 sm:px-0 group"
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="mb-4 sm:mb-6 flex justify-center"
                variants={iconVariants}
                whileHover="hover"
              >
                <div className="relative">
                  <motion.div
                    className="absolute inset-0 bg-teal-100 rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-300"
                    initial={false}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  />
                  <Image
                    src="/what-you-get-icon.png"
                    alt="Feature icon"
                    width={80}
                    height={80}
                    className="w-16 h-16 sm:w-20 sm:h-20 relative z-10"
                  />
                </div>
              </motion.div>
              <motion.h3 
                className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4"
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
          ))}
        </motion.div>

        {/* Features Grid - Last 2 features centered */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {features.slice(3, 5).map((feature, index) => (
            <motion.div 
              key={index + 3} 
              className="text-center px-4 sm:px-0 group"
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="mb-4 sm:mb-6 flex justify-center"
                variants={iconVariants}
                whileHover="hover"
              >
                <div className="relative">
                  <motion.div
                    className="absolute inset-0 bg-teal-100 rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-300"
                    initial={false}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: index * 0.5 }}
                  />
                  <Image
                    src="/what-you-get-icon.png"
                    alt="Feature icon"
                    width={80}
                    height={80}
                    className="w-16 h-16 sm:w-20 sm:h-20 relative z-10"
                  />
                </div>
              </motion.div>
              <motion.h3 
                className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4"
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
          ))}
        </motion.div>
      </div>
    </section>
  );
}
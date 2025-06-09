'use client'
import Image from 'next/image';
import { motion } from "framer-motion";

export default function EmployerLanding() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  // Separate button variants for more control
  const primaryButtonVariants = {
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

  const secondaryButtonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: 0.1
      }
    }
  };

  return (
    <div className="flex items-center py-20 lg:py-30 bg-gradient-to-br from-teal-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left Content Section */}
          <motion.div 
            className="space-y-6 sm:space-y-8 text-center lg:text-left order-2 lg:order-1"
            variants={slideInLeft}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              className="space-y-4 sm:space-y-6"
              variants={containerVariants}
            >
              <motion.h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
                variants={itemVariants}
              >
                <motion.span 
                  className="inline-block"
                  variants={itemVariants}
                >
                  Hire the Right Talent
                </motion.span>
                <br className="hidden sm:block" />
                <span className="sm:hidden"> </span>
                <motion.span 
                  className="inline-block bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent"
                  variants={itemVariants}
                >
                  with Confidence
                </motion.span>
              </motion.h1>
              
              <motion.p 
                className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0"
                variants={itemVariants}
              >
                Struggling to find qualified candidates with the right work 
                authorization? Purpose Connect simplifies your hiring process.
              </motion.p>
            </motion.div>

            {/* Fixed CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 justify-center lg:justify-start"
              initial="hidden"
              animate="visible"
            >
              {/* Primary CTA Button */}
              <motion.button 
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-teal-500 text-white font-medium rounded-full transition-all duration-300 text-base sm:text-lg order-1 sm:order-1 shadow-lg hover:shadow-xl"
                variants={primaryButtonVariants}
                whileHover={{ 
                  scale: 1.03,
                  backgroundColor: "rgb(20 184 166)", // teal-600
                  boxShadow: "0 20px 25px -5px rgba(45, 212, 191, 0.25), 0 10px 10px -5px rgba(45, 212, 191, 0.1)",
                  transition: { duration: 0.2 }
                }}
                whileTap={{ 
                  scale: 0.97,
                  transition: { duration: 0.1 }
                }}
              >
                <motion.span
                  initial={{ opacity: 1 }}
                  whileHover={{ opacity: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                  Sign up Today
                </motion.span>
              </motion.button>
              
              {/* Secondary CTA Button */}
              <motion.button 
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-teal-500 text-teal-600 font-medium rounded-full transition-all duration-300 text-base sm:text-lg order-2 sm:order-2 bg-white hover:bg-teal-50"
                variants={secondaryButtonVariants}
                whileHover={{ 
                  scale: 1.03,
                  borderColor: "rgb(20 184 166)", // teal-600
                  color: "rgb(15 118 110)", // teal-700
                  backgroundColor: "rgb(240 253 250)", // teal-50
                  boxShadow: "0 10px 15px -3px rgba(45, 212, 191, 0.1), 0 4px 6px -2px rgba(45, 212, 191, 0.05)",
                  transition: { duration: 0.2 }
                }}
                whileTap={{ 
                  scale: 0.97,
                  transition: { duration: 0.1 }
                }}
              >
                <motion.span
                  initial={{ opacity: 1 }}
                  whileHover={{ opacity: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                  Search Jobs
                </motion.span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Image Section */}
          <motion.div 
            className="relative order-2"
            variants={slideInRight}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg sm:shadow-xl"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(45, 212, 191, 0.15)",
                transition: { duration: 0.3 }
              }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-teal-500/10 to-transparent z-10"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <Image
                src="/employer-landing.jpg"
                alt="Professional interview scene showing two people having a conversation at a table"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
              />
            </motion.div>
            
            {/* Floating Elements */}
            <motion.div 
              className="absolute -top-4 -right-4 w-20 h-20 bg-teal-100 rounded-full"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.2, scale: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
            />
            <motion.div 
              className="absolute -bottom-6 -left-6 w-16 h-16 bg-yellow-100 rounded-full"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.3, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
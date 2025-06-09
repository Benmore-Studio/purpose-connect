// AboutLandingSection.tsx
"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutLandingSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const textVariants = {
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

  const imageVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const backgroundVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 0.2,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="bg-gray-50 pt-28 pb-12 sm:pb-16 md:pb-20 lg:pb-24 relative overflow-hidden">
      {/* Animated Background Decorative Elements */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div 
          className="absolute top-8 sm:top-12 md:top-20 left-4 sm:left-8 md:left-10 w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-60 lg:h-60 bg-[#069DDE] rounded-full filter blur-2xl sm:blur-3xl"
          variants={backgroundVariants}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 8, repeat: Infinity, ease: "easeInOut" }
          }}
        />
        <motion.div 
          className="absolute top-4 sm:top-6 md:top-10 right-4 sm:right-6 md:right-8 w-20 h-20 sm:w-28 sm:h-28 md:w-40 md:h-40 lg:w-52 lg:h-52 bg-[#FF76591A] rounded-full filter blur-2xl sm:blur-3xl"
          variants={backgroundVariants}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.35, 0.2]
          }}
          transition={{
            scale: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 },
            opacity: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }
          }}
        />
        <motion.div 
          className="absolute top-32 sm:top-48 md:top-60 lg:top-80 left-8 sm:left-12 md:left-20 w-16 h-16 sm:w-24 sm:h-24 md:w-36 md:h-36 lg:w-48 lg:h-48 bg-[#EFD329] rounded-full filter blur-2xl sm:blur-3xl hidden sm:block"
          variants={backgroundVariants}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.3, 0.15]
          }}
          transition={{
            scale: { duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 },
            opacity: { duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }
          }}
        />
        <motion.div 
          className="absolute top-40 sm:top-56 md:top-72 lg:top-96 right-8 sm:right-16 md:right-24 lg:right-30 w-18 h-18 sm:w-28 sm:h-28 md:w-40 md:h-40 lg:w-52 lg:h-52 bg-[#A0C366] rounded-full filter blur-2xl sm:blur-3xl hidden md:block"
          variants={backgroundVariants}
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{
            scale: { duration: 12, repeat: Infinity, ease: "easeInOut", delay: 3 },
            opacity: { duration: 12, repeat: Infinity, ease: "easeInOut", delay: 3 }
          }}
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Text Content */}
        <motion.div 
          className="max-w-xs sm:max-w-lg md:max-w-xl lg:max-w-2xl mb-8 sm:mb-12 md:mb-16 text-center lg:text-left mx-auto lg:mx-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.h1 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6 md:mb-8"
            variants={textVariants}
          >
            Building Bridges to{" "}
            <motion.span 
              className="block sm:inline lg:block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              variants={textVariants}
            >
              Brighter Futures
            </motion.span>
          </motion.h1>

          <motion.p 
            className="text-base sm:text-lg md:text-xl lg:text-xl text-gray-600 leading-relaxed"
            variants={textVariants}
          >
            Our Vision is to transform workplaces by prioritizing the human
            element in the hiring process.
          </motion.p>
        </motion.div>

        {/* Mobile: Show only 2 middle images */}
        <motion.div 
          className="grid grid-cols-2 gap-3 sm:gap-4 items-end lg:hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          <motion.div 
            className="relative aspect-[3/4] sm:aspect-[4/6] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg sm:shadow-xl"
            variants={imageVariants}
            whileHover={{ 
              scale: 1.02, 
              boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
              transition: { duration: 0.2 }
            }}
          >
            <Image
              src="/about-landing-2.png"
              alt="Business professional in meeting environment"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 50vw, 25vw"
            />
          </motion.div>

          <motion.div 
            className="relative aspect-[3/4] sm:aspect-[4/6] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg sm:shadow-xl mb-4 sm:mb-6"
            variants={imageVariants}
            whileHover={{ 
              scale: 1.02, 
              boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
              transition: { duration: 0.2 }
            }}
          >
            <Image
              src="/about-landing-4.png"
              alt="Dynamic business team collaboration"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 50vw, 25vw"
            />
          </motion.div>
        </motion.div>

        {/* Desktop: Show all 4 images */}
        <motion.div 
          className="hidden lg:grid lg:grid-cols-4 gap-6 lg:gap-8 items-end"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          <motion.div 
            className="relative aspect-square rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg sm:shadow-xl order-1"
            variants={imageVariants}
            whileHover={{ 
              scale: 1.02, 
              boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
              transition: { duration: 0.2 }
            }}
          >
            <Image
              src="/about-landing-1.png"
              alt="Professional woman in business meeting with presentation"
              fill
              className="object-cover"
              sizes="25vw"
            />
          </motion.div>

          <motion.div 
            className="relative aspect-[4/6] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg sm:shadow-xl mb-4 xl:mb-10 order-2"
            variants={imageVariants}
            whileHover={{ 
              scale: 1.02, 
              boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
              transition: { duration: 0.2 }
            }}
          >
            <Image
              src="/about-landing-2.png"
              alt="Business professional in meeting environment"
              fill
              className="object-cover"
              sizes="25vw"
            />
          </motion.div>

          <motion.div 
            className="relative aspect-square rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg sm:shadow-xl order-3"
            variants={imageVariants}
            whileHover={{ 
              scale: 1.02, 
              boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
              transition: { duration: 0.2 }
            }}
          >
            <Image
              src="/about-landing-3.png"
              alt="Collaborative workplace meeting scene"
              fill
              className="object-cover"
              sizes="25vw"
            />
          </motion.div>

          <motion.div 
            className="relative aspect-[4/6] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg sm:shadow-xl mb-6 xl:mb-15 order-4"
            variants={imageVariants}
            whileHover={{ 
              scale: 1.02, 
              boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
              transition: { duration: 0.2 }
            }}
          >
            <Image
              src="/about-landing-4.png"
              alt="Dynamic business team collaboration"
              fill
              className="object-cover"
              sizes="25vw"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
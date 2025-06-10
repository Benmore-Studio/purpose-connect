// components/FeaturesSection.tsx
"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function FeaturesSection() {
  // Preload images when component mounts
  useEffect(() => {
    const imageUrls = [
      '/features-1.svg',
      '/feature-2.svg',
      '/features-3.svg',
      '/features-4.svg',
      '/features-5.svg',
      '/features-6.svg'
    ];

    imageUrls.forEach((url) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = url;
      document.head.appendChild(link);
    });
  }, []);

  const featureVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24 xl:py-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-12 sm:mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Stay ahead with our<br className="hidden sm:block" />
            <span className="sm:hidden"> </span>powerful features
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-xs sm:max-w-2xl md:max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Get matched with top employers, build meaningful connections, and thrive in your career—without resumes, barriers, or confusion. Your future starts here.
          </p>
        </motion.div>

        {/* Features Container */}
        <motion.div 
          className="space-y-12 sm:space-y-16 md:space-y-20 border border-gray-200 p-6 sm:p-8 md:p-12 lg:p-16 xl:p-25 rounded-2xl sm:rounded-3xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          
          {/* Feature 1 - Job Matching */}
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={featureVariants}
          >
            <motion.div 
              className="order-1"
              variants={featureVariants}
            >
              <motion.div 
                className="text-[#069DDE] text-sm sm:text-base md:text-lg font-semibold mb-3 sm:mb-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                01
              </motion.div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                Job Matching Based on Skills &<br className="hidden sm:block" />
                <span className="sm:hidden"> </span>Work Authorization
              </h3>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8">
                We match you with jobs that fit your skills and visa status—no guesswork, just green lights to work, grow, and shine where you belong.
              </p>
            </motion.div>
            <motion.div 
              className="relative flex items-center justify-center order-1 lg:order-2"
              variants={imageVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px]">
                <Image 
                  src='/features-1.svg' 
                  alt='Job matching feature illustration' 
                  width={400} 
                  height={400} 
                  className="w-full h-auto"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Feature 2 - Immigration Support */}
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={featureVariants}
          >
            <motion.div 
              className="order-1 lg:order-2"
              variants={featureVariants}
            >
              <motion.div 
                className="text-[#069DDE] text-sm sm:text-base md:text-lg font-semibold mb-3 sm:mb-4"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                02
              </motion.div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                Expert Immigration<br className="hidden sm:block" />
                <span className="sm:hidden"> </span>Support
              </h3>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8">
                Visas are tricky—we make them easier. Our experts guide you through the maze so you can focus on your dreams, not just documents.
              </p>
            </motion.div>
            <motion.div 
              className="relative flex items-center justify-center order-1"
              variants={imageVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px]">
                <Image 
                  src='/feature-2.svg' 
                  alt='Immigration support feature illustration' 
                  width={400} 
                  height={400} 
                  className="w-full h-auto"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Feature 3 - Interview Scheduling */}
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={featureVariants}
          >
            <motion.div 
              className="order-1"
              variants={featureVariants}
            >
              <motion.div 
                className="text-[#069DDE] text-sm sm:text-base md:text-lg font-semibold mb-3 sm:mb-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                03
              </motion.div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                Smart Interview Scheduling &<br className="hidden sm:block" />
                <span className="sm:hidden"> </span>Communication
              </h3>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8">
                No missed emails or confusing time zones. We keep interviews simple, smooth, and synced so you can show up ready and relaxed.
              </p>
            </motion.div>
            <motion.div 
              className="relative flex items-center justify-center order-1 lg:order-2"
              variants={imageVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px]">
                <Image 
                  src='/features-3.svg' 
                  alt='Interview scheduling feature illustration' 
                  width={400} 
                  height={400} 
                  className="w-full h-auto"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Feature 4 - Immigration Timelines */}
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={featureVariants}
          >
            <motion.div 
              className="order-1 lg:order-2"
              variants={featureVariants}
            >
              <motion.div 
                className="text-[#069DDE] text-sm sm:text-base md:text-lg font-semibold mb-3 sm:mb-4"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                04
              </motion.div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                Interactive Immigration<br className="hidden sm:block" />
                <span className="sm:hidden"> </span>Timelines & Alerts
              </h3>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8">
                Deadlines don't have to be scary. Get friendly alerts and easy-to-follow timelines so you stay on track—and stress-free.
              </p>
            </motion.div>
            <motion.div 
              className="relative flex items-center justify-center order-1"
              variants={imageVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px]">
                <Image 
                  src='/features-4.svg' 
                  alt='Immigration timelines feature illustration' 
                  width={400} 
                  height={400} 
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Feature 5 - AI Mock Interviews */}
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={featureVariants}
          >
            <motion.div 
              className="order-1"
              variants={featureVariants}
            >
              <motion.div 
                className="text-[#069DDE] text-sm sm:text-base md:text-lg font-semibold mb-3 sm:mb-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                05
              </motion.div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                AI-Powered Mock<br className="hidden sm:block" />
                <span className="sm:hidden"> </span>Interviews & Feedback
              </h3>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8">
                Practice makes power. Our AI coach helps you prep with real questions and helpful feedback to boost your confidence.
              </p>
            </motion.div>
            <motion.div 
              className="relative flex items-center justify-center order-1 lg:order-2"
              variants={imageVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px]">
                <Image 
                  src='/features-5.svg' 
                  alt='AI mock interviews feature illustration' 
                  width={400} 
                  height={400} 
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Feature 6 - Professional Development */}
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={featureVariants}
          >
            <motion.div 
              className="order-1 lg:order-2"
              variants={featureVariants}
            >
              <motion.div 
                className="text-[#069DDE] text-sm sm:text-base md:text-lg font-semibold mb-3 sm:mb-4"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                06
              </motion.div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                Professional Development<br className="hidden sm:block" />
                <span className="sm:hidden"> </span>with Leaderboard Badges
              </h3>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8">
                Grow your skills, earn shiny badges, and climb the leaderboard. It's career-building with a splash of fun and a dash of friendly competition.
              </p>
            </motion.div>
            <motion.div 
              className="relative flex items-center justify-center order-1"
              variants={imageVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px]">
                <Image 
                  src='/features-6.svg' 
                  alt='Professional development feature illustration' 
                  width={400} 
                  height={400} 
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
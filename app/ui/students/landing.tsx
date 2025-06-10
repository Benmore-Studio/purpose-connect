'use client'
import React from "react";
import Image from 'next/image';
import { Bookmark } from "lucide-react";
import { motion } from "framer-motion";

const StudentLanding = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8
      }
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-white flex items-center justify-center px-4 py-30 lg:py-40 relative overflow-hidden">
      <div className="max-w-7xl w-full relative z-10">
        {/* Mobile Layout - Single Column */}
        <div className="lg:hidden space-y-8 text-center">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Your Career
              </motion.span>
              <br />
              <motion.span
                className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                Starts Here
              </motion.span>
            </motion.h1>
            <motion.p 
              className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-md mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Tired of job boards that don't understand your visa situation?
              Purpose Connect was built for you.
            </motion.p>
          </motion.div>

          <motion.div 
            className="flex flex-col gap-3 sm:gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <motion.button 
              className="w-full px-6 py-3 bg-blue-500 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ 
                scale: 1.02, 
                backgroundColor: "#0369a1",
                boxShadow: "0 20px 25px -5px rgba(6, 182, 212, 0.25), 0 10px 10px -5px rgba(6, 182, 212, 0.1)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              Sign up Today
            </motion.button>
            <motion.button 
              className="w-full px-6 py-3 border-2 border-blue-500 text-blue-600 rounded-full font-medium bg-white hover:bg-blue-50 transition-all duration-300"
              whileHover={{ 
                scale: 1.02,
                borderColor: "#0369a1",
                color: "#0c4a6e",
                backgroundColor: "#eff6ff"
              }}
              whileTap={{ scale: 0.98 }}
            >
              Search Jobs
            </motion.button>
          </motion.div>

          <motion.div 
            className="relative mt-12"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <motion.div 
              className="relative shadow-xl w-full h-[400px] sm:h-[500px] rounded-tl-[100px] overflow-hidden"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(6, 157, 222, 0.15)"
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src="/student-landing-1.jpg"
                alt="Two women having a professional conversation in a modern office setting"
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />

              {/* Animated Overlay Card */}
              <motion.div 
                className="absolute bottom-4 left-4 right-4 bg-white rounded-2xl shadow-lg p-4 opacity-95"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 1.2 }}
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 20px 40px -10px rgba(6, 157, 222, 0.2)"
                }}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-600 font-medium">
                    AI Matched Job
                  </span>
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Bookmark className="w-5 h-5 text-gray-400" />
                  </motion.div>
                </div>
                <div className="flex items-center space-x-3">
                  <motion.div 
                    className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    </div>
                  </motion.div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-gray-900 text-base">
                      Software Engineer
                    </h3>
                    <p className="text-sm text-gray-600">Apple Inc.</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Desktop Layout - Two Columns */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div 
            className="space-y-12 text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.h1 
                className="text-5xl xl:text-6xl font-bold text-gray-900 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <motion.span
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  Your Career
                </motion.span>
                <br />
                <motion.span
                  className="bg-gradient-to-r from-[#069DDE] to-blue-500 bg-clip-text text-transparent"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  Starts Here
                </motion.span>
              </motion.h1>
              <motion.p 
                className="text-lg xl:text-xl text-gray-600 leading-relaxed max-w-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Tired of job boards that don't understand your visa situation?
                Purpose Connect was built for you.
              </motion.p>
            </motion.div>

            <motion.div 
              className="flex flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.button 
                className="px-8 py-4 bg-[#069DDE] text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ 
                  scale: 1.03, 
                  backgroundColor: "#0369a1",
                  boxShadow: "0 20px 25px -5px rgba(6, 182, 212, 0.25), 0 10px 10px -5px rgba(6, 182, 212, 0.1)"
                }}
                whileTap={{ scale: 0.97 }}
              >
                Sign up Today
              </motion.button>
              <motion.button 
                className="px-8 py-4 border-2 border-[#069DDE] text-[#069DDE] rounded-full font-medium bg-white hover:bg-blue-50 transition-all duration-300"
                whileHover={{ 
                  scale: 1.03,
                  borderColor: "#069DDE",
                  color: "#0c4a6e",
                  backgroundColor: "#eff6ff"
                }}
                whileTap={{ scale: 0.97 }}
              >
                Search Jobs
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content - Image with Overlay */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div 
              className="relative shadow-2xl w-full h-[550px] xl:h-[650px] rounded-tl-[200px]"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(6, 157, 222, 0.15)"
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src="/student-landing-1.jpg"
                alt="Two women having a professional conversation in a modern office setting"
                className="object-cover rounded-tl-[200px]"
                fill
                sizes="50vw"
                priority
              />

              {/* Animated Overlay Card - Desktop positioned */}
              <motion.div 
                className="absolute bottom-16 -left-24 bg-white rounded-2xl shadow-lg p-4 w-80 opacity-90"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 1.0 }}
                whileHover={{ 
                  y: -5,
                  x: -5,
                  boxShadow: "0 25px 50px -10px rgba(6, 157, 222, 0.2)",
                  opacity: 1
                }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600 font-medium">
                    AI Matched Job
                  </span>
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Bookmark className="w-5 h-5 text-gray-400" />
                  </motion.div>
                </div>
                <div className="flex items-center space-x-3">
                  <motion.div 
                    className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    </div>
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Software Engineer
                    </h3>
                    <p className="text-sm text-gray-600">Apple Inc.</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default StudentLanding;
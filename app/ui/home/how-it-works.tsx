// components/HowItWorks.tsx
"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HowItWorks() {
  const stepVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.2,
        ease: "easeOut"
      }
    })
  };

  return (
    <section className="bg-black text-white py-12 sm:py-16 md:py-20 lg:py-24 xl:py-30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Background dots - hidden on mobile for cleaner look */}
        <motion.div 
          className="absolute top-0 right-4 sm:right-8 opacity-20 sm:opacity-30 hidden sm:block"
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="grid grid-cols-5 sm:grid-cols-7 gap-2 sm:gap-4">
            {Array.from({ length: 35 }, (_, i) => (
              <motion.div 
                key={i} 
                className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-600 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  delay: i * 0.1,
                  ease: "easeInOut" 
                }}
              />
            ))}
          </div>
        </motion.div>

        <div className="flex flex-col gap-8 sm:gap-10 items-center relative z-10">
          {/* Header */}
          <motion.div 
            className="mb-8 sm:mb-12 flex flex-col sm:flex-row justify-between items-start sm:items-center w-full gap-4 sm:gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              How it works
            </motion.h2>
            <motion.p 
              className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-xs sm:max-w-md lg:max-w-lg text-left sm:text-right"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Discover the three powerful steps to ignite your goals and propel
              your success to new heights.
            </motion.p>
          </motion.div>

          {/* Divider Line */}
          <motion.div 
            className="w-full h-px bg-gray-700 mb-8 sm:mb-12"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 items-start lg:items-center gap-8 sm:gap-12 lg:gap-16 xl:gap-24 w-full">
            {/* Steps Column */}
            <div className="space-y-6 sm:space-y-8 flex flex-col order-2 lg:order-1">
              {/* Step 1 */}
              <motion.div 
                className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-gray-800 hover:border-gray-700 transition-colors duration-200"
                custom={0}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={stepVariants}
                whileHover={{ 
                  scale: 1.02,
                  borderColor: "rgb(75 85 99)",
                  boxShadow: "0 10px 30px -10px rgba(0,0,0,0.3)"
                }}
              >
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <motion.div 
                    className="flex-shrink-0"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="relative w-10 h-10 sm:w-12 sm:h-12 bg-gray-800/50 rounded-lg flex items-center justify-center">
                      <Image 
                        src="/create-profile-icon.svg" 
                        alt="Create profile icon" 
                        width={24}
                        height={24}
                        className="w-5 h-5 sm:w-6 sm:h-6"
                      />
                    </div>
                  </motion.div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">
                      Create Your Profile
                    </h3>
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                      Register as a student, employer, or immigration lawyer.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Step 2 */}
              <motion.div 
                className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-gray-800 hover:border-gray-700 transition-colors duration-200"
                custom={1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={stepVariants}
                whileHover={{ 
                  scale: 1.02,
                  borderColor: "rgb(75 85 99)",
                  boxShadow: "0 10px 30px -10px rgba(0,0,0,0.3)"
                }}
              >
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <motion.div 
                    className="flex-shrink-0"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="relative w-10 h-10 sm:w-12 sm:h-12 bg-gray-800/50 rounded-lg flex items-center justify-center">
                      <Image 
                        src="/service-icon.svg" 
                        alt="Get matched icon" 
                        width={24}
                        height={24}
                        className="w-5 h-5 sm:w-6 sm:h-6"
                      />
                    </div>
                  </motion.div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">
                      Get Matched
                    </h3>
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                      Smart algorithms connect students to jobs and legal
                      assistance.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Step 3 */}
              <motion.div 
                className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-gray-800 hover:border-gray-700 transition-colors duration-200"
                custom={2}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={stepVariants}
                whileHover={{ 
                  scale: 1.02,
                  borderColor: "rgb(75 85 99)",
                  boxShadow: "0 10px 30px -10px rgba(0,0,0,0.3)"
                }}
              >
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <motion.div 
                    className="flex-shrink-0"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="relative w-10 h-10 sm:w-12 sm:h-12 bg-gray-800/50 rounded-lg flex items-center justify-center">
                      <Image 
                        src="/collaborate-icon.svg" 
                        alt="Collaborate icon" 
                        width={24}
                        height={24}
                        className="w-5 h-5 sm:w-6 sm:h-6"
                      />
                    </div>
                  </motion.div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">
                      Collaborate Effortlessly
                    </h3>
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                      Schedule interviews, track case progress, and manage
                      opportunities from one dashboard.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Image Column */}
            <motion.div 
              className="relative w-full order-1 lg:order-2"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Mobile/Tablet Image */}
              <div className="relative aspect-[4/3] sm:aspect-[3/2] lg:hidden w-full">
                <Image
                  src="/how-it-works.jpg"
                  alt="How it works illustration showing the platform interface"
                  fill
                  className="rounded-xl sm:rounded-2xl object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
              
              {/* Desktop Image */}
              <div className="relative aspect-[4/5] hidden lg:block w-full">
                <Image
                  src="/how-it-works.jpg"
                  alt="How it works illustration showing the platform interface"
                  fill
                  className="rounded-2xl object-cover"
                  sizes="50vw"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
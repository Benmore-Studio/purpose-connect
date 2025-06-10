// components/TestimonialsSection.tsx
"use client";
import Image from "next/image";
import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Tayo A",
      title: "Software Engineering Graduate",
      avatar: "/testimonial-image-0.png",
      testimonial:
        "Purpose Connect completely transformed my job search experience. As an international student, I was constantly worried about finding a job that aligned with my visa requirements — it felt overwhelming and discouraging. But once I joined Purpose Connect, everything changed. The job matching system suggested roles that fit my skills and work authorization perfectly, and I even had access to immigration lawyers who clarified my visa options.",
      rating: 5,
    },
    {
      id: 2,
      name: "James M.",
      title: "Talent Acquisition Manager, InnovateTech",
      avatar: "/testimonial-image-1.png",
      testimonial:
        "As a hiring manager, Purpose Connect has revolutionized how we find and hire international talent. The platform pre-screens candidates based on visa eligibility, saving us countless hours. The immigration support feature means we can confidently hire international students knowing we have expert guidance throughout the process.",
      rating: 5,
      cardColor: "bg-gradient-to-br from-blue-500 to-purple-600",
    },
    {
      id: 3,
      name: "Amara E",
      title: "Certified Immigration Lawyer",
      avatar: "/testimonial-image-2.png",
      testimonial:
        "Purpose Connect has significantly expanded my client base while allowing me to focus on what I do best - providing excellent legal counsel. The platform connects me with students and employers who genuinely need immigration assistance, and the integrated workflow makes case management seamless.",
      rating: 5,
      cardColor: "bg-gradient-to-br from-purple-500 to-blue-600",
    },
  ];

  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setActiveTestimonial((prev) =>
        prev < testimonials.length - 1 ? prev + 1 : 0
      );
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const handlePrevious = useCallback(() => {
    setIsAutoPlaying(false);
    setActiveTestimonial((prev) =>
      prev > 0 ? prev - 1 : testimonials.length - 1
    );
  }, [testimonials.length]);

  const handleNext = useCallback(() => {
    setIsAutoPlaying(false);
    setActiveTestimonial((prev) =>
      prev < testimonials.length - 1 ? prev + 1 : 0
    );
  }, [testimonials.length]);

  const handleTestimonialClick = useCallback((index: number) => {
    setIsAutoPlaying(false);
    setActiveTestimonial(index);
  }, []);

  // Animation variants
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

  const testimonialVariants = {
    enter: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: -30,
      scale: 0.95,
      transition: {
        duration: 0.4,
        ease: "easeIn"
      }
    }
  };

  const cardVariants = {
    inactive: {
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    active: {
      scale: 1.02,
      y: -4,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.03,
      y: -6,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  const backgroundDotVariants = {
    animate: {
      scale: [1, 1.3, 1],
      opacity: [0.3, 0.6, 0.3],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="bg-black text-white py-12 sm:py-16 md:py-20 lg:py-24 xl:py-50 relative overflow-hidden">
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Enhanced Background Pattern */}
        <motion.div 
          className="absolute top-12 sm:top-20 right-4 sm:right-20 lg:right-50 opacity-20 sm:opacity-30 hidden sm:block"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="grid grid-cols-5 sm:grid-cols-7 gap-2 sm:gap-4">
            {Array.from({ length: 35 }, (_, i) => (
              <motion.div 
                key={i} 
                className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-600 rounded-full"
                variants={backgroundDotVariants}
                animate="animate"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start lg:items-end">
          {/* Left Side - Client Cards */}
          <div className="order-2 lg:order-1">
            {/* Enhanced Header */}
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 md:mb-12 leading-tight"
              variants={itemVariants}
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                What our{" "}
              </motion.span>
              <motion.span
                className="text-[#069DDE]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                clients
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                {" "}say
              </motion.span>
            </motion.h2>

            {/* Enhanced Client Cards */}
            <motion.div 
              className="space-y-3 sm:space-y-4"
              variants={itemVariants}
            >
              {testimonials.map((testimonial, index) => (
                <motion.button
                  key={testimonial.id}
                  onClick={() => handleTestimonialClick(index)}
                  className={`w-full text-left rounded-xl sm:rounded-2xl p-4 sm:p-6 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#069DDE] overflow-hidden relative ${
                    activeTestimonial === index
                      ? "bg-[#069DDE] shadow-lg sm:shadow-2xl"
                      : "bg-[#201F31] hover:bg-[#2a2842]"
                  }`}
                  variants={cardVariants}
                  initial="inactive"
                  animate={activeTestimonial === index ? "active" : "inactive"}
                  whileHover="hover"
                  layout
                >
                  {/* Animated background gradient for active card */}
                  {activeTestimonial === index && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                      initial={{ x: "-100%" }}
                      animate={{ x: "100%" }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        repeatDelay: 3,
                        ease: "easeInOut"
                      }}
                    />
                  )}
                  
                  <div className="flex items-center space-x-3 sm:space-x-4 relative z-10">
                    <motion.div 
                      className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden flex-shrink-0"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Image 
                        src={testimonial.avatar} 
                        alt={`${testimonial.name} profile picture`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 48px, 64px"
                      />
                      {/* Active indicator ring */}
                      {activeTestimonial === index && (
                        <motion.div
                          className="absolute inset-0 rounded-full border-2 border-white/30"
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </motion.div>
                    
                    <div className="flex-1 min-w-0">
                      <motion.h3 
                        className="text-base sm:text-lg md:text-xl font-semibold text-white truncate"
                        animate={activeTestimonial === index ? { scale: 1.05 } : { scale: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        {testimonial.name}
                      </motion.h3>
                      <p className="text-white text-opacity-90 text-xs sm:text-sm md:text-base line-clamp-2">
                        {testimonial.title}
                      </p>
                    </div>

                    {/* Active indicator */}
                    {activeTestimonial === index && (
                      <motion.div
                        className="w-3 h-3 bg-white rounded-full flex-shrink-0"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </div>
                  
                  {/* Progress bar for active testimonial */}
                  {activeTestimonial === index && isAutoPlaying && (
                    <motion.div
                      className="absolute bottom-0 left-0 h-1 bg-white/30 w-full"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 5, ease: "linear" }}
                      style={{ transformOrigin: "left" }}
                    />
                  )}
                </motion.button>
              ))}
            </motion.div>

            {/* Enhanced Mobile Testimonial Indicators */}
            <motion.div 
              className="flex justify-center space-x-2 mt-6 lg:hidden"
              variants={itemVariants}
            >
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => handleTestimonialClick(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeTestimonial === index 
                      ? "bg-[#5DAFA1] w-8" 
                      : "bg-gray-600 w-2 hover:bg-gray-500"
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  aria-label={`Go to testimonial ${index + 1}`}
                  layout
                />
              ))}
            </motion.div>
          </div>

          {/* Right Side - Enhanced Active Testimonial */}
          <motion.div 
            className="order-1 lg:order-2 relative"
            variants={itemVariants}
          >
            {/* Navigation Controls - Now positioned relative to the testimonial container */}
            <motion.div 
              className="flex justify-center lg:justify-end space-x-3 sm:space-x-4 mb-6"
              variants={itemVariants}
            >
              <motion.button
                onClick={handlePrevious}
                className="w-10 h-10 sm:w-12 sm:h-12 border border-gray-600 rounded-full flex items-center justify-center focus:outline-none transition-all duration-300 hover:border-[#069DDE]"
                whileHover={{ 
                  scale: 1.1, 
                  borderColor: "#069DDE",
                  boxShadow: "0 0 20px rgba(249, 115, 22, 0.3)"
                }}
                whileTap={{ scale: 0.9 }}
                aria-label="Previous testimonial"
              >
                <motion.svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  whileHover={{ x: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </motion.svg>
              </motion.button>
              
              <motion.button
                onClick={handleNext}
                className="w-10 h-10 sm:w-12 sm:h-12 border border-gray-600 rounded-full flex items-center justify-center hover:border-[#069DDE] focus:border-[#069DDE] focus:outline-none transition-all duration-300"
                whileHover={{ 
                  scale: 1.1, 
                  borderColor: "#069DDE",
                  boxShadow: "0 0 20px rgba(251, 146, 60, 0.3)"
                }}
                whileTap={{ scale: 0.9 }}
                aria-label="Next testimonial"
              >
                <motion.svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  whileHover={{ x: 2 }}
                  transition={{ duration: 0.2 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </motion.svg>
              </motion.button>
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div 
                key={activeTestimonial}
                className="bg-gray-900/40 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 min-h-[300px] sm:min-h-[350px] lg:min-h-[400px] flex flex-col justify-between border border-gray-800 relative overflow-hidden"
                variants={testimonialVariants}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate="enter"
                exit="exit"
                whileHover={{ 
                  boxShadow: "0 25px 50px -10px rgba(0,0,0,0.4)",
                  borderColor: "rgb(75 85 99)",
                  y: -5
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Animated background accent */}
                <motion.div
                  className="absolute top-0 left-0 w-full h-1 "
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  style={{ transformOrigin: "left" }}
                />

                <div className="mb-4 sm:mb-6">
                  <motion.h3 
                    className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    It was a great experience!
                  </motion.h3>

                  {/* Enhanced Star Rating */}
                  <motion.div 
                    className="flex space-x-1 mb-4 sm:mb-6"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {Array.from({ length: 5 }, (_, i) => (
                      <motion.svg
                        key={i}
                        className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-yellow-400 fill-current"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        initial={{ opacity: 0, rotate: -180, scale: 0 }}
                        animate={{ opacity: 1, rotate: 0, scale: 1 }}
                        transition={{ 
                          duration: 0.5, 
                          delay: 0.3 + (i * 0.1),
                          type: "spring",
                          stiffness: 200
                        }}
                        whileHover={{ 
                          scale: 1.2,
                          rotate: 10,
                          transition: { duration: 0.2 }
                        }}
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </motion.svg>
                    ))}
                  </motion.div>
                </div>

                {/* Enhanced Testimonial Text */}
                <div className="flex-1">
                  <motion.p 
                    className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    {testimonials[activeTestimonial].testimonial}
                  </motion.p>
                </div>

                {/* Testimonial author info */}
                <motion.div
                  className="flex items-center mt-6 pt-4 border-t border-gray-700/50"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                    <Image 
                      src={testimonials[activeTestimonial].avatar} 
                      alt={`${testimonials[activeTestimonial].name} profile`}
                      width={40}
                      height={40}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">
                      {testimonials[activeTestimonial].name}
                    </p>
                    <p className="text-gray-400 text-xs">
                      {testimonials[activeTestimonial].title}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
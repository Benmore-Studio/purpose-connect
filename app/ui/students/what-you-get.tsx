// Student What You Get Component
"use client";
import { Clock, Users, Calendar, MessageSquare, Bell, Gamepad2 } from 'lucide-react'
import { motion } from 'framer-motion'

const WhatYouGet = () => {
  const features = [
    {
      icon: Clock,
      title: "Smart Job Matching",
      description: "Purpose Connect uses advanced algorithms to match you with job opportunities based on your skills, education, and work eligibility."
    },
    {
      icon: Users,
      title: "Immigration Support", 
      description: "Navigating visa requirements and immigration laws can be overwhelming, but with Purpose Connect, you're not alone."
    },
    {
      icon: Calendar,
      title: "Interview Scheduling",
      description: "Purpose Connect's streamlined scheduling tool, you can easily book interviews with top employers."
    },
    {
      icon: MessageSquare,
      title: "AI Mock Interviews",
      description: "Preparing for interviews can be nerve-wracking, but Purpose Connect helps you build confidence through AI-powered mock interviews."
    },
    {
      icon: Bell,
      title: "Immigration Timeline Alerts",
      description: "Purpose Connect ensures you stay on track by sending timely alerts about important immigration deadlines and requirements."
    },
    {
      icon: Gamepad2,
      title: "Gamified Experience",
      description: "To make your job search more engaging, Purpose Connect adds an element of fun with a gamified experience."
    }
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const featureVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
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

  const iconVariants = {
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const pulseVariants = {
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="bg-gray-50 py-16 lg:py-30 px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Animated Header */}
        <motion.div 
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="text-orange-500 font-medium text-lg mb-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            What you get
          </motion.div>
          <motion.h2 
            className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We're here every step of the way
          </motion.h2>
          <motion.p 
            className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Purpose Connect provides tailored job matching, expert immigration support, 
            and tools to help you succeed. Stay organized, prepare with AI-driven mock 
            interviews, and never miss important deadlines. Your career journey, simplified.
          </motion.p>
        </motion.div>

        {/* Animated Features Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <motion.div 
                key={index} 
                className="text-center space-y-4 group cursor-pointer"
                variants={featureVariants}
                whileHover={{ 
                  y: -10,
                  transition: { type: "spring", stiffness: 400 }
                }}
              >
                {/* Animated Icon with circular background - Student blue theme */}
                <motion.div 
                  className="flex justify-center mb-6"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 200, 
                    delay: index * 0.1 + 0.3 
                  }}
                >
                  <motion.div 
                    className="relative"
                    whileHover="hover"
                  >
                    {/* Outer light blue circle */}
                    <motion.div 
                      className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center relative"
                      variants={pulseVariants}
                      animate="pulse"
                      whileHover={{ scale: 1.1, backgroundColor: "#dbeafe" }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Inner blue circle */}
                      <motion.div 
                        className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center"
                        variants={iconVariants}
                        whileHover={{ backgroundColor: "#3b82f6" }}
                      >
                        <motion.div
                          initial={{ rotate: 0 }}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6, ease: "easeInOut" }}
                        >
                          <IconComponent className="w-6 h-6 text-white" />
                        </motion.div>
                      </motion.div>

                      {/* Animated ring effect */}
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-blue-300 opacity-0"
                        animate={{ 
                          scale: [1, 1.3, 1],
                          opacity: [0, 0.4, 0]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: index * 0.3
                        }}
                      />
                    </motion.div>
                  </motion.div>
                </motion.div>

                {/* Animated Content */}
                <motion.div 
                  className="space-y-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                >
                  <motion.h3 
                    className="text-xl lg:text-2xl font-bold text-gray-900"
                    whileHover={{ color: "#069DDE" }}
                    transition={{ duration: 0.2 }}
                  >
                    {feature.title}
                  </motion.h3>
                  <motion.p 
                    className="text-gray-600 leading-relaxed text-base lg:text-lg"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {feature.description}
                  </motion.p>
                </motion.div>

                {/* Hover indicator - blue theme */}
                <motion.div
                  className="w-12 h-1 bg-blue-500 mx-auto rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            )
          })}
        </motion.div>

        {/* Floating elements for additional visual interest - blue theme */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-300 rounded-full opacity-20"
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{
              duration: Math.random() * 4 + 4,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
    </section>
  )
}

export default WhatYouGet;
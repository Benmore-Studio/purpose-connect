// OurValues.tsx
"use client";
import { MessageCircle, Zap, Edit3, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export default function OurValues() {
  const values = [
    {
      icon: MessageCircle,
      title: "Authenticity",
      description: "We believe in honesty, transparency, and doing what's right — building trust in every interaction."
    },
    {
      icon: Zap,
      title: "Empathy",
      description: "We prioritize the safety of your data, ensuring every piece of information is protected and confidential."
    },
    {
      icon: Edit3,
      title: "Innovation",
      description: "We embrace creativity and technology to create smart solutions that simplify complex processes."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We foster connections and partnerships, knowing that working together creates better opportunities."
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const valueVariants = {
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
      rotate: 360,
      scale: 1.1,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="bg-white py-30 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Animated Header */}
        <motion.div 
          className="mb-16 text-center lg:text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our Values
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 leading-relaxed max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            We're driven by integrity, innovation, and a commitment to empowering students, 
            employers, and legal professionals through trust and collaboration.
          </motion.p>
        </motion.div>

        {/* Animated Values Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <motion.div 
                key={index} 
                className="space-y-16 bg-gray-50 p-6 rounded-lg group cursor-pointer"
                variants={valueVariants}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 40px -10px rgba(0,0,0,0.1)",
                  backgroundColor: "#f8fafc"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Animated Icon */}
                <motion.div 
                  className="w-16 h-16 bg-[#5DAFA1] rounded-2xl flex items-center justify-center group-hover:bg-[#699c94] transition-colors duration-300"
                  variants={iconVariants}
                  whileHover="hover"
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </motion.div>
                
                {/* Animated Content */}
                <motion.div 
                  className="space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <motion.h3 
                    className="text-xl font-bold text-gray-900"
                    whileHover={{ color: "#ea580c" }}
                    transition={{ duration: 0.2 }}
                  >
                    {value.title}
                  </motion.h3>
                  <motion.p 
                    className="text-gray-600 leading-relaxed"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {value.description}
                  </motion.p>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
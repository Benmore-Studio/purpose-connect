// WhatWeDo.tsx
"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function WhatWeDo() {
  const services = [
    {
      title: "Smart Job Matching",
      description:
        "Our advanced job matching system connects students with opportunities that align with their skills, education, and work authorization.",
    },
    {
      title: "Employer-Student Connections",
      description:
        "We simplify the hiring process by enabling employers to find qualified candidates quickly and easily.",
    },
    {
      title: "Immigration Support and Lawyer Matching",
      description:
        "Navigating visa processes can be complicated, and that's why we help students access expert legal support.",
    },
    {
      title: "Interview Scheduling and Communication",
      description:
        "We take the hassle out of coordinating interviews by offering integrated scheduling with Google Meet and Zoom.",
    },
  ];

  const serviceVariants = {
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

  const lineVariants = {
    hidden: { scaleY: 0 },
    visible: (index: number) => ({
      scaleY: 1,
      transition: {
        duration: 0.8,
        delay: index * 0.2 + 0.3,
        ease: "easeOut"
      }
    })
  };

  return (
    <section className="bg-white py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Animated Header */}
        <motion.div 
          className="mb-16 lg:mb-20 text-center lg:text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            What we do
          </motion.h2>
          <motion.p 
            className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            We bridge the gap between education, employment, and legal support,
            empowering brighter futures.
          </motion.p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Services List */}
          <motion.div 
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Continuous gray background line */}
            <motion.div 
              className="absolute left-0 top-0 bottom-0 w-1 bg-gray-200"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              style={{ originY: 0 }}
            />

            {/* Animated orange active line for first item */}
            <motion.div 
              className="absolute left-0 top-0 w-1 h-20 bg-orange-400"
              initial={{ scaleY: 0, opacity: 0 }}
              whileInView={{ scaleY: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              style={{ originY: 0 }}
            />

            {/* Services List */}
            <div className="space-y-8 lg:space-y-12">
              {services.map((service, index) => (
                <motion.div 
                  key={index} 
                  className="relative pl-6 group cursor-pointer"
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={serviceVariants}
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {/* Animated hover line indicator */}
                  <motion.div
                    className="absolute left-0 top-0 w-1 h-full bg-orange-400 opacity-0 group-hover:opacity-100"
                    initial={{ scaleY: 0 }}
                    whileHover={{ scaleY: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{ originY: 0 }}
                  />
                  
                  <motion.h3 
                    className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 lg:mb-4 group-hover:text-orange-500 transition-colors duration-300"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                  >
                    {service.title}
                  </motion.h3>
                  <motion.p 
                    className="text-gray-600 leading-relaxed text-base lg:text-lg"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
                  >
                    {service.description}
                  </motion.p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Animated Image */}
          <motion.div 
            className="relative order-1 lg:order-2"
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div 
              className="relative aspect-[4/3] lg:aspect-[3/4] w-full rounded-md overflow-hidden shadow-xl"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 25px 50px -10px rgba(0,0,0,0.2)",
                rotateY: 2
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-orange-600/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 z-10"
              />
              <Image
                src="/what-we-do.jpg"
                alt="Professional meeting with students and employers discussing opportunities"
                fill
                className="object-cover transition-transform duration-500 hover:scale-110"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
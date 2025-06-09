// OurTeam.tsx
"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function OurTeam() {
  const teamMembers = [
    {
      name: "Racheal Dami Odunewu",
      role: "Founder and Chief Executive Officer",
      image: "/people-1.png",
    },
    {
      name: "Jefferson Ondze-Mangha",
      role: "Cofounder and Chief Technical Officer",
      image: "/people-2.png",
    },
    {
      name: "Dr. Ariel Morel",
      role: "Cofounder and Chief Operating Officer",
      image: "/people-3.png",
    },
    {
      name: "Usman Wajid",
      role: "Advisor",
      image: "/people-4.png",
    },
    {
      name: "David Avi Myers",
      role: "Founding Engineer",
      image: "/people-5.png",
    },
    {
      name: "Godwin Ekuma",
      role: "Advisor",
      image: "/people-6.png",
    },
    {
      name: "Payton Flaugh",
      role: "Marketing",
      image: "/people-7.png",
    },
    {
      name: "Vineetha Manda",
      role: "Product Management Intern",
      image: "/people-8.png",
    },
    {
      name: "Zulfiquer Muhtasim Rashid",
      role: "Engagement & Grants Intern",
      image: "/people-9.png",
    },
    {
      name: "Shahista Tazeen",
      role: "Engineering Intern",
      image: "/people-10.png",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const memberVariants = {
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

  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Animated Header */}
        <motion.div 
          className="mb-16 text-center lg:text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.p 
            className="text-teal-600 font-medium mb-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Our team
          </motion.p>
          <motion.h2 
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our strength comes
          </motion.h2>
          <motion.h2 
            className="text-4xl sm:text-5xl font-bold text-teal-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            from our people.
          </motion.h2>
        </motion.div>

        {/* Animated Team Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index} 
              className="text-center group"
              variants={memberVariants}
              whileHover={{ 
                y: -10,
                transition: { type: "spring", stiffness: 400 }
              }}
            >
              {/* Animated Profile Image */}
              <motion.div 
                className="relative w-64 h-64 mx-auto mb-6 rounded-2xl overflow-hidden bg-gray-100"
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  boxShadow: "0 20px 40px -10px rgba(0,0,0,0.2)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-teal-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                />
                <Image
                  src={member.image}
                  alt={`${member.name} - ${member.role}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </motion.div>

              {/* Animated Member Info */}
              <motion.div 
                className="space-y-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <motion.h3 
                  className="text-lg font-bold text-gray-900"
                  whileHover={{ color: "#0D9488" }}
                  transition={{ duration: 0.2 }}
                >
                  {member.name}
                </motion.h3>
                <motion.p 
                  className="text-gray-600 text-sm"
                  initial={{ opacity: 0.7 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {member.role}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
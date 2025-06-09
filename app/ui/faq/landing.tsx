'use client'

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
    question: string;
    answer: string;
    expanded: string;
}

export default function PurposeConnectFAQ() {
    const [openItems, setOpenItems] = useState<Record<number, boolean>>({});

    const toggleItem = (index: number): void => {
        setOpenItems(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    const faqData: FAQItem[] = [
        {
            question: "How does job matching work?",
            answer: "We match you based on your skills, education, and work authorization status.",
            expanded: "Our advanced matching algorithm analyzes your profile including your technical skills, educational background, work experience, and visa status to connect you with relevant opportunities. We consider factors like your preferred location, salary expectations, company size preferences, and career goals to ensure the best possible matches. Our system continuously learns from successful placements to improve matching accuracy over time."
        },
        {
            question: "Can I track my visa timelines?",
            answer: "",
            expanded: "Yes, you can track your visa application progress through our integrated timeline feature. We provide real-time updates on your H-1B, L-1, O-1, or other visa applications, including important deadlines, required documentation, and next steps. Our system connects with USCIS databases to provide accurate status updates and sends automated reminders for critical dates. You'll also receive notifications about policy changes that might affect your application."
        },
        {
            question: "How do I schedule interviews?",
            answer: "",
            expanded: "Scheduling interviews is simple through our platform. Once you're matched with potential employers, you can view available time slots from hiring managers and select times that work for your schedule. The system automatically handles time zone conversions and sends calendar invites to all participants. You can also reschedule or request different time slots if needed, and receive automated reminders 24 hours and 1 hour before each interview."
        },
        {
            question: "How do I connect with students?",
            answer: "",
            expanded: "Our student networking feature allows you to connect with peers and alumni from your university or program. You can join study groups, find roommates, participate in cultural events, and get advice from students who've successfully navigated the job search process. We also facilitate connections with student organizations, professional associations, and mentorship programs to help build your professional network in the US."
        },
        {
            question: "Is document exchange secure?",
            answer: "",
            expanded: "Absolutely. We use enterprise-grade security measures to protect your sensitive documents including resumes, transcripts, visa paperwork, and personal identification. All documents are encrypted both in transit and at rest using AES-256 encryption. We're SOC 2 Type II compliant and follow strict data privacy regulations including GDPR. Only authorized personnel and verified employers can access your documents, and you maintain full control over what information is shared with whom."
        },
        {
            question: "How do I post a job?",
            answer: "",
            expanded: "Employers can easily post job opportunities through our streamlined posting system. Simply create an employer account, verify your company information, and use our job posting wizard to create detailed listings. You can specify visa sponsorship availability, required skills, experience levels, and compensation ranges. Our platform helps optimize your job descriptions for better candidate matching and provides analytics on application rates and candidate quality."
        }
    ];

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { 
            opacity: 0, 
            y: 20,
            scale: 0.98
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const iconVariants = {
        closed: { rotate: 0 },
        open: { rotate: 180 }
    };

    const answerVariants = {
        closed: {
            opacity: 0,
            height: 0,
            y: -10,
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        },
        open: {
            opacity: 1,
            height: "auto",
            y: 0,
            transition: {
                duration: 0.4,
                ease: "easeOut"
            }
        }
    };

    return (
        <section className="bg-white pt-30">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Animated Header */}
                <motion.div 
                    className="text-center mb-8 sm:mb-10 md:mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.h1 
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        Frequently asked questions
                    </motion.h1>
                    <motion.p 
                        className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Everything you need to know about Purpose Connect.
                    </motion.p>
                </motion.div>

                {/* Animated FAQ Items */}
                <motion.div 
                    className="space-y-0 border-b border-gray-200 rounded-lg sm:rounded-xl overflow-hidden bg-white shadow-sm"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {faqData.map((item: FAQItem, index: number) => (
                        <motion.div 
                            key={index} 
                            className="border-t border-gray-200 first:border-t-0"
                            variants={itemVariants}
                            whileHover={{ 
                                backgroundColor: "rgba(249, 250, 251, 0.8)",
                                transition: { duration: 0.2 }
                            }}
                        >
                            <motion.button
                                onClick={() => toggleItem(index)}
                                className={`w-full px-4 sm:px-6 py-4 sm:py-5 md:py-6 text-left flex items-center justify-between transition-colors duration-200 hover:bg-gray-50 focus:bg-gray-50 ${
                                    openItems[index] ? 'bg-gray-50' : 'bg-white'
                                }`}
                                aria-expanded={openItems[index]}
                                aria-controls={`faq-answer-${index}`}
                                whileTap={{ scale: 0.99 }}
                            >
                                <div className="flex items-start sm:items-center flex-1 min-w-0">
                                    <motion.div 
                                        className="mr-3 sm:mr-4 flex-shrink-0 mt-1 sm:mt-0"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ type: "spring", stiffness: 400 }}
                                    >
                                        <motion.div 
                                            className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border border-gray-300 flex items-center justify-center transition-colors duration-200"
                                            animate={openItems[index] ? "open" : "closed"}
                                            whileHover={{ 
                                                borderColor: "#3B82F6",
                                                backgroundColor: "rgba(59, 130, 246, 0.1)"
                                            }}
                                        >
                                            <motion.div
                                                variants={iconVariants}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                            >
                                                {openItems[index] ? (
                                                    <Minus className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" />
                                                ) : (
                                                    <Plus className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" />
                                                )}
                                            </motion.div>
                                        </motion.div>
                                    </motion.div>
                                    <motion.span 
                                        className="text-base sm:text-lg md:text-xl font-medium text-gray-900 leading-relaxed pr-2"
                                        whileHover={{ color: "#1F2937" }}
                                    >
                                        {item.question}
                                    </motion.span>
                                </div>
                            </motion.button>

                            <AnimatePresence>
                                {openItems[index] && (
                                    <motion.div 
                                        id={`faq-answer-${index}`}
                                        className="bg-gray-50 px-4 sm:px-6 border-t border-gray-100 overflow-hidden"
                                        variants={answerVariants}
                                        initial="closed"
                                        animate="open"
                                        exit="closed"
                                    >
                                        <motion.div 
                                            className="ml-8 sm:ml-10 py-4 sm:py-5"
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.3, delay: 0.1 }}
                                        >
                                            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                                                {item.expanded}
                                            </p>
                                        </motion.div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
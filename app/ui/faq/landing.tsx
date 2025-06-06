'use client'

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

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

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white pt-30">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    Frequently asked questions
                </h1>
                <p className="text-lg text-gray-600">
                    Everything you need to know about the Purpose Connect.
                </p>
            </div>

            <div className="space-y-0 border-b border-gray-200">
                {faqData.map((item: FAQItem, index: number) => (
                    <div key={index} className="border-t border-gray-200">
                        <button
                            onClick={() => toggleItem(index)}
                            className={`rounded-lg w-full px-6 py-6 text-left flex items-center justify-between ${openItems[index] ? 'bg-gray-50' : ''
                                }`}
                        >
                            <div className="flex items-center">
                                <div className="mr-4 flex-shrink-0">
                                    <div className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center">
                                        {openItems[index] ? (
                                            <Minus className="w-4 h-4 text-gray-600" />
                                        ) : (
                                            <Plus className="w-4 h-4 text-gray-600" />
                                        )}
                                    </div>
                                </div>
                                <span className="text-lg font-medium text-gray-900">
                                    {item.question}
                                </span>
                            </div>
                        </button>

                        {openItems[index] && (
                            <div className="bg-gray-50 px-6 py-2">
                                <p className="text-gray-700 leading-relaxed">
                                    {item.expanded}
                                </p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
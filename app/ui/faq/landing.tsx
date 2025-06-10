"use client";

import { useState, useEffect } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  expanded: string;
}

export default function PurposeConnectFAQ() {
  const [openItem, setOpenItem] = useState<number | null>(null);
  const [isClient, setIsClient] = useState(false);

  // Ensure we're on client side for consistent animations
  useEffect(() => {
    setIsClient(true);
  }, []);

  const toggleItem = (index: number): void => {
    setOpenItem((prev) => (prev === index ? null : index));
  };

  const faqData: FAQItem[] = [
    {
      question: "How does job matching work?",
      answer: "We match you based on your skills, education, and work authorization status.",
      expanded: "Our advanced matching algorithm analyzes your profile including your technical skills, educational background, work experience, and visa status to connect you with relevant opportunities. We consider factors like your preferred location, salary expectations, company size preferences, and career goals to ensure the best possible matches."
    },
    {
      question: "Can I track my visa timelines?",
      answer: "",
      expanded: "Yes, you can track your visa application progress through our integrated timeline feature. We provide real-time updates on your H-1B, L-1, O-1, or other visa applications, including important deadlines, required documentation, and next steps."
    },
    {
      question: "How do I schedule interviews?",
      answer: "",
      expanded: "Scheduling interviews is simple through our platform. Once you're matched with potential employers, you can view available time slots from hiring managers and select times that work for your schedule. The system automatically handles time zone conversions and sends calendar invites to all participants."
    },
    {
      question: "How do I connect with students?",
      answer: "",
      expanded: "Our student networking feature allows you to connect with peers and alumni from your university or program. You can join study groups, find roommates, participate in cultural events, and get advice from students who've successfully navigated the job search process."
    },
    {
      question: "Is document exchange secure?",
      answer: "",
      expanded: "Absolutely. We use enterprise-grade security measures to protect your sensitive documents including resumes, transcripts, visa paperwork, and personal identification. All documents are encrypted both in transit and at rest using AES-256 encryption."
    },
    {
      question: "How do I post a job?",
      answer: "",
      expanded: "Employers can easily post job opportunities through our streamlined posting system. Simply create an employer account, verify your company information, and use our job posting wizard to create detailed listings."
    }
  ];

  return (
    <section className="bg-white py-40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with CSS animations as fallback */}
        <div 
          className="text-center mb-12 animate-fade-in"
          style={{
            animation: 'fadeInUp 0.6s ease-out forwards',
            opacity: 0,
            transform: 'translateY(30px)'
          }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently asked questions
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about Purpose Connect.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-0 border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
          {faqData.map((item: FAQItem, index: number) => (
            <div
              key={index}
              className="border-b border-gray-200 last:border-b-0"
              style={{
                animation: `fadeInUp 0.5s ease-out forwards`,
                animationDelay: `${index * 0.1}s`,
                opacity: 0,
                transform: 'translateY(20px)'
              }}
            >
              <button
                onClick={() => toggleItem(index)}
                className={`w-full px-6 py-6 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset transition-all duration-200 ${
                  openItem === index ? "bg-gray-50" : "bg-white hover:bg-gray-50"
                }`}
                aria-expanded={openItem === index}
                aria-controls={`faq-answer-${index}`}
              >
                <div className="flex items-center flex-1 min-w-0">
                  <div className="mr-4 flex-shrink-0">
                    <div 
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                        openItem === index 
                          ? 'border-blue-500 bg-blue-50 rotate-180' 
                          : 'border-gray-300 hover:border-blue-400 hover:bg-blue-50'
                      }`}
                    >
                      {openItem === index ? (
                        <Minus className="w-4 h-4 text-blue-600" />
                      ) : (
                        <Plus className="w-4 h-4 text-gray-600" />
                      )}
                    </div>
                  </div>
                  <span className="text-lg font-medium text-gray-900 pr-2">
                    {item.question}
                  </span>
                </div>
              </button>

              {/* Answer Panel with CSS Grid for smooth height animation */}
              <div
                className={`bg-gray-50 border-t border-gray-100 transition-all duration-300 ease-out overflow-hidden ${
                  openItem === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
                style={{
                  display: 'grid',
                  transition: 'grid-template-rows 0.3s ease-out, opacity 0.2s ease-out'
                }}
                id={`faq-answer-${index}`}
              >
                <div className="overflow-hidden">
                  <div className="ml-10 py-5 px-6">
                    <p className="text-base text-gray-700 leading-relaxed">
                      {item.expanded}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .grid-rows-\\[1fr\\] {
          grid-template-rows: 1fr;
        }
        
        .grid-rows-\\[0fr\\] {
          grid-template-rows: 0fr;
        }
      `}</style>
    </section>
  );
}
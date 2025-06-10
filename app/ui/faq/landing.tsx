"use client";

import { useState, useEffect } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  expanded: string;
}

interface FAQSection {
  id: string;
  title: string;
  questions: FAQItem[];
}

export default function PurposeConnectFAQ() {
  const [activeTab, setActiveTab] = useState<string>("general");
  const [openItem, setOpenItem] = useState<number | null>(null);
  const [isClient, setIsClient] = useState(false);

  // Ensure we're on client side for consistent animations
  useEffect(() => {
    setIsClient(true);
  }, []);

  const toggleItem = (index: number): void => {
    setOpenItem((prev) => (prev === index ? null : index));
  };

  const handleTabChange = (tabId: string): void => {
    setActiveTab(tabId);
    setOpenItem(null); // Close any open items when switching tabs
  };

  const faqSections: FAQSection[] = [
    {
      id: "general",
      title: "General",
      questions: [
        {
          question: "What is Purpose Connect?",
          expanded: "Purpose Connect is an AI-powered hiring platform that bridges the gap between international students and U.S. employers by simplifying immigration-informed recruitment, advancing inclusive hiring, unlocking untapped global talent, and addressing workforce shortages sustainably."
        },
        {
          question: "How does Purpose Connect work?",
          expanded: "Purpose Connect offers a comprehensive solution that benefits all stakeholders in the international student employment ecosystem. For educational institutions, it provides a strategic partnership that enhances career services specifically tailored to international students' unique needs. Employers gain access to a innovative hiring model that connects them directly with pre-vetted international talent, streamlining their recruitment process. Students benefit from a specialized platform that intelligently matches their skills and qualifications with employers who truly recognize and value their potential, creating meaningful career opportunities that might otherwise be difficult to access."
        }
      ]
    },
    {
      id: "students",
      title: "Students",
      questions: [
        {
          question: "Can I use Purpose Connect if I’ve already graduated?",
          expanded: "Yes! If you’re no longer affiliated with a school, you can access Purpose Connect's free tools. Stay tuned for more on accessing our premium tools for a minimal subscription as an unaffiliated student! "
        },
        {
          question: "Is Purpose Connect free for students?",
          expanded: "Students affiliated with a partner school can access the basic and premium tools at no cost. However, graduates or unaffiliated students may access the basic tools for free."
        },
        {
          question: "What job opportunities are available?",
          expanded: "Purpose Connect offers internships, part-time roles, and full-time positions across various industries, with a focus on employers who understand international students' needs and visa requirements."
        }
      ]
    },
    {
      id: "schools",
      title: "Schools",
      questions: [
        {
          question: "How can schools benefit from partnering with Purpose Connect?",
          expanded: "Schools can provide students with enhanced career resources, including job matching, access to employer events, networking events, training & workshops, and more!"
        },
        {
          question: "How is school pricing determined?",
          expanded: "Pricing for schools is based on an enterprise partnership. Interested in learning more? Contact us at info@purposeconnect.io."
        },
        {
          question: "What happens during employer meet-and-greet events?",
          expanded: "Employer Meet & Greet events are organized every semester in-person and online to allow students network directly with pre-matched employers. Schools can also host an exclusive event on-campus in collaboration with Purpose Connect."
        }
      ]
    },
    {
      id: "employers",
      title: "Employers",
      questions: [
        {
          question: "What types of employers can use Purpose Connect?",
          expanded: "Any company looking to hire international talent for internships, part-time, or full-time roles can benefit. Purpose Connect guides employers through the process of hiring students on work permits like CPT, OPT, and STEM OPT. Also, small businesses struggling to fill their talent needs due to budget constraints can use Purpose Connect."
        },
        {
          question: "How is employer pricing structured?",
          expanded: "Employer plans are structured in tiers based on company size and estimated number of open positions annually. "
        }
      ]
    },
    {
      id: "technical",
      title: "Technical Support",
      questions: [
        {
          question: "How do I create an account on Purpose Connect?",
          expanded: 'For students, visit PurposeConnect.io and click “Get Started.” Follow the prompts to register. For employers, immigration attorneys, and schools, click "Book a Demo."'
        },
        {
          question: "What should I do if I forget my login credentials?",
          expanded: "Use the “Forgot Password” link on the login page to reset your password. For further assistance, contact info@purposeconnect.io."
        },
        {
          question: "Is there a mobile app for Purpose Connect?",
          expanded: "Not yet! However, the platform is mobile-friendly and can be accessed via any smartphone or tablet browser."
        }
      ]
    },
    {
      id: "other",
      title: "Other Questions",
      questions: [
        {
          question: "How is my data protected on the platform?",
          expanded: "We use industry-standard encryption and data protection protocols to ensure your personal and professional information remains secure."
        },
        {
          question: "Can I cancel my subscription?",
          expanded: "Yes, subscriptions can be canceled anytime by sending an email to info@purposeconnect.io. Effective cancellation date will be the next subscription due date. "
        },
        {
          question: "How can I contact Purpose Connect for further questions?",
          expanded: "You can reach us at info@purposeconnect.io or through the contact form on our website."
        }
      ]
    }
  ];

  const currentSection = faqSections.find(section => section.id === activeTab);

  return (
    <section className="bg-white py-40 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div 
          className="text-center mb-12"
          style={{
            animation: 'fadeInUp 0.6s ease-out forwards',
            opacity: 0,
            transform: 'translateY(30px)'
          }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about Purpose Connect.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="mb-8">
          <nav className="flex flex-wrap justify-center gap-1 p-1 bg-gray-100 rounded-lg">
            {faqSections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => handleTabChange(section.id)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                  activeTab === section.id
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-200'
                }`}
                style={{
                  animation: `fadeInUp 0.5s ease-out forwards`,
                  animationDelay: `${index * 0.1}s`,
                  opacity: 0,
                  transform: 'translateY(20px)'
                }}
              >
                {section.title}
              </button>
            ))}
          </nav>
        </div>

        {/* FAQ Items */}
        {currentSection && (
          <div key={activeTab} className="space-y-0 border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
            {currentSection.questions.map((item: FAQItem, index: number) => (
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

                {/* Answer Panel */}
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
        )}
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
        
        .bg-gray-750 {
          background-color: rgb(55, 65, 81);
        }
      `}</style>
    </section>
  );
}
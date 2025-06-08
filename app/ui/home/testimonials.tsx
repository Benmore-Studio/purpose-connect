// components/TestimonialsSection.tsx
"use client";
import Image from "next/image";
import { useState, useCallback } from "react";

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
      cardColor: "bg-gradient-to-br from-orange-400 to-red-400",
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

  const handlePrevious = useCallback(() => {
    setActiveTestimonial((prev) =>
      prev > 0 ? prev - 1 : testimonials.length - 1
    );
  }, [testimonials.length]);

  const handleNext = useCallback(() => {
    setActiveTestimonial((prev) =>
      prev < testimonials.length - 1 ? prev + 1 : 0
    );
  }, [testimonials.length]);

  return (
    <section className="bg-black text-white py-12 sm:py-16 md:py-20 lg:py-24 xl:py-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Background Pattern - Hidden on mobile */}
        <div className="absolute top-12 sm:top-20 right-4 sm:right-20 lg:right-50 opacity-20 sm:opacity-30 hidden sm:block">
          <div className="grid grid-cols-5 sm:grid-cols-7 gap-2 sm:gap-4">
            {Array.from({ length: 35 }, (_, i) => (
              <div key={i} className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-600 rounded-full"></div>
            ))}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center sm:justify-end mb-6 sm:mb-0 sm:absolute sm:top-4 md:top-8 sm:right-16 md:right-32 space-x-3 sm:space-x-4 z-10">
          <button
            onClick={handlePrevious}
            className="w-10 h-10 sm:w-12 sm:h-12 border border-gray-600 rounded-full flex items-center justify-center hover:border-orange-500 focus:border-orange-500 focus:outline-none transition-colors duration-200"
            aria-label="Previous testimonial"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 sm:w-12 sm:h-12 border border-gray-600 rounded-full flex items-center justify-center hover:border-orange-400 focus:border-orange-400 focus:outline-none transition-colors duration-200"
            aria-label="Next testimonial"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start lg:items-end">
          {/* Left Side - Client Cards */}
          <div className="order-2 lg:order-1">
            {/* Header */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 md:mb-12 leading-tight">
              What our clients say
            </h2>

            {/* Client Cards */}
            <div className="space-y-3 sm:space-y-4">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.id}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-full text-left rounded-xl sm:rounded-2xl p-4 sm:p-6 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                    activeTestimonial === index
                      ? "bg-[#FF7659] shadow-lg sm:shadow-2xl scale-[1.02]"
                      : "bg-[#201F31] hover:bg-[#2a2842]"
                  }`}
                >
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden flex-shrink-0">
                      <Image 
                        src={testimonial.avatar} 
                        alt={`${testimonial.name} profile picture`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 48px, 64px"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white truncate">
                        {testimonial.name}
                      </h3>
                      <p className="text-white text-opacity-90 text-xs sm:text-sm md:text-base line-clamp-2">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Mobile Testimonial Indicators */}
            <div className="flex justify-center space-x-2 mt-6 lg:hidden">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                    activeTestimonial === index ? "bg-orange-500" : "bg-gray-600"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Side - Active Testimonial */}
          <div className="order-1 lg:order-2">
            <div className="bg-gray-900/30 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 min-h-[300px] sm:min-h-[350px] lg:min-h-[400px] flex flex-col justify-between border border-gray-800">
              <div className="mb-4 sm:mb-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white">
                  It was a great experience!
                </h3>

                {/* Star Rating */}
                <div className="flex space-x-1 mb-4 sm:mb-6">
                  {Array.from({ length: 5 }, (_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-yellow-400 fill-current"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
              </div>

              {/* Testimonial Text */}
              <div className="flex-1">
                <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
                  {testimonials[activeTestimonial].testimonial}
                </p>
              </div>

              {/* Attribution */}
              <div className="mt-4 sm:mt-6 pt-4 border-t border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden">
                    <Image 
                      src={testimonials[activeTestimonial].avatar} 
                      alt={`${testimonials[activeTestimonial].name} profile picture`}
                      fill
                      className="object-cover"
                      sizes="40px"
                    />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm sm:text-base">
                      {testimonials[activeTestimonial].name}
                    </p>
                    <p className="text-gray-400 text-xs sm:text-sm">
                      {testimonials[activeTestimonial].title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
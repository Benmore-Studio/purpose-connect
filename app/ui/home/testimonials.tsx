// components/TestimonialsSection.tsx
"use client";
import Image from "next/image";
import { useState } from "react";

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

  return (
    <section className="bg-black text-white py-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        <div className="absolute top-20 right-50 opacity-30">
          <div className="grid grid-cols-7 gap-4">
            {Array.from({ length: 35 }, (_, i) => (
              <div key={i} className="w-2 h-2 bg-gray-600 rounded-full"></div>
            ))}
          </div>
        </div>

        <div className="absolute top-8 right-32 flex space-x-4">
          <button
            onClick={() =>
              setActiveTestimonial((prev) =>
                prev > 0 ? prev - 1 : testimonials.length - 1
              )
            }
            className="w-12 h-12 border border-gray-600 rounded-full flex items-center justify-center hover:border-orange-500 transition-colors"
          >
            <svg
              className="w-5 h-5"
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
            onClick={() =>
              setActiveTestimonial((prev) =>
                prev < testimonials.length - 1 ? prev + 1 : 0
              )
            }
            className="w-12 h-12 border border-orange-500 rounded-full flex items-center justify-center hover:border-orange-400 transition-colors"
          >
            <svg
              className="w-5 h-5"
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
          {/* Left Side - Client Cards */}
          <div>
            {/* Header */}
            <h2 className="text-4xl md:text-5xl font-bold mb-12">
              What our clients say
            </h2>

            {/* Client Cards */}
            <div className="space-y-4">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  onClick={() => setActiveTestimonial(index)}
                  className={`rounded-2xl p-6 cursor-pointer transition-all duration-300 ${
                    activeTestimonial === index
                      ? "bg-[#FF7659] shadow-2xl"
                      : "bg-[#201F31]"
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className="relative w-16 h-16 rounded-full flex items-center justify-center">
                      <Image src={testimonial.avatar} alt="avatar" fill />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {testimonial.name}
                      </h3>
                      <p className="text-white text-opacity-90 text-sm">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Active Testimonial */}
          <div className="rounded-2xl p-8 h-[350px] items-start">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-4">
                It was a great experience!
              </h3>

              {/* Star Rating */}
              <div className="flex space-x-1 mb-6">
                {Array.from({ length: 5 }, (_, i) => (
                  <svg
                    key={i}
                    className="w-6 h-6 text-yellow-400 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
            </div>

            {/* Testimonial Text */}
            <p className="text-gray-300 text-lg leading-relaxed">
              {testimonials[activeTestimonial].testimonial}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import Image from 'next/image';

export default function EmployerFeaturesSection() {
  const features = [
    {
      title: "Skill-Based Matching",
      description: "Advanced algorithms to match your job openings with candidates who have the precise skills, qualifications, and experience you're looking for."
    },
    {
      title: "Work Authorization Checks",
      description: "Purpose Connect automatically filters and presents only those candidates who are authorized to work in your region."
    },
    {
      title: "ATS-Compatible Resumes",
      description: "Easily export student profiles in formats that are fully compatible with your applicant tracking system (ATS)."
    },
    {
      title: "Seamless Interview Scheduling",
      description: "Purpose Connect integrates with Google Meet and Zoom, allowing you to effortlessly schedule and manage interviews."
    },
    {
      title: "Engagement Analytics",
      description: "Track how many students are viewing your job postings and how much interest your roles are generating."
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-orange-500 font-medium text-base sm:text-lg mb-3 sm:mb-4">
            Why employers love us
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            We're here every step of the way
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
            Purpose Connect simplifies your hiring process by connecting you with skilled, 
            work-eligible candidates
          </p>
        </div>

        {/* Features Grid - First 3 features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16 mb-12 sm:mb-16">
          {features.slice(0, 3).map((feature, index) => (
            <div key={index} className="text-center px-4 sm:px-0">
              <div className="mb-4 sm:mb-6 flex justify-center">
                <div className="relative">
                  <Image
                    src="/what-you-get-icon.png"
                    alt="Feature icon"
                    width={80}
                    height={80}
                    className="w-16 h-16 sm:w-20 sm:h-20"
                  />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Features Grid - Last 2 features centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 max-w-4xl mx-auto">
          {features.slice(3, 5).map((feature, index) => (
            <div key={index + 3} className="text-center px-4 sm:px-0">
              <div className="mb-4 sm:mb-6 flex justify-center">
                <div className="relative">
                  <Image
                    src="/what-you-get-icon.png"
                    alt="Feature icon"
                    width={80}
                    height={80}
                    className="w-16 h-16 sm:w-20 sm:h-20"
                  />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
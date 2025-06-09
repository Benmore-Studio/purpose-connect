import React from 'react';
import Image from 'next/image';

export default function Features() {
  const benefits = [
    {
      title: "Simplified SSO Registration",
      description: "With Purpose Connect, school administrators can simplify the student registration process by enabling Single Sign-On (SSO)."
    },
    {
      title: "Enhanced Career Support",
      description: "Enhance the career services your school provides by offering students access to job matching, mock interviews, and real-time feedback from employers."
    },
    {
      title: "Data Insights",
      description: "Purpose Connect provides data on student engagement, job placement rates, and the effectiveness of career support programs."
    }
  ];

  return (
    <section className="py-30 bg-white">
      <div className="container mx-auto px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-orange-500 font-medium text-lg mb-4">
            Why partner with Purpose Connect:
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            We're here every step of the way
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Partnering with Purpose Connect allows your institution to provide students with 
            streamlined access to career resources and immigration support.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="mb-6 flex justify-center">
                <div className="relative">
                  <Image
                    src="/what-you-get-icon.png"
                    alt="Feature icon"
                    width={80}
                    height={80}
                    className="w-20 h-20"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
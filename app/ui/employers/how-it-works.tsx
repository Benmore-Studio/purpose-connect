import React from "react";
import { Zap, Users, Target } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Zap,
      title: "Create Your Profile",
      description: "Add your education, work eligibility, and visa status.",
      color: "#FAAD14"
    },
    {
      icon: Users,
      title: "Get Matched",
      description: "See job opportunities that fit your profile.",
      color: "#FAAD14"
    },
    {
      icon: Target,
      title: "Stay Prepared",
      description: "Practice interviews, track applications, and stay ahead of visa timelines.",
      color: "#FAAD14"
    }
  ];

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center lg:text-left mb-10 sm:mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            How it works
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-xl text-gray-600 max-w-3xl mx-auto lg:mx-0 leading-relaxed">
            Creating your profile and landing your dream job is easy with
            Purpose Connect.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div 
                key={index}
                className="bg-gray-50 hover:bg-gray-100 transition-colors duration-200 rounded-lg sm:rounded-xl p-6 sm:p-8 lg:p-10 flex flex-col justify-between min-h-[280px] sm:min-h-[320px] lg:min-h-[350px] group"
              >
                {/* Icon */}
                <div className="mb-6 sm:mb-8 lg:mb-12">
                  <div 
                    className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-200"
                    style={{ backgroundColor: step.color }}
                  >
                    <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 lg:mb-4">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Step Number - Optional visual enhancement */}
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6 opacity-20 group-hover:opacity-30 transition-opacity duration-200">
                  <span className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action - Optional */}
      </div>
    </section>
  );
};

export default HowItWorks;
import { Clock, Users, Calendar, MessageSquare, Bell, Gamepad2 } from 'lucide-react'

export default function WhatYouGet() {
  const features = [
    {
      icon: Clock,
      title: "Smart Job Matching",
      description: "Purpose Connect uses advanced algorithms to match you with job opportunities based on your skills, education, and work eligibility."
    },
    {
      icon: Users,
      title: "Immigration Support", 
      description: "Navigating visa requirements and immigration laws can be overwhelming, but with Purpose Connect, you're not alone."
    },
    {
      icon: Calendar,
      title: "Interview Scheduling",
      description: "Purpose Connect's streamlined scheduling tool, you can easily book interviews with top employers."
    },
    {
      icon: MessageSquare,
      title: "AI Mock Interviews",
      description: "Preparing for interviews can be nerve-wracking, but Purpose Connect helps you build confidence through AI-powered mock interviews."
    },
    {
      icon: Bell,
      title: "Immigration Timeline Alerts",
      description: "Purpose Connect ensures you stay on track by sending timely alerts about important immigration deadlines and requirements."
    },
    {
      icon: Gamepad2,
      title: "Gamified Experience",
      description: "To make your job search more engaging, Purpose Connect adds an element of fun with a gamified experience."
    }
  ]

  return (
    <section className="bg-gray-50 py-16 lg:py-30 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="text-orange-500 font-medium text-lg mb-4">What you get</div>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6 max-w-4xl mx-auto">
            We're here every step of the way
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
            Purpose Connect provides tailored job matching, expert immigration support, 
            and tools to help you succeed. Stay organized, prepare with AI-driven mock 
            interviews, and never miss important deadlines. Your career journey, simplified.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div key={index} className="text-center space-y-4">
                {/* Icon with circular background */}
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    {/* Outer light orange circle */}
                    <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center">
                      {/* Inner orange circle */}
                      <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-base lg:text-lg">
                    {feature.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
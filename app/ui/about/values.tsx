// OurValuesSection.jsx
import { MessageCircle, Zap, Edit3, Users } from 'lucide-react';

export default function OurValues() {
  const values = [
    {
      icon: MessageCircle,
      title: "Authenticity",
      description: "We believe in honesty, transparency, and doing what's right — building trust in every interaction."
    },
    {
      icon: Zap,
      title: "Empathy",
      description: "We prioritize the safety of your data, ensuring every piece of information is protected and confidential."
    },
    {
      icon: Edit3,
      title: "Innovation",
      description: "We embrace creativity and technology to create smart solutions that simplify complex processes."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We foster connections and partnerships, knowing that working together creates better opportunities."
    }
  ];

  return (
    <section className="bg-white py-30 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center lg:text-left">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Our Values
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-4xl">
            We're driven by integrity, innovation, and a commitment to empowering students, 
            employers, and legal professionals through trust and collaboration.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div key={index} className="space-y-16 bg-gray-50 p-6 rounded-lg">
                {/* Icon */}
                <div className="w-16 h-16 bg-orange-400 rounded-2xl flex items-center justify-center">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                {/* Content */}
                <div className="space-y-4 ">
                  <h3 className="text-xl font-bold text-gray-900">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
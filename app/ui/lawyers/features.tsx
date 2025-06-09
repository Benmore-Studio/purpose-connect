import React from 'react';
import Image from 'next/image';

export default function Features() {
  const features = [
    {
      title: "Qualified Leads",
      description: "Purpose Connect helps you connect with students who are actively seeking visa and immigration support."
    },
    {
      title: "Case Management",
      description: "You can track the progress of each case, from initial consultation to final submission, all in one central location."
    },
    {
      title: "Automated Notifications",
      description: "Stay updated on every stage of your clients' immigration process with automated notifications."
    },
    {
      title: "Secure Document Exchange",
      description: "Upload, share, and store immigration paperwork, ensuring that all confidential information is protected with end-to-end encryption."
    }
  ];

  return (
    <section className="py-30 bg-white">
      <div className="container mx-auto px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-orange-500 font-medium text-lg mb-4">
            What you get
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            We're here every step of the way
          </h2>
          <p className="text-xl text-gray-600 max-w-5xl mx-auto leading-relaxed">
            We streamline your practice by connecting you with qualified international 
            student clients who need visa and immigration support, manage cases 
            efficiently, securely exchange documents, and stay on top of updates with 
            automated notifications.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* First Row - 3 columns */}
          {features.slice(0, 3).map((feature, index) => (
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
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Second Row - 1 column centered */}
        <div className="flex justify-center mt-16">
          <div className="text-center max-w-md">
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
              {features[3].title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {features[3].description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
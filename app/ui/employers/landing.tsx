import React from 'react';
import Image from 'next/image';

export default function PurposeConnectLanding() {
  return (
    <div className="flex items-center py-20 lg:py-30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left Content Section */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Hire the Right Talent
                <br className="hidden sm:block" />
                <span className="sm:hidden"> </span>
                with Confidence
              </h1>
              
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Struggling to find qualified candidates with the right work 
                authorization? Purpose Connect simplifies your hiring process.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 justify-center lg:justify-start">
              <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-cyan-400 text-cyan-400 font-medium rounded-full hover:bg-cyan-50 transition-colors text-base sm:text-lg order-2 sm:order-1">
                Search Jobs
              </button>
              
              <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-cyan-400 text-white font-medium rounded-full hover:bg-cyan-500 transition-colors text-base sm:text-lg order-1 sm:order-2">
                Sign up Today
              </button>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative order-2">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg sm:shadow-xl">
              <Image
                src="/employer-landing.jpg"
                alt="Professional interview scene showing two people having a conversation at a table"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
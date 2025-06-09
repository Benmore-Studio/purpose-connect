import Image from 'next/image';
import React from 'react';

export default function Landing() {
  return (
    <section className="flex items-center bg-white py-30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center w-full">
          {/* Left Content Section */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Support Your Students' Career & Immigration Journey
              </h2>
              
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Help your students transition from education to employment with 
                ease.
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
          <div className="flex justify-center lg:justify-end order-2">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-none lg:w-[500px] h-64 sm:h-80 md:h-96 lg:h-[600px] bg-gray-100 rounded-2xl sm:rounded-3xl flex items-center justify-center overflow-hidden shadow-lg">
              <Image 
                src='/admin-landing.jpg' 
                alt='admin landing' 
                fill 
                className='rounded-2xl sm:rounded-3xl object-cover'
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 500px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
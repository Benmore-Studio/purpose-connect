import React from 'react';

const HeroSection = () => {
  return (
    <div className="h-screen bg-gray-100 relative overflow-hidden pt-20">
      {/* Blurred Background Circles */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-[650px] h-[650px] bg-[#069DDE] rounded-full filter blur-3xl opacity-25"></div>
        <div className="absolute top-35 right-8 w-[650px] h-[650px] bg-[#5DAFA1] rounded-full filter blur-3xl opacity-25"></div>
        <div className="absolute top-100 left-20 w-[650px] h-[650px] bg-[#EFD329] rounded-full filter blur-3xl opacity-25"></div>
        <div className="absolute top-150 right-30 w-[650px] h-[650px]  bg-[#A0C366] rounded-full filter blur-3xl opacity-25"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-32 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-8">
          The Go-to platform for International<br />
          Students' Employment in the U.S.
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-16 max-w-3xl mx-auto">
          Bridging the Gap between Education, Employment, and Immigration.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-8">
          <button className="border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-50 px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105">
            Search Jobs
          </button>
          <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg">
            Sign up Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
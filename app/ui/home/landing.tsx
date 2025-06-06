'use client'
import React from 'react';


const ServiceWalkthrough = () => {
  return (
    <div className="max-w-4xl mx-auto mt-12">
      {/* Enhanced video container with glow effect */}
      <div className="relative group">
        {/* Animated glow background */}
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-emerald-400 to-blue-400 rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 animate-pulse blur-lg"></div>
        
        {/* Main video container */}
        <div className="relative bg-white/20 backdrop-blur-lg rounded-3xl p-3 shadow-2xl border border-white/30 hover:shadow-3xl transition-all duration-500">
          <div className="relative w-full overflow-hidden rounded-2xl" style={{ paddingBottom: '56.25%' }}>
            <iframe
              src="https://www.loom.com/embed/a8ad03e6ced84b039004129548203c69?sid=fcff3493-4c8f-4908-84a1-4b5f20a3d668&autoplay=1&loop=1&speed=1&hideEmbedTopBar=1&hide_owner=1&hide_share=1&hide_title=1&hideSpeedButton=1&hide_play_button=1"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full border-0"
              title="Service Walkthrough Video"
              onLoad={() => {
                // Trigger fade out after iframe loads
                setTimeout(() => {
                  const overlay = document.getElementById('video-overlay');
                  if (overlay) {
                    overlay.style.opacity = '0';
                    setTimeout(() => {
                      overlay.style.display = 'none';
                    }, 2500);
                  }
                }, 500);
              }}
            ></iframe>
            
            {/* Overlay to hide initial play button */}
            <div 
              id="video-overlay"
              className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-emerald-500/10 to-blue-500/20 backdrop-blur-sm flex items-center justify-center transition-opacity duration-1000"
              style={{ zIndex: 10 }}
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-lg animate-pulse">
                <svg className="w-8 h-8 text-cyan-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            
            {/* Subtle play overlay for visual appeal */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>

      {/* Description and CTA section */}
      <div className="text-center mt-8">
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          See our platform in action - from job search to interview prep to visa sponsorship
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <button className="border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-50 px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105">
            Search Jobs
          </button>
          <button className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-white px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
            Start Your Journey
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-gray-100 relative overflow-hidden">
      {/* Blurred Background Circles */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-1/3 aspect-square bg-[#069DDE] rounded-full filter blur-3xl opacity-25"></div>
        <div className="absolute top-10 right-8 w-1/3 aspect-square bg-[#FF76591A] rounded-full filter blur-3xl opacity-25"></div>
        <div className="absolute top-100 left-20 w-1/3 aspect-square bg-[#EFD329] rounded-full filter blur-3xl opacity-25"></div>
        <div className="absolute top-150 right-30 w-1/3 aspect-square bg-[#A0C366] rounded-full filter blur-3xl opacity-25"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            The Go-to platform for International<br />
            Students' Employment in the U.S.
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Bridging the Gap between Education, Employment, and Immigration.
          </p>

          {/* Service Walkthrough Video */}
          <ServiceWalkthrough />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
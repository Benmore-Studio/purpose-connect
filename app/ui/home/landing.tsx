"use client";
import React from "react";

const ServiceWalkthrough = () => {
  return (
    <div className="w-full max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto mt-6 sm:mt-8 md:mt-12 px-3 sm:px-4 md:px-6">
      {/* Enhanced video container with glow effect */}
      <div className="relative group">
        {/* Animated glow background - fully responsive */}
        <div className="absolute -inset-0.5 sm:-inset-1 md:-inset-1 lg:-inset-2 bg-gradient-to-r from-cyan-400 via-emerald-400 to-blue-400 rounded-xl sm:rounded-2xl md:rounded-3xl opacity-10 sm:opacity-15 md:opacity-20 group-hover:opacity-20 sm:group-hover:opacity-25 md:group-hover:opacity-30 transition-opacity duration-500 animate-pulse blur-sm sm:blur-md md:blur-lg lg:blur-xl"></div>

        {/* Main video container */}
        <div className="relative bg-white/10 sm:bg-white/15 md:bg-white/20 backdrop-blur-md lg:backdrop-blur-lg rounded-xl sm:rounded-2xl md:rounded-3xl p-1.5 sm:p-2 md:p-3 lg:p-4 shadow-lg sm:shadow-xl md:shadow-2xl border border-white/15 sm:border-white/20 md:border-white/30 hover:shadow-xl sm:hover:shadow-2xl md:hover:shadow-3xl transition-all duration-500">
          <div
            className="relative w-full overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl"
            style={{ paddingBottom: "56.25%" }}
          >
            <iframe
              src="https://www.loom.com/embed/a8ad03e6ced84b039004129548203c69?sid=fcff3493-4c8f-4908-84a1-4b5f20a3d668&autoplay=1&loop=1&speed=1&hideEmbedTopBar=1&hide_owner=1&hide_share=1&hide_title=1&hideSpeedButton=1&hide_play_button=1"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full border-0"
              title="Service Walkthrough Video"
              onLoad={() => {
                // Trigger fade out after iframe loads
                setTimeout(() => {
                  const overlay = document.getElementById("video-overlay");
                  if (overlay) {
                    overlay.style.opacity = "0";
                    setTimeout(() => {
                      overlay.style.display = "none";
                    }, 1500);
                  }
                }, 250);
              }}
            ></iframe>

            {/* Overlay to hide initial play button */}
            <div
              id="video-overlay"
              className="absolute inset-0 bg-gradient-to-br from-cyan-500/15 sm:from-cyan-500/20 via-emerald-500/5 sm:via-emerald-500/10 to-blue-500/15 sm:to-blue-500/20 backdrop-blur-sm flex items-center justify-center transition-opacity duration-1000"
              style={{ zIndex: 10 }}
            >
              <div className="bg-white/85 sm:bg-white/90 backdrop-blur-sm rounded-full p-2 sm:p-3 md:p-4 shadow-md sm:shadow-lg animate-pulse">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-cyan-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>

            {/* Subtle play overlay for visual appeal */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/5 sm:from-black/10 via-transparent to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>

      {/* Description and CTA section */}
      <div className="text-center mt-4 sm:mt-6 md:mt-8 px-2 sm:px-4">
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto mb-4 sm:mb-6 md:mb-8 leading-relaxed">
          See our platform in action - from job search to interview prep to visa
          sponsorship
        </p>

        <div className="flex flex-col space-y-3 sm:space-y-4 sm:flex-row sm:justify-center sm:items-center sm:space-x-3 md:space-x-4 lg:space-x-6">
          <button className="w-full sm:w-auto border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-50 focus:bg-cyan-50 focus:outline-none focus:ring-2 focus:ring-cyan-200 px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base md:text-lg transition-all duration-300 hover:scale-105 active:scale-95">
            Search Jobs
          </button>
          <button className="w-full sm:w-auto inline-flex items-center justify-center bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 focus:from-cyan-600 focus:to-emerald-600 focus:outline-none focus:ring-2 focus:ring-cyan-200 text-white px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base md:text-lg transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm sm:shadow-md md:shadow-lg hover:shadow-md sm:hover:shadow-lg md:hover:shadow-xl">
            Start Your Journey
            <svg
              className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 ml-1.5 sm:ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-gray-100 relative overflow-hidden py-20 lg:pt-30">
      {/* Blurred Background Circles - Fully responsive */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top left circle */}
        <div className="absolute top-6 sm:top-10 md:top-16 lg:top-20 left-2 sm:left-4 md:left-8 lg:left-10 w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-80 lg:h-80 xl:w-96 xl:h-96 bg-[#069DDE] rounded-full filter blur-xl sm:blur-2xl md:blur-3xl opacity-15 sm:opacity-20 md:opacity-25"></div>

        {/* Top right circle */}
        <div className="absolute top-3 sm:top-5 md:top-8 lg:top-10 right-1 sm:right-2 md:right-6 lg:right-8 w-20 h-20 sm:w-28 sm:h-28 md:w-40 md:h-40 lg:w-72 lg:h-72 xl:w-80 xl:h-80 bg-[#FF76591A] rounded-full filter blur-xl sm:blur-2xl md:blur-3xl opacity-15 sm:opacity-20 md:opacity-25"></div>

        {/* Middle left circle */}
        <div className="absolute top-40 sm:top-48 md:top-64 lg:top-80 xl:top-96 left-4 sm:left-6 md:left-12 lg:left-20 w-22 h-22 sm:w-28 sm:h-28 md:w-44 md:h-44 lg:w-64 lg:h-64 xl:w-80 xl:h-80 bg-[#EFD329] rounded-full filter blur-xl sm:blur-2xl md:blur-3xl opacity-10 sm:opacity-15 md:opacity-25"></div>

        {/* Middle right circle */}
        <div className="absolute top-52 sm:top-64 md:top-80 lg:top-96 xl:top-110 right-2 sm:right-4 md:right-8 lg:right-16 xl:right-30 w-18 h-18 sm:w-24 sm:h-24 md:w-36 md:h-36 lg:w-56 lg:h-56 xl:w-72 xl:h-72 bg-[#A0C366] rounded-full filter blur-xl sm:blur-2xl md:blur-3xl opacity-10 sm:opacity-15 md:opacity-25"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full px-3 sm:px-4 md:px-6 lg:px-8 pt-8 sm:pt-12 md:pt-16 lg:pt-20 pb-8 sm:pb-12 md:pb-16 lg:pb-20">
        <div className="text-center">
          {/* Fully responsive heading */}
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-3 sm:mb-4 md:mb-6 px-2 sm:px-4">
            <span className="block xs:block sm:inline">
              The Go-to platform for
            </span>
            <span className="block xs:block sm:inline">
              {" "}
              International <br className="hidden lg:block"/> Students'
            </span>
            <span className="block xs:block sm:inline">
              {" "}
              Employment in the U.S.
            </span>
          </h1>

          <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-6 sm:mb-8 md:mb-12 max-w-xs xs:max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto px-3 sm:px-4 leading-relaxed">
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

import React from "react";
import { Bookmark } from "lucide-react";
import Image from "next/image";

const Landing = () => {
  return (
    <div className="bg-white flex items-center justify-center px-4 py-28">
      <div className="max-w-7xl w-full">
        {/* Mobile Layout - Single Column */}
        <div className="lg:hidden space-y-8 text-center">
          <div className="space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Your Career<br />
              Starts Here
            </h1>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-md mx-auto">
              Tired of job boards that don't understand your visa situation?
              Purpose Connect was built for you.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:gap-4">
            <button className="w-full px-6 py-3 border-2 border-blue-500 text-blue-500 rounded-full font-medium hover:bg-blue-50 focus:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200">
              Search Jobs
            </button>
            <button className="w-full px-6 py-3 bg-blue-500 text-white rounded-full font-medium hover:bg-blue-600 focus:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200">
              Sign up Today
            </button>
          </div>

          <div className="relative mt-12">
            <div className="relative shadow-lg w-full h-[400px] sm:h-[500px] rounded-tl-[100px] overflow-hidden">
              <Image
                src="/student-landing-1.jpg"
                alt="Two women having a professional conversation in a modern office setting"
                className="object-cover"
                fill
                sizes="100vw"
                priority
              />

              {/* Overlay Card - Mobile positioned */}
              <div className="absolute bottom-4 left-4 right-4 bg-white rounded-2xl shadow-lg p-4 opacity-95">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-600 font-medium">
                    AI Matched Job
                  </span>
                  <Bookmark className="w-5 h-5 text-gray-400" />
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                    </div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-gray-900 text-base">
                      Software Engineer
                    </h3>
                    <p className="text-sm text-gray-600">Apple Inc.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Two Columns */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-12 text-left">
            <div className="space-y-6">
              <h1 className="text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                Your Career<br />
                Starts Here
              </h1>
              <p className="text-lg xl:text-xl text-gray-600 leading-relaxed max-w-md">
                Tired of job boards that don't understand your visa situation?
                Purpose Connect was built for you.
              </p>
            </div>

            <div className="flex flex-row gap-4">
              <button className="px-8 py-3 border-2 border-blue-500 text-blue-500 rounded-full font-medium hover:bg-blue-50 focus:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200">
                Search Jobs
              </button>
              <button className="px-8 py-3 bg-blue-500 text-white rounded-full font-medium hover:bg-blue-600 focus:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200">
                Sign up Today
              </button>
            </div>
          </div>

          {/* Right Content - Image with Overlay */}
          <div className="relative">
            <div className="relative shadow-2xl w-full h-[550px] xl:h-[650px] rounded-tl-[200px]">
              <Image
                src="/student-landing-1.jpg"
                alt="Two women having a professional conversation in a modern office setting"
                className="object-cover rounded-tl-[200px]"
                fill
                sizes="50vw"
                priority
                
              />

              {/* Overlay Card - Desktop positioned */}
              <div className="absolute bottom-16 -left-24 bg-white rounded-2xl shadow-lg p-4 w-80 opacity-90">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600 font-medium">
                    AI Matched Job
                  </span>
                  <Bookmark className="w-5 h-5 text-gray-400" />
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Software Engineer
                    </h3>
                    <p className="text-sm text-gray-600">Apple Inc.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
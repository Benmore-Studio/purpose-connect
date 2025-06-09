import Image from "next/image";
import React from "react";

export default function CaseManagementSection() {
  return (
    <section className="bg-gray-50 flex items-center py-30 lg:py-40">
      <div className="container mx-auto px-6 max-w-md lg:max-w-7xl lg:px-0">
        {/* Mobile Layout */}
        <div className="lg:hidden text-center space-y-8">
          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 leading-tight">
              Simplify Case Management & Connect with Clients
            </h2>
            
            <p className="text-base text-gray-600 leading-relaxed">
              Purpose Connect helps you support international students with efficient legal guidance.
            </p>
          </div>

          {/* Buttons */}
          <div className="space-y-4">
            <button className="w-full px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-medium rounded-full hover:bg-cyan-50 transition-colors text-lg">
              Search Jobs
            </button>
            
            <button className="w-full px-8 py-4 bg-cyan-400 text-white font-medium rounded-full hover:bg-cyan-500 transition-colors text-lg">
              Sign up Today
            </button>
          </div>

          {/* Images - Two separate side by side */}
          <div className="relative flex gap-2 pt-4 justify-start">
            {/* Left smaller image */}
            <div className="relative w-60 aspect-square bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/lawyer-landing-1.png"
                alt="lawyer landing 1"
                fill
                className="rounded-2xl object-cover"
              />
            </div>
            
            {/* Right larger image */}
            <div className="absolute w-40 aspect-square -bottom-8 -right-4 bg-gray-100 rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="/lawyer-landing-2.jpg"
                alt="lawyer landing 2"
                fill
                className="rounded-3xl object-cover"
              />
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content Section */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Simplify Case Management & Connect with Clients
              </h2>

              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                Purpose Connect helps you support international students with
                efficient legal guidance.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4 pt-4">
              <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-medium rounded-full hover:bg-cyan-50 transition-colors text-lg">
                Search Jobs
              </button>

              <button className="px-8 py-4 bg-cyan-400 text-white font-medium rounded-full hover:bg-cyan-500 transition-colors text-lg">
                Sign up Today
              </button>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative flex justify-end">
            <div className="relative">
              {/* Main large image */}
              <div className="relative w-96 h-96 bg-gray-100 rounded-3xl overflow-hidden">
                <Image
                  src="/lawyer-landing-1.png"
                  alt="lawyer landing 1"
                  fill
                  className="rounded-3xl object-cover"
                />
              </div>

              {/* Overlapping smaller image */}
              <div className="absolute -bottom-16 -right-32 w-64 h-64 bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/lawyer-landing-2.jpg"
                  alt="lawyer landing 2"
                  fill
                  className="rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
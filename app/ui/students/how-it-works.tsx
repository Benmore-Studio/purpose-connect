import React from "react";
import { Zap, FileEdit, MessageCircle } from "lucide-react";

const HowItWorks = () => {
  return (
    <div className="max-w-7xl py-30 mx-auto">
      <div className="py-16 lg:py-24">
        {/* Header Section */}
        <div className="mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            How it works
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl">
            Creating your profile and landing your dream job is easy with
            Purpose Connect.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-3 justify-items-center gap-8">
          {/* Step 1 */}
          <div className="bg-gray-50 py-10 flex flex-col items-start justify-between px-8 h-[350px]">
            <div className="w-16 h-16 bg-[#FAAD14] rounded-xl flex items-center justify-center mb-12">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">
                Create Your Profile
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Add your education, work eligibility, and visa status.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 py-10 flex flex-col items-start justify-between px-8 h-[350px]">
            <div className="w-16 h-16 bg-[#FAAD14] rounded-xl flex items-center justify-center mb-12">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">
                Get Matched
              </h3>
              <p className="text-gray-600 text-xl">
                See job opportunities that fit your profile.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 py-10 flex flex-col items-start justify-between px-8 h-[350px]">
            <div className="w-16 h-16 bg-[#FAAD14] rounded-xl flex items-center justify-center mb-12">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">
                Stay Prepared
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Practice interviews, track applications, and stay ahead of visa
                timelines.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;

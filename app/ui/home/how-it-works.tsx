import Image from "next/image";

// components/HowItWorks.tsx
export default function HowItWorks() {
  return (
    <section className="bg-black text-white py-12 sm:py-16 md:py-20 lg:py-24 xl:py-30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Background dots - hidden on mobile for cleaner look */}
        <div className="absolute top-0 right-4 sm:right-8 opacity-20 sm:opacity-30 hidden sm:block">
          <div className="grid grid-cols-5 sm:grid-cols-7 gap-2 sm:gap-4">
            {Array.from({ length: 35 }, (_, i) => (
              <div key={i} className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-600 rounded-full"></div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-8 sm:gap-10 items-center relative z-10">
          {/* Header */}
          <div className="mb-8 sm:mb-12 flex flex-col sm:flex-row justify-between items-start sm:items-center w-full gap-4 sm:gap-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              How it works
            </h2>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-xs sm:max-w-md lg:max-w-lg text-left sm:text-right">
              Discover the three powerful steps to ignite your goals and propel
              your success to new heights.
            </p>
          </div>

          {/* Divider Line */}
          <div className="w-full h-px bg-gray-700 mb-8 sm:mb-12"></div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 items-start lg:items-center gap-8 sm:gap-12 lg:gap-16 xl:gap-24 w-full">
            {/* Steps Column */}
            <div className="space-y-6 sm:space-y-8 flex flex-col order-2 lg:order-1">
              {/* Step 1 */}
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-gray-800 hover:border-gray-700 transition-colors duration-200">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="flex-shrink-0">
                    <div className="relative w-10 h-10 sm:w-12 sm:h-12 bg-gray-800/50 rounded-lg flex items-center justify-center">
                      <Image 
                        src="/create-profile-icon.svg" 
                        alt="Create profile icon" 
                        width={24}
                        height={24}
                        className="w-5 h-5 sm:w-6 sm:h-6"
                      />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">
                      Create Your Profile
                    </h3>
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                      Register as a student, employer, or immigration lawyer.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-gray-800 hover:border-gray-700 transition-colors duration-200">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="flex-shrink-0">
                    <div className="relative w-10 h-10 sm:w-12 sm:h-12 bg-gray-800/50 rounded-lg flex items-center justify-center">
                      <Image 
                        src="/service-icon.svg" 
                        alt="Get matched icon" 
                        width={24}
                        height={24}
                        className="w-5 h-5 sm:w-6 sm:h-6"
                      />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">
                      Get Matched
                    </h3>
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                      Smart algorithms connect students to jobs and legal
                      assistance.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-gray-800 hover:border-gray-700 transition-colors duration-200">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="flex-shrink-0">
                    <div className="relative w-10 h-10 sm:w-12 sm:h-12 bg-gray-800/50 rounded-lg flex items-center justify-center">
                      <Image 
                        src="/collaborate-icon.svg" 
                        alt="Collaborate icon" 
                        width={24}
                        height={24}
                        className="w-5 h-5 sm:w-6 sm:h-6"
                      />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">
                      Collaborate Effortlessly
                    </h3>
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                      Schedule interviews, track case progress, and manage
                      opportunities from one dashboard.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Column */}
            <div className="relative w-full order-1 lg:order-2">
              {/* Mobile/Tablet Image */}
              <div className="relative aspect-[4/3] sm:aspect-[3/2] lg:hidden w-full">
                <Image
                  src="/how-it-works.jpg"
                  alt="How it works illustration showing the platform interface"
                  fill
                  className="rounded-xl sm:rounded-2xl object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
              
              {/* Desktop Image */}
              <div className="relative aspect-[4/5] hidden lg:block w-full">
                <Image
                  src="/how-it-works.jpg"
                  alt="How it works illustration showing the platform interface"
                  fill
                  className="rounded-2xl object-cover"
                  sizes="50vw"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Call to Action - Optional */}
        </div>
      </div>
    </section>
  );
}
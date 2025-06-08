import Image from "next/image";

// components/FeaturesSection.tsx
export default function FeaturesSection() {
  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24 xl:py-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Stay ahead with our<br className="hidden sm:block" />
            <span className="sm:hidden"> </span>powerful features
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-xs sm:max-w-2xl md:max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Get matched with top employers, build meaningful connections, and thrive in your career—without resumes, barriers, or confusion. Your future starts here.
          </p>
        </div>

        {/* Features Container */}
        <div className="space-y-12 sm:space-y-16 md:space-y-20 border border-gray-200 p-6 sm:p-8 md:p-12 lg:p-16 xl:p-25 rounded-2xl sm:rounded-3xl">
          
          {/* Feature 1 - Job Matching */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            <div className="order-1">
              <div className="text-orange-500 text-sm sm:text-base md:text-lg font-semibold mb-3 sm:mb-4">01</div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                Job Matching Based on Skills &<br className="hidden sm:block" />
                <span className="sm:hidden"> </span>Work Authorization
              </h3>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8">
                We match you with jobs that fit your skills and visa status—no guesswork, just green lights to work, grow, and shine where you belong.
              </p>
              <button className="border-2 border-blue-500 text-blue-500 hover:bg-blue-50 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-colors text-sm sm:text-base">
                Learn more
              </button>
            </div>
            <div className="relative flex items-center justify-center order-1 lg:order-2">
              <div className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px]">
                <Image 
                  src='/features-1.svg' 
                  alt='Job matching feature illustration' 
                  width={400} 
                  height={400} 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Feature 2 - Immigration Support */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            <div className="order-1 lg:order-2">
              <div className="text-orange-500 text-sm sm:text-base md:text-lg font-semibold mb-3 sm:mb-4">02</div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                Expert Immigration<br className="hidden sm:block" />
                <span className="sm:hidden"> </span>Support
              </h3>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8">
                Visas are tricky—we make them easier. Our experts guide you through the maze so you can focus on your dreams, not just documents.
              </p>
              <button className="border-2 border-blue-500 text-blue-500 hover:bg-blue-50 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-colors text-sm sm:text-base">
                Learn more
              </button>
            </div>
            <div className="relative flex items-center justify-center order-1">
              <div className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px]">
                <Image 
                  src='/feature-2.svg' 
                  alt='Immigration support feature illustration' 
                  width={400} 
                  height={400} 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Feature 3 - Interview Scheduling */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            <div className="order-1">
              <div className="text-orange-500 text-sm sm:text-base md:text-lg font-semibold mb-3 sm:mb-4">03</div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                Smart Interview Scheduling &<br className="hidden sm:block" />
                <span className="sm:hidden"> </span>Communication
              </h3>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8">
                No missed emails or confusing time zones. We keep interviews simple, smooth, and synced so you can show up ready and relaxed.
              </p>
              <button className="border-2 border-blue-500 text-blue-500 hover:bg-blue-50 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-colors text-sm sm:text-base">
                Learn more
              </button>
            </div>
            <div className="relative flex items-center justify-center order-1 lg:order-2">
              <div className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px]">
                <Image 
                  src='/features-3.svg' 
                  alt='Interview scheduling feature illustration' 
                  width={400} 
                  height={400} 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Feature 4 - Immigration Timelines */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            <div className="order-1 lg:order-2">
              <div className="text-orange-500 text-sm sm:text-base md:text-lg font-semibold mb-3 sm:mb-4">04</div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                Interactive Immigration<br className="hidden sm:block" />
                <span className="sm:hidden"> </span>Timelines & Alerts
              </h3>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8">
                Deadlines don't have to be scary. Get friendly alerts and easy-to-follow timelines so you stay on track—and stress-free.
              </p>
              <button className="border-2 border-blue-500 text-blue-500 hover:bg-blue-50 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-colors text-sm sm:text-base">
                Learn more
              </button>
            </div>
            <div className="relative flex items-center justify-center order-1">
              <div className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px]">
                <Image 
                  src='/features-4.svg' 
                  alt='Immigration timelines feature illustration' 
                  width={400} 
                  height={400} 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Feature 5 - AI Mock Interviews */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            <div className="order-1">
              <div className="text-orange-500 text-sm sm:text-base md:text-lg font-semibold mb-3 sm:mb-4">05</div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                AI-Powered Mock<br className="hidden sm:block" />
                <span className="sm:hidden"> </span>Interviews & Feedback
              </h3>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8">
                Practice makes power. Our AI coach helps you prep with real questions and helpful feedback to boost your confidence.
              </p>
              <button className="border-2 border-blue-500 text-blue-500 hover:bg-blue-50 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-colors text-sm sm:text-base">
                Learn more
              </button>
            </div>
            <div className="relative flex items-center justify-center order-1 lg:order-2">
              <div className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px]">
                <Image 
                  src='/features-5.svg' 
                  alt='AI mock interviews feature illustration' 
                  width={400} 
                  height={400} 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Feature 6 - Professional Development */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            <div className="order-1 lg:order-2">
              <div className="text-orange-500 text-sm sm:text-base md:text-lg font-semibold mb-3 sm:mb-4">06</div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                Professional Development<br className="hidden sm:block" />
                <span className="sm:hidden"> </span>with Leaderboard Badges
              </h3>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8">
                Grow your skills, earn shiny badges, and climb the leaderboard. It's career-building with a splash of fun and a dash of friendly competition.
              </p>
              <button className="border-2 border-blue-500 text-blue-500 hover:bg-blue-50 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-colors text-sm sm:text-base">
                Learn more
              </button>
            </div>
            <div className="relative flex items-center justify-center order-1">
              <div className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px]">
                <Image 
                  src='/features-6.svg' 
                  alt='Professional development feature illustration' 
                  width={400} 
                  height={400} 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
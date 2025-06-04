// components/FeaturesSection.tsx
export default function FeaturesSection() {
  return (
    <section className="bg-white py-30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Stay ahead with our<br />
            powerful features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get matched with top employers, build meaningful connections, and thrive in your career—without resumes, barriers, or confusion. Your future starts here.
          </p>
        </div>

        {/* Features */}
        <div className="space-y-20 border border-gray-200 p-25 rounded-3xl">
          {/* Feature 1 - Job Matching */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-orange-500 text-lg font-semibold mb-4">01</div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Job Matching Based on Skills &<br />
                Work Authorization
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                We match you with jobs that fit your skills and visa status—no guesswork, just green lights to work, grow, and shine where you belong.
              </p>
              <button className="border-2 border-blue-500 text-blue-500 hover:bg-blue-50 px-6 py-3 rounded-full font-medium transition-colors">
                Learn more
              </button>
            </div>
            <div className="relative">
              <div className="bg-green-100 rounded-2xl p-8 h-80 flex items-center justify-center">
                <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <div className="h-2 bg-gray-200 rounded flex-1"></div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <div className="h-2 bg-gray-200 rounded flex-1"></div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <div className="h-2 bg-gray-200 rounded flex-1"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 2 - Immigration Support */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <div className="text-orange-500 text-lg font-semibold mb-4">02</div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Expert Immigration<br />
                Support
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Visas are tricky—we make them easier. Our experts guide you through the maze so you can focus on your dreams, not just documents.
              </p>
              <button className="border-2 border-blue-500 text-blue-500 hover:bg-blue-50 px-6 py-3 rounded-full font-medium transition-colors">
                Learn more
              </button>
            </div>
            <div className="lg:order-1 relative">
              <div className="bg-green-100 rounded-2xl p-8 h-80 flex items-center justify-center">
                <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm">
                  <div className="space-y-4">
                    <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                    <div className="h-3 bg-blue-500 rounded w-2/3"></div>
                    <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 3 - Interview Scheduling */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-orange-500 text-lg font-semibold mb-4">03</div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Smart Interview Scheduling &<br />
                Communication
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                No missed emails or confusing time zones. We keep interviews simple, smooth, and synced so you can show up ready and relaxed.
              </p>
              <button className="border-2 border-blue-500 text-blue-500 hover:bg-blue-50 px-6 py-3 rounded-full font-medium transition-colors">
                Learn more
              </button>
            </div>
            <div className="relative">
              <div className="bg-orange-100 rounded-2xl p-8 h-80 flex items-center justify-center">
                <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="h-2 bg-gray-300 rounded w-16"></div>
                      <div className="h-2 bg-blue-500 rounded w-12"></div>
                    </div>
                    <div className="grid grid-cols-7 gap-1">
                      {Array.from({ length: 21 }, (_, i) => (
                        <div
                          key={i}
                          className={`h-6 rounded ${
                            i === 10 || i === 15 ? 'bg-blue-500' : 'bg-gray-100'
                          }`}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 4 - Immigration Timelines */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <div className="text-orange-500 text-lg font-semibold mb-4">04</div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Interactive Immigration<br />
                Timelines & Alerts
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Deadlines don't have to be scary. Get friendly alerts and easy-to-follow timelines so you stay on track—and stress-free.
              </p>
              <button className="border-2 border-blue-500 text-blue-500 hover:bg-blue-50 px-6 py-3 rounded-full font-medium transition-colors">
                Learn more
              </button>
            </div>
            <div className="lg:order-1 relative">
              <div className="bg-green-100 rounded-2xl p-8 h-80 flex items-center justify-center">
                <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                      <div className="h-2 bg-gray-200 rounded flex-1"></div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                      <div className="h-2 bg-gray-200 rounded flex-1"></div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                      <div className="h-2 bg-gray-200 rounded flex-1"></div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                      <div className="h-2 bg-gray-200 rounded flex-1"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 5 - AI Mock Interviews */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-orange-500 text-lg font-semibold mb-4">05</div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                AI-Powered Mock<br />
                Interviews & Feedback
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Practice makes power. Our AI coach helps you prep with real questions and helpful feedback to boost your confidence.
              </p>
              <button className="border-2 border-blue-500 text-blue-500 hover:bg-blue-50 px-6 py-3 rounded-full font-medium transition-colors">
                Learn more
              </button>
            </div>
            <div className="relative">
              <div className="bg-orange-100 rounded-2xl p-8 h-80 flex items-center justify-center">
                <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm">
                  <div className="space-y-4">
                    <div className="bg-gray-900 rounded-lg h-32 flex items-center justify-center">
                      <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center">
                        <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 bg-gray-200 rounded w-full"></div>
                      <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 6 - Professional Development */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <div className="text-orange-500 text-lg font-semibold mb-4">06</div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Professional Development<br />
                with Leaderboard Badges
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Grow your skills, earn shiny badges, and climb the leaderboard. It's career-building with a splash of fun and a dash of friendly competition.
              </p>
              <button className="border-2 border-blue-500 text-blue-500 hover:bg-blue-50 px-6 py-3 rounded-full font-medium transition-colors">
                Learn more
              </button>
            </div>
            <div className="lg:order-1 relative">
              <div className="bg-green-100 rounded-2xl p-8 h-80 flex items-center justify-center">
                <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm">
                  <div className="space-y-4">
                    <div className="flex justify-center space-x-2">
                      <div className="w-8 h-8 bg-yellow-400 rounded-full"></div>
                      <div className="w-8 h-8 bg-silver-400 rounded-full"></div>
                      <div className="w-8 h-8 bg-orange-400 rounded-full"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 bg-blue-500 rounded"></div>
                        <div className="h-2 bg-gray-200 rounded flex-1"></div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 bg-green-500 rounded"></div>
                        <div className="h-2 bg-gray-200 rounded flex-1"></div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 bg-purple-500 rounded"></div>
                        <div className="h-2 bg-gray-200 rounded flex-1"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import Image from "next/image";

// components/HowItWorks.tsx
export default function HowItWorks() {
  return (
    <section className="bg-black text-white py-30 relative overflow-hidden">
      {/* Background Pattern */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute  right-8 opacity-30">
          <div className="grid grid-cols-7 gap-4">
            {Array.from({ length: 35 }, (_, i) => (
              <div key={i} className="w-2 h-2 bg-gray-600 rounded-full"></div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-10 items-center">
          {/* Left Side - Content */}
          {/* Header */}
          <div className="mb-12 flex flex-row justify-between items-center w-full">
            <h2 className="text-4xl md:text-5xl font-bold">
              How it works
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed max-w-lg">
              Discover the three powerful steps to ignite your goals and propel
              your success to new heights.
            </p>
          </div>
          {/* Divider Line */}
          <div className="w-full h-px bg-gray-700 mb-12"></div>

          <div className="grid grid-cols-2 items-center gap-x-48">
            <div className="space-y-8 flex flex-col">
              {/* Step 1 */}
              <div className="bg-gray-900 bg-opacity-50 rounded-lg p-6 border border-gray-800">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="relative w-12 h-12 bg-opacity-20 rounded-lg flex items-center justify-center">
                      <Image src="/create-profile-icon.svg" alt="icon" fill />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Create Your Profile
                    </h3>
                    <p className="text-gray-400">
                      Register as a student, employer, or immigration lawyer.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-gray-900 bg-opacity-50 rounded-lg p-6 border border-gray-800">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="relative w-12 h-12 bg-opacity-20 rounded-lg flex items-center justify-center">
                      <Image src="/service-icon.svg" alt="icon" fill />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Get Matched</h3>
                    <p className="text-gray-400">
                      Smart algorithms connect students to jobs and legal
                      assistance.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-gray-900 bg-opacity-50 rounded-lg p-6 border border-gray-800">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="relative w-12 h-12 bg-opacity-20 rounded-lg flex items-center justify-center">
                      <Image src="/collaborate-icon.svg" alt="icon" fill />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Collaborate Effortlessly
                    </h3>
                    <p className="text-gray-400">
                      Schedule interviews, track case progress, and manage
                      opportunities from one dashboard.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-full h-full ">
              <Image
                src="/how-it-works.jpg"
                alt="how it works"
                fill
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

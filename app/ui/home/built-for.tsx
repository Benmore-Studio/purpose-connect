// components/ThreeAudiences.tsx
export default function BuiltFor() {
  return (
    <section className="bg-gray-50 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight px-4 sm:px-0">
            The amazing people we are<br className="hidden sm:block" />
            <span className="sm:hidden"> </span>building this app for
          </h2>
        </div>

        {/* Three Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {/* For Students */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sm:p-8 text-center flex flex-col">
            <div className="mb-4 sm:mb-6">
              <div className="text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4">👨‍🎓</div>
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              For Students
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed flex-grow">
              Get matched to jobs with employers who are ready to hire you
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-medium transition-colors text-sm sm:text-base">
              Get Matched Today
            </button>
          </div>

          {/* For Employers */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sm:p-8 text-center flex flex-col">
            <div className="mb-4 sm:mb-6">
              <div className="text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4">👨‍💼</div>
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              For Employers
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed flex-grow">
              Access to a pool of ready-to-work international students while
              benefiting from expert immigration guidance
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-medium transition-colors text-sm sm:text-base">
              Hire Highly-Skilled Talent
            </button>
          </div>

          {/* Immigration Attorneys */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sm:p-8 text-center flex flex-col md:col-span-2 lg:col-span-1">
            <div className="mb-4 sm:mb-6">
              <div className="text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4">👩‍⚖️</div>
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              Immigration Attorneys
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed flex-grow">
              10x your immigration client pipeline while supporting those who
              need your services
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-medium transition-colors text-sm sm:text-base">
              Connect with New Clients
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
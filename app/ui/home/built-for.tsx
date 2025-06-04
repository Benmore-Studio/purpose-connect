// components/ThreeAudiences.tsx
export default function BuiltFor() {
  return (
    <section className="bg-gray-50 py-30">
      <div className="flex flex-col px-4 sm:px-6 lg:px-8 justify-center items-center">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            The amazing people we are
            <br />
            building for this app for
          </h2>
        </div>

        {/* Three Cards */}
        <div className="flex justify-center items-center gap-8">
          {/* For Students */}
          <div className="bg-white rounded-lg border border-gray-200 p-8 text-center h-[400px] w-[400px] flex flex-col">
            <div className="mb-6">
              <div className="text-6xl mb-4">👨‍🎓</div>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              For Students
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed flex-grow">
              Get matched to jobs with employers who are ready to hire you
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-full font-medium transition-colors mb-2.5">
              Get Matched Today
            </button>
          </div>

          {/* For Employers */}
          <div className="bg-white rounded-lg border border-gray-200 p-8 text-center h-[400px] w-[400px] flex flex-col">
            <div className="mb-6">
              <div className="text-6xl mb-4">👨‍💼</div>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              For Employers
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed flex-grow">
              Access to a pool of ready-to-work international students while
              benefiting from expert immigration guidance
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-full font-medium transition-colors mb-2.5">
              Hire Highly-Skilled Talent
            </button>
          </div>

          {/* Immigration Attorneys */}
          <div className="bg-white rounded-lg border border-gray-200 p-8 text-center h-[400px] w-[400px] flex flex-col">
            <div className="mb-6">
              <div className="text-6xl mb-4">👩‍⚖️</div>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Immigration Attorneys
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed flex-grow">
              10x your immigration client pipeline while supporting those who
              need your services
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-full font-medium transition-colors mb-2.5">
              Connect with New Clients
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

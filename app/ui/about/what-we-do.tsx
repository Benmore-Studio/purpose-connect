import Image from "next/image";

export default function WhatWeDo() {
  const services = [
    {
      title: "Smart Job Matching",
      description:
        "Our advanced job matching system connects students with opportunities that align with their skills, education, and work authorization.",
    },
    {
      title: "Employer-Student Connections",
      description:
        "We simplify the hiring process by enabling employers to find qualified candidates quickly and easily.",
    },
    {
      title: "Immigration Support and Lawyer Matching",
      description:
        "Navigating visa processes can be complicated, and that's why we help students access expert legal support.",
    },
    {
      title: "Interview Scheduling and Communication",
      description:
        "We take the hassle out of coordinating interviews by offering integrated scheduling with Google Meet and Zoom.",
    },
  ];

  return (
    <section className="bg-white py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 lg:mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What we do
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl">
            We bridge the gap between education, employment, and legal support,
            empowering brighter futures.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Services List */}
          <div className="relative order-2 lg:order-1">
            {/* Continuous gray background line */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-200"></div>

            {/* Orange active line for first item */}
            <div className="absolute left-0 top-0 w-1 h-20 bg-orange-400"></div>

            {/* Services List */}
            <div className="space-y-8 lg:space-y-12">
              {services.map((service, index) => (
                <div key={index} className="relative pl-6">
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 lg:mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-base lg:text-lg">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative order-1 lg:order-2">
            <div className="relative aspect-[4/3] lg:aspect-[3/4] w-full rounded-md overflow-hidden shadow-xl">
              <Image
                src="/what-we-do.jpg"
                alt="Professional meeting with students and employers discussing opportunities"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

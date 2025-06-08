// AboutLandingSection.jsx
import Image from "next/image";

export default function AboutLandingSection() {
  return (
    <section className="bg-gray-50 pt-28 pb-12 sm:pb-16 md:pb-20 lg:pb-24 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-8 sm:top-12 md:top-20 left-4 sm:left-8 md:left-10 w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-60 lg:h-60 xl:w-1/3 xl:aspect-square bg-[#069DDE] rounded-full filter blur-2xl sm:blur-3xl opacity-20 sm:opacity-25"></div>
        <div className="absolute top-4 sm:top-6 md:top-10 right-4 sm:right-6 md:right-8 w-20 h-20 sm:w-28 sm:h-28 md:w-40 md:h-40 lg:w-52 lg:h-52 xl:w-1/3 xl:aspect-square bg-[#FF76591A] rounded-full filter blur-2xl sm:blur-3xl opacity-20 sm:opacity-25"></div>
        <div className="absolute top-32 sm:top-48 md:top-60 lg:top-80 xl:top-100 left-8 sm:left-12 md:left-20 w-16 h-16 sm:w-24 sm:h-24 md:w-36 md:h-36 lg:w-48 lg:h-48 xl:w-1/3 xl:aspect-square bg-[#EFD329] rounded-full filter blur-2xl sm:blur-3xl opacity-15 sm:opacity-25 hidden sm:block"></div>
        <div className="absolute top-40 sm:top-56 md:top-72 lg:top-96 xl:top-150 right-8 sm:right-16 md:right-24 lg:right-30 w-18 h-18 sm:w-28 sm:h-28 md:w-40 md:h-40 lg:w-52 lg:h-52 xl:w-1/3 xl:aspect-square bg-[#A0C366] rounded-full filter blur-2xl sm:blur-3xl opacity-15 sm:opacity-25 hidden md:block"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Text Content */}
        <div className="max-w-xs sm:max-w-lg md:max-w-xl lg:max-w-2xl mb-8 sm:mb-12 md:mb-16 text-center lg:text-left mx-auto lg:mx-0">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6 md:mb-8">
            Building Bridges to{" "}
            <span className="block sm:inline lg:block">Brighter Futures</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-xl text-gray-600 leading-relaxed">
            Our Vision is to transform workplaces by prioritizing the human
            element in the hiring process.
          </p>
        </div>

        {/* Image Grid - Responsive Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 items-end">
          {/* Image 1 - Bottom left */}
          <div className="relative aspect-square sm:aspect-[4/5] lg:aspect-square rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg sm:shadow-xl order-1">
            <Image
              src="/about-landing-1.png"
              alt="Professional woman in business meeting with presentation"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
            />
          </div>

          {/* Image 2 - Taller middle-left */}
          <div className="relative aspect-[3/4] sm:aspect-[4/6] lg:aspect-[4/6] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg sm:shadow-xl lg:mb-4 xl:mb-10 order-2">
            <Image
              src="/about-landing-2.png"
              alt="Business professional in meeting environment"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
            />
          </div>

          {/* Image 3 - Bottom right */}
          <div className="relative aspect-square sm:aspect-[4/5] lg:aspect-square rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg sm:shadow-xl order-4 lg:order-3">
            <Image
              src="/about-landing-3.png"
              alt="Collaborative workplace meeting scene"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
            />
          </div>

          {/* Image 4 - Taller middle-right */}
          <div className="relative aspect-[3/4] sm:aspect-[4/6] lg:aspect-[4/6] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg sm:shadow-xl lg:mb-6 xl:mb-15 order-3 lg:order-4">
            <Image
              src="/about-landing-4.png"
              alt="Dynamic business team collaboration"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
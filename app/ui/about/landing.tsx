// AboutLandingSection.jsx
import Image from "next/image";

export default function AboutLandingSection() {
  return (
    <section className="bg-gray-50 pt-40 pb-30">
      <div className="max-w-7xl mx-auto px-4">
        {/* Text Content - Left Side */}
        <div className="max-w-2xl mb-16">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 leading-tight mb-8">
            Building Bridges to <span className="block">Brighter Futures</span>
          </h1>

          <p className="text-xl text-gray-600 leading-relaxed">
            Our Vision is to transform workplaces by prioritizing the human
            element in the hiring process.
          </p>
        </div>

        {/* Image Collage */}
        <div className="flex justify-between items-end">
          {/* Bottom left - Woman in teal top with presentation in background */}
          <div className="w-70 h-70 relative rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/about-landing-1.png"
              alt="Woman in business meeting with presentation"
              fill
              className="object-cover"
            />
          </div>

          <div className="w-80 h-96 relative rounded-3xl overflow-hidden shadow-xl mb-10">
            <Image
              src="/about-landing-2.png"
              alt="Woman in business meeting with presentation"
              fill
              className="object-cover"
            />
          </div>

          <div className="w-70 h-70 relative rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/about-landing-3.png"
              alt="Woman in business meeting with presentation"
              fill
              className="object-cover"
            />
          </div>

          <div className="w-80 h-96 relative rounded-3xl overflow-hidden shadow-xl mb-15">
            <Image
              src="/about-landing-4.png"
              alt="Woman in business meeting with presentation"
              fill
              className="object-cover"
            />
          </div>

          {/* Spacer div to maintain layout height */}
          {/* <div className="h-96 w-full"></div> */}
        </div>
      </div>
    </section>
  );
}

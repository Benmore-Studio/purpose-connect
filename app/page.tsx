import Header from "./ui/header";
import HeroSection from "./ui/home/landing";
import BuiltFor from "./ui/home/built-for";
import FeaturesSection from "./ui/home/features";
import EventsSection from "./ui/home/events";
import HowItWorks from "./ui/home/how-it-works";
import TestimonialsSection from "./ui/home/testimonials";

export default function Landing() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />

      <BuiltFor />
      <FeaturesSection />
      <EventsSection />
      <HowItWorks />
      <TestimonialsSection />
    </div>
  );
}

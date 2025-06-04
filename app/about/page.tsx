import AboutHeroSection from "../ui/about/landing";
import OurMission from "../ui/about/our-mission";
import OurTeam from "../ui/about/team";
import OurValues from "../ui/about/values";
import WhatWeDo from "../ui/about/what-we-do";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <AboutHeroSection />
      <OurMission />
      <OurValues />
      <OurTeam />
      <WhatWeDo />
    </div>
  )
}

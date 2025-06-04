import HowItWorks from "../ui/students/how-it-works";
import Landing from "../ui/students/landing";
import WhatYouGet from "../ui/students/what-you-get";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Landing />
      <WhatYouGet />
      <HowItWorks />
    </div>
  )
}
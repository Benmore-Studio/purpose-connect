import Features from "../ui/lawyers/features"
import HowItWorks from "../ui/lawyers/how-it-works"
import Landing from "../ui/lawyers/landing"

export default function LawyerLanding() {
    return (
        <div className="min-h-screen bg-white">
            <Landing />
            <Features />
            <HowItWorks />
        </div>
    )
}
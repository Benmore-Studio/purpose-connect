import Landing from "../ui/lawyers/landing"
import HowItWorks from "../ui/lawyers/how-it-works"
import LawyerFeatures from "../ui/lawyers/features"

export default function LawyerLanding() {
    return (
        <div className="min-h-screen bg-white">
            <Landing />
            <LawyerFeatures />
            <HowItWorks />
        </div>
    )
}
import EmployerFeaturesSection from "../ui/employers/features"
import HowItWorks from "../ui/employers/how-it-works"
import EmployerLanding from "../ui/employers/landing"

export default function Landing() {
    return (
        <div className="min-h-screen bg-white">
            <EmployerLanding />
            <EmployerFeaturesSection />
            <HowItWorks />
        </div>
    )
}
import Features from "../ui/school-admin/features"
import HowItWorks from "../ui/school-admin/how-it-works"
import Landing from "../ui/school-admin/landing"

export default function LawyerLanding() {
    return (
        <div className="min-h-screen bg-white">
            <Landing />
            <Features />
            <HowItWorks />
        </div>
    )
}
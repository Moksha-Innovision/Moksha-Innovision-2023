import LandingContactUS from "./LandingContactUS"
import LandingEvent from "./LandingEvent"
import LandingSponsers from "./LandingSponsers"
import Legacy from "./Legacy"

const LandingPage = () => {
    return (
        <div className="">
            <Legacy />
            <div className="flex justify-center">
                <LandingEvent />
            </div>
            <LandingSponsers />
            <div className="">
                <LandingContactUS />
            </div>
        </div>
    )
}

export default LandingPage
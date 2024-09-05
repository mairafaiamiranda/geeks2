// import node module libraries
import { Fragment } from 'react'

// import sub components
import ExploreMentors from 'sub-components/landings/mentor/ExploreMentors'
import HeroTypedMentors from 'sub-components/landings/mentor/HeroTypedMentors'
import FREETrialSession from 'sub-components/landings/mentor/FREETrialSession'
import EasySteps from 'sub-components/landings/mentor/EasySteps'
import TestimonialsByMentees from 'sub-components/landings/mentor/TestimonialsByMentees'

// import widget/custom components
import { LogosTopBrands } from 'widgets'
import CTAMentor from 'widgets/call-to-action/CTAMentor'

// import required data files
import BrandLogoList from 'data/clientlogos/BrandLogoList'

// import layouts
import NavbarMentorPages from 'layouts/marketing/navbars/NavbarMentorPages';
import FooterDark from 'layouts/marketing/footers/FooterDark'

// import your layout to override default layout 
import BlankLayout from 'layouts/marketing/BlankLayout';


const Mentor = () => {
    return (
        <Fragment>

            {/*   Landing Page Navbar */}
            <NavbarMentorPages center />

            {/*   section  */}
            <main>

                {/* Hero section */}
                <HeroTypedMentors />

                {/* Logo section */}
                <LogosTopBrands
                    title="Learn from founders/operators of top brands."
                    logos={BrandLogoList} />

                {/* Explore Mentors by Category */}
                <ExploreMentors />

                {/* FREE trial session */}
                <FREETrialSession />

                {/* Easy Steps */}
                <EasySteps />

                {/* Testimonials By Mentees */}
                <TestimonialsByMentees />

                {/* Call to action  */}
                <CTAMentor />

            </main>

            {/*   Footer with center alignment */}
            <FooterDark />

        </Fragment>
    )
}

Mentor.Layout = BlankLayout;

export default Mentor
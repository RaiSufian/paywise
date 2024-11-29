import Hero from "./hero";
import WelcomeNote from "./welcomeNote";
import WhatWeDo from "./whatWeDo";
import Services from "./services";
import WhyUs from "./whyUs";
import ContactUs from "./contactUs";


const Home = () => {
    return (

        <div className=" ">
           
            <Hero />
            <WelcomeNote />
            <WhatWeDo />
            <Services />
            <WhyUs />
            <ContactUs />
           
        </div>
    )
}
export default Home;
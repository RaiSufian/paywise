import Topbar from "../../components/topbar";
import Header from "../../components/header";
import Hero from "./hero";
import WelcomeNote from "./welcomeNote";
import WhatWeDo from "./whatWeDo";
import Services from "./services";
import WhyUs from "./whyUs";
import ContactUs from "./contactUs";
import Footer from "../../components/footer";
import Hero2 from "./hero2";

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
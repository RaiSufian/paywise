import Topbar from "../../components/topbar";
import Header from "../../components/header";
import Hero from "./hero";
import WelcomeNote from "./welcomeNote";
import WhatWeDo from "./whatWeDo";
import Services from "./services";
import WhyUs from "./whyUs";
import ContactUs from "./contactUs";
import Footer from "../../components/footer";

const Home = () => {
    return (

        <div className=" ">
            <Topbar />
             <Header />
           < Hero />
            <WelcomeNote />
            <WhatWeDo />
            <Services />
            <WhyUs />
            <ContactUs />
            <Footer/>
        </div>
    )
}
export default Home;
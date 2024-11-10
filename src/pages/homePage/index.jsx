import Topbar from "../../components/topbar";
import Header from "../../components/header";
import Hero from "./hero";
import WelcomeNote from "./welcomeNote";
import WhatWeDo from "./whatWeDo";
import Services from "./services";
import WhyUs from "./whyUs";
const Home = () =>{
    return (

        <>
        <Topbar/>
        <Header/>
        < Hero />
        <WelcomeNote/>
        <WhatWeDo/>
        <Services/>
        <WhyUs/>
       
        </>
    )
}
export default Home;
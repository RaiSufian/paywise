import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/homePage';
import SignUp from './pages/signUp';
import ContactUs from './pages/contactUs';
import 'aos/dist/aos.css';
import AOS from 'aos';
import './App.css';
import AboutUs from './pages/aboutUs';
import OurServices from './pages/ourServices';
import { useLocation } from "react-router-dom";
import Faqs from './pages/faqs';
import axios from "axios";
import Topbar from './components/topbar';
import Header from './components/header';
import Footer from './components/footer';
function App() {

  // Get data about paywize website
  const [detail, setDetail] = useState(null);
  const getDetails = async () => {
    await axios.get("index.php?action=get_site_config")
      .then((resp) => {
        setDetail(resp.data.data[0]);
         console.log("our data is", resp);

      })
      .catch((error) => {
        console.log("get site data error is:", error);
      })
  }

  useEffect(() => {
    getDetails();
    AOS.init();
  }, [])

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  return (
    <>
      <Topbar detail={detail}/>
      <Header detail={detail}/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/our-services" element={<OurServices />} />
        <Route path="/faqs" element={<Faqs />} />
      </Routes>
      <Footer detail={detail} />
    </>



  )
}

export default App

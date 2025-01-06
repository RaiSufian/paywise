import { useEffect, useState, useSyncExternalStore } from 'react';
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
import loadJSON from './assets/lottie/mainloader.json';
import Lottie from 'react-lottie';
function App() {

  // Get data about paywize website
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const getDetails = async () => {
    await axios.get("index.php?action=get_site_config")
      .then((resp) => {
        //  console.log("this is site data", resp.data);
        setDetail(resp.data.data[0]);
        setLoading(false);

      })
      .catch((error) => {
        console.log("get site data error is:", error);
      })
  }


  const [socialLinks, setSocialLinks] = useState([]);
  const getSocialLink = async () =>{
    await axios.get('index.php?action=get_social_links')
    .then((resp)=>{
        // console.log("get data", resp.data.data);
        setSocialLinks(resp.data.data);
    })
    .catch((error)=>{
     console.log("this is social Link eror", error);
    })
  }

  // main loader 
  const loader = {
    loop: true,
    autoplay: true,
    animationData: loadJSON ,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  useEffect(() => {
    getSocialLink();
    getDetails();
    AOS.init();
  }, [])

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  return (
    <>
      {
        loading ?
          <div className="w-full min-h-screen flex justify-center items-center">
            <Lottie options={loader} style={{ width: '100px', height: '100px' }} />
          </div>
          :
          <>
            <Topbar detail={detail} links={socialLinks} />
            <Header detail={detail} />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path="/contactus" element={<ContactUs detail={detail} />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/our-services" element={<OurServices />} />
              <Route path="/faqs" element={<Faqs />} />
            </Routes>
            <Footer detail={detail}  links={socialLinks}/>
          </>
      }
    </>



  )
}

export default App

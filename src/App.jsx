import { useEffect } from 'react';
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
function App() {


  // AOS animation 
  useEffect(() => {
    AOS.init();
  }, [])
  // scroll page start
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/our-services" element={<OurServices />} />
      </Routes>

    </Router>

  )
}

export default App

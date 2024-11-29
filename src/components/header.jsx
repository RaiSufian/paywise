import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Header = ({detail}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const location = useLocation();
    // console.log("this is the location", location.pathname);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    return (
        <>
            <div className={`bg-white sticky top-0 z-50 transition-all duration-200 ${isSticky ? 'bg-opacity-90 rounded-full scale-90' : ''}`}>
                <div className={`lg:container  flex mx-auto py-3 justify-between items-center px-3 md:px-2 lg:px-6 ${isSticky ? '' : ''}`}>
                    <Link to="/" className="lg:mr-4">
                        <img src={detail?.config_logo} alt="logo" className="w-24 lg:w-36" />
                    </Link>
                    <div className="main_menu md:block hidden">
                        <ul className="flex items-center gap-5 lg:gap-12 font-semibold font-sans">
                            <li className={` relative group py-2 ${location.pathname == "/" ? "text-blue-700" : ""}`}>
                                <Link to="/">HOME</Link>
                                <span class="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-700 transition-all duration-300 group-hover:w-full"></span>

                            </li>
                            <li className={` relative group py-2 ${location.pathname == "/about-us" ? "text-blue-700" : ""}`}>
                                <Link to="/about-us">ABOUT US</Link>
                                <span class="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
                            </li>
                            <li className={`hover:text-blue-500 relative group py-2 ${location.pathname == "/faqs" ? "text-blue-700" : ""}`}>
                                <Link to="/faqs">FAQs</Link>
                                <span class="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
                            </li>
                            <li className={`hover:text-blue-500 relative group py-2 ${location.pathname == "/our-services" ? "text-blue-700" : ""}`}>
                                <div className="flex gap-1 items-center">

                                    <Link to="/our-services">OUR SERVICES</Link>
                                    <svg className="text-gray-400" xmlns="http://www.w3.org/2000/svg" width="1.25em" height="0.75em" viewBox="0 0 16 7"><path fill="currentColor" d="M8 6.5a.47.47 0 0 1-.35-.15l-4.5-4.5c-.2-.2-.2-.51 0-.71s.51-.2.71 0l4.15 4.15l4.14-4.14c.2-.2.51-.2.71 0s.2.51 0 .71l-4.5 4.5c-.1.1-.23.15-.35.15Z" /></svg>
                                </div>

                                <span class="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
                            </li>
                            <li className={` relative group py-2 ${location.pathname == "/contactus" ? "text-blue-700" : ""}`}>
                                <Link to="/contactus">CONTACT US</Link>
                                <span class="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <Link to="/signup" className="text-white md:block hidden rounded-full py-2 lg:py-3 px-6 lg:px-10 btn_grad">
                            Sign Up
                        </Link>

                    </div>
                    <div className="md:hidden">
                        <svg onClick={() => setIsOpen(true)} xmlns="http://www.w3.org/2000/svg" width="2.25em" height="2.25em" viewBox="0 0 24 24"><path fill="currentColor" d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1m0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1M3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1" /></svg>
                    </div>
                </div>

            </div>
            <div
                className={`md:hidden fixed z-50 bg-white p-10 transition-all duration-300 ${isOpen ? 'translate-x-0 opacity-100 top-0 left-0 h-screen w-screen' : 'translate-x-full opacity-0 w-0'
                    }`}>
                <div >
                    <svg onClick={() => setIsOpen(false)} className="ml-auto" xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m8 8l32 32M8 40L40 8" /></svg>
                </div>
                <ul className="mt-2 p-5">
                    <li className="py-3 font-medium text-gray-500 border-b">
                        <Link onClick={() => setIsOpen(false)} to="/">
                            Home
                        </Link>
                    </li>
                    <li className="py-3 font-medium text-gray-500 border-b">
                        <Link onClick={() => setIsOpen(false)} to="/about-us">
                            About Us
                        </Link>
                    </li>
                    <li className="py-3 font-medium text-gray-500 border-b">
                        <Link to="/faqs" onClick={() => setIsOpen(false)} >
                            FAQs
                        </Link>
                    </li>
                    <li className="py-3 font-medium text-gray-500 border-b flex justify-between items-center">
                        <Link to="/our-services" onClick={() => setIsOpen(false)}>
                            OUR SERVICES
                        </Link>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.75em" height="1em" viewBox="0 0 16 7"><path fill="currentColor" d="M8 6.5a.47.47 0 0 1-.35-.15l-4.5-4.5c-.2-.2-.2-.51 0-.71s.51-.2.71 0l4.15 4.15l4.14-4.14c.2-.2.51-.2.71 0s.2.51 0 .71l-4.5 4.5c-.1.1-.23.15-.35.15Z" /></svg>
                        </span>
                    </li>

                   
                    <li className="py-3 font-medium text-gray-500 border-b">
                        <Link onClick={() => setIsOpen(false)} to="/contactus">
                            Contact Us
                        </Link>
                    </li>

                    <li className="py-3">
                        <Link onClick={() => setIsOpen(false)} to="/signup" className="bg-blue-500 rounded-3xl text-center w-full h-10 font-medium text-white pt-2 pb-3 block">
                            Sign Up
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}
export default Header;
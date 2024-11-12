import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);


    return (
        <div className="bg-white">
            <div className="lg:container  flex mx-auto py-3 justify-between items-center px-3 md:px-2 lg:px-6">
                <Link to="/" className="lg:mr-4">
                    <img src='/logo.png' alt="logo" className="w-24 lg:w-36" />
                </Link>
                <div className="main_menu md:block hidden">
                    <ul className="flex items-center gap-5 lg:gap-12 font-semibold font-sans">
                        <li className="text-blue-700 relative group py-2">
                            <Link to="/">HOME</Link>
                            <span class="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-700 transition-all duration-300 group-hover:w-full"></span>

                        </li>
                        <li className="hover:text-blue-500 relative group py-2">
                            <Link to="/">ABOUT US</Link>
                            <span class="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
                        </li>
                        <li className="hover:text-blue-500 relative group py-2">
                            <Link to="/">FAQs</Link>
                            <span class="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
                        </li>
                        <li className="hover:text-blue-500 relative group py-2">
                            <div className="flex gap-1 items-center">

                                <Link to="/">OUR SERVICES</Link>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.75em" height="1em" viewBox="0 0 16 7"><path fill="currentColor" d="M8 6.5a.47.47 0 0 1-.35-.15l-4.5-4.5c-.2-.2-.2-.51 0-.71s.51-.2.71 0l4.15 4.15l4.14-4.14c.2-.2.51-.2.71 0s.2.51 0 .71l-4.5 4.5c-.1.1-.23.15-.35.15Z" /></svg>
                            </div>

                            <span class="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
                        </li>
                        <li className="hover:text-blue-500 relative group py-2">
                            <Link to="/">CONTACT US</Link>
                            <span class="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
                        </li>
                    </ul>
                </div>
                <div>
                    <button className="text-white md:block hidden rounded-full py-2 lg:py-3 px-6 lg:px-10 btn_grad">
                        Sign Up
                    </button>
                </div>
                <div className="md:hidden">
                    <svg onClick={() => setIsOpen(true)} xmlns="http://www.w3.org/2000/svg" width="2.25em" height="2.25em" viewBox="0 0 24 24"><path fill="currentColor" d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1m0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1M3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1" /></svg>
                </div>
            </div>
            <div
              className={`md:hidden absolute z-50 bg-white p-10 transition-all duration-300 top-0 bottom-0 ${isOpen ? 'translate-x-0 opacity-100 w-full left-0' : 'translate-x-full opacity-0 w-0'
                    }`}>
                <div >
                    <svg onClick={() => setIsOpen(false)} className="ml-auto" xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m8 8l32 32M8 40L40 8" /></svg>
                </div>
                <ul className="mt-2 p-5">
                    <li className="py-3 font-medium text-gray-500 border-b">
                        <Link>
                            Home
                        </Link>
                    </li>
                    <li className="py-3 font-medium text-gray-500 border-b">
                        <Link>
                            FAQs
                        </Link>
                    </li>
                    <li className="py-3 font-medium text-gray-500 border-b flex justify-between items-center">
                        <Link>
                            OUR SERVICES
                        </Link>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.75em" height="1em" viewBox="0 0 16 7"><path fill="currentColor" d="M8 6.5a.47.47 0 0 1-.35-.15l-4.5-4.5c-.2-.2-.2-.51 0-.71s.51-.2.71 0l4.15 4.15l4.14-4.14c.2-.2.51-.2.71 0s.2.51 0 .71l-4.5 4.5c-.1.1-.23.15-.35.15Z" /></svg>
                        </span>
                    </li>
                    <li className="py-3 font-medium text-gray-500 border-b">
                        <Link>
                            About Us
                        </Link>
                    </li>
                    <li className="py-3 font-medium text-gray-500 border-b">
                        <Link>
                            About Us
                        </Link>
                    </li>
                    <li className="py-3 font-medium text-gray-500 border-b">
                        <Link>
                            Contact Us
                        </Link>
                    </li>

                    <li className="py-3">
                        <Link className="bg-blue-500 rounded-3xl text-center w-full h-10 font-medium text-white pt-2 pb-3 block">
                            Sign Up
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Header;
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div className="bg-white ">
            <div className="container  flex mx-auto py-3 justify-between items-center px-6">
                <Link to="/" className="mr-4">
                    <img src='/logo.png' alt="logo" width={150} />
                </Link>
                <div className="main_menu">
                    <ul className="flex items-center gap-12 font-semibold font-sans">
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
                            <Link to="/">OUR SERVICES</Link>
                            <span class="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
                        </li>
                        <li className="hover:text-blue-500 relative group py-2">
                            <Link to="/">CONTACT US</Link>
                            <span class="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
                        </li>
                    </ul>
                </div>
                <div>
                    <button className="border-blue-500 bg-blue-500 text-white font-semibold py-2 px-4 rounded transition duration-300 ease-in-out hover:bg-white hover:text-blue-500 border hover:scale-105">
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Header;
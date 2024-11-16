import Topbar from "../../components/topbar";
import Header from "../../components/header";
import BreadCrumb from "../../components/breadcrumb";
import Footer from "../../components/footer";
import { Link } from "react-router-dom";
import Lottie from 'react-lottie';
import aboutUs from "../../assets/lottie/aboutAnimate.json";
import handShake from "../../assets/lottie/handShake.json";

const AboutUs = () => {

    const aboutanimate = {
        loop: true,
        autoplay: true,
        animationData: aboutUs,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    const handshakeAnimate = {
        loop: true,
        autoplay: true,
        animationData: handShake,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };
    return (
        <>
            <Topbar />
            <Header />
            <BreadCrumb name="About Us" link="about-us" />
            <div className="container mx-auto  px-2 md:px-6">
                <div className="lg:flex pt-10 md:pt-20 items-center">
                    <div className="lg:w-1/2 md:pr-12">
                        <h1 className="text-blue-600 flex gap-2 items-center uppercase tracking-wider text-lg font-semibold">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><g fill="none"><g fill="currentColor" clip-path="url(#grommetIconsGooglePay0)"><path d="m12.645 14.34l5.937-10.285l3.234 1.867a4.366 4.366 0 0 1 1.598 5.964l-3.344 5.791a2.73 2.73 0 0 1-3.728 1l-3.002-1.732a1.91 1.91 0 0 1-.695-2.606Z" /><path d="M12.012 7.2L4.625 19.991l3.235 1.867a4.367 4.367 0 0 0 5.964-1.598l4.791-8.298a2.73 2.73 0 0 0-1-3.729l-3.002-1.732a1.903 1.903 0 0 0-2.601.697Z" /><path d="m18.582 4.053l-2.29-1.32A5.456 5.456 0 0 0 8.839 4.73l-4.246 7.352a2.73 2.73 0 0 0 1 3.728l2.289 1.32a2.73 2.73 0 0 0 3.728-1l5.069-8.779a3.81 3.81 0 0 1 5.206-1.394z" /><path d="M9.496 6.885L6.971 5.43a2.357 2.357 0 0 0-3.215.86L.725 11.524a5.383 5.383 0 0 0 1.977 7.363l1.923 1.108l2.332 1.343l1.012.582a4.14 4.14 0 0 1-1.27-5.51l.786-1.355l2.872-4.964a2.343 2.343 0 0 0-.86-3.207Z" /></g><defs><clipPath id="grommetIconsGooglePay0"><path fill="#fff" d="M0 0h24v24H0z" /></clipPath></defs></g></svg>
                            About Us
                        </h1>

                        <h2 className="py-2 md:py-4 font-bold text-2xl md:text-4xl text-stone-900">Paywise Umbrella</h2>
                        <p className="text-xl leading-loose md:pt-2">
                            At Smart Cash Umbrella, we understand that managing invoicing, payroll, administration, and tax payments can be a daunting task for contractors. That's why we have developed the most comprehensive umbrella service in the industry, with the help of our team of specialists, to make your life easier and stress-free.
                            <br />
                            Whether you are a first-time contractor, a short-term contractor, or simply prefer not to run your own limited company, you can trust us to take care of all your contracting needs. Contact us now and discover why choosing Smart Cash Umbrella will be the best business decision you make this year.
                        </p>
                    </div>
                    <div className="lg:w-1/2 md:p-4 lg:p-8">
                        <div>
                            <Lottie options={aboutanimate} style={{ width: '100%', height: '100%' }} />
                        </div>
                    </div>
                </div>
                <div className="py-5 ">
                    <h3 className="text-blue-600  justify-center flex gap-2 items-center uppercase tracking-wider md:text-lg font-semibold">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><g fill="none"><g fill="currentColor" clip-path="url(#grommetIconsGooglePay0)"><path d="m12.645 14.34l5.937-10.285l3.234 1.867a4.366 4.366 0 0 1 1.598 5.964l-3.344 5.791a2.73 2.73 0 0 1-3.728 1l-3.002-1.732a1.91 1.91 0 0 1-.695-2.606Z" /><path d="M12.012 7.2L4.625 19.991l3.235 1.867a4.367 4.367 0 0 0 5.964-1.598l4.791-8.298a2.73 2.73 0 0 0-1-3.729l-3.002-1.732a1.903 1.903 0 0 0-2.601.697Z" /><path d="m18.582 4.053l-2.29-1.32A5.456 5.456 0 0 0 8.839 4.73l-4.246 7.352a2.73 2.73 0 0 0 1 3.728l2.289 1.32a2.73 2.73 0 0 0 3.728-1l5.069-8.779a3.81 3.81 0 0 1 5.206-1.394z" /><path d="M9.496 6.885L6.971 5.43a2.357 2.357 0 0 0-3.215.86L.725 11.524a5.383 5.383 0 0 0 1.977 7.363l1.923 1.108l2.332 1.343l1.012.582a4.14 4.14 0 0 1-1.27-5.51l.786-1.355l2.872-4.964a2.343 2.343 0 0 0-.86-3.207Z" /></g><defs><clipPath id="grommetIconsGooglePay0"><path fill="#fff" d="M0 0h24v24H0z" /></clipPath></defs></g></svg>
                        PROFESSIONAL TEAM</h3>
                    <h2 className="text-center text-2xl md:text-4xl py-2 font-bold text-stone-900">Our Primary Services
                    </h2>
                    <div className="flex flex-wrap gap-4 py-8 justify-center">
                        <div className="w-3/4 md:w-1/2 lg:w-1/4 bg-[#F1F6FC] gap-3 flex items-center flex-1 p-6">
                            <svg xmlns="http://www.w3.org/2000/svg" className="p-1 text-blue-500" width="4rem" height="4rem" viewBox="0 0 32 32"><path fill="currentColor" d="M27 29H13c-1.1 0-2-.9-2-2v-4h2v4h14V13h-4v-2h4c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2" /><path fill="currentColor" d="M11 19h10v2H11zm0-4h10v2H11zm0-4h10v2H11z" /><path fill="currentColor" d="M5 3h14c1.1 0 2 .9 2 2v4h-2V5H5v14h4v2H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2" /></svg>
                            <Link to="/" className=" text-xl md:text-2xl hover:text-blue-500 font-bold pl-2 text-stone-950">Dedicated Contractor PA</Link>
                        </div>
                        <div className="w-3/4 md:w-1/2 lg:w-1/4 bg-[#F1F6FC] gap-3 flex items-center flex-1 p-6">
                            <svg xmlns="http://www.w3.org/2000/svg" className="p-1 text-blue-500" width="4rem" height="4rem" viewBox="0 0 24 24"><path fill="currentColor" d="M16 11.5a2.5 2.5 0 0 1 5 0a2.5 2.5 0 0 1-5 0M13 3v17h11V3zm9 13c-1.1 0-2 .9-2 2h-3a2 2 0 0 0-2-2V7c1.11 0 2-.89 2-2h3a2 2 0 0 0 2 2zM7 6c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m0-2C4.79 4 3 5.79 3 8s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4m0 10c-3.87 0-7 1.79-7 4v2h11v-2H2c0-.58 1.75-2 5-2c1.83 0 3.17.45 4 .95v-2.23C9.87 14.27 8.5 14 7 14" /></svg>
                            <Link to="/" className=" text-xl md:text-2xl hover:text-blue-500 font-bold pl-2 text-stone-950">Payroll</Link>
                        </div>
                        <div className="w-3/4 md:w-1/2 lg:w-1/4 bg-[#F1F6FC] gap-3 flex items-center flex-1 p-6">
                            <svg xmlns="http://www.w3.org/2000/svg" className="p-1 text-blue-500" width="4em" height="4em" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M10.944 1.25h2.112c1.838 0 3.294 0 4.433.153c1.172.158 2.121.49 2.87 1.238a.75.75 0 0 1-1.06 1.06c-.424-.422-1.004-.676-2.01-.811c-1.027-.138-2.382-.14-4.289-.14h-2c-1.907 0-3.261.002-4.29.14c-1.005.135-1.585.389-2.008.812S4.025 4.705 3.89 5.71c-.138 1.029-.14 2.383-.14 4.29v4c0 1.907.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h2c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812c.696-.696.907-1.777.943-4.309a.75.75 0 0 1 1.5.022c-.035 2.427-.192 4.158-1.382 5.348c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153h-2.112c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433V9.944c0-1.838 0-3.294.153-4.433c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238c1.14-.153 2.595-.153 4.433-.153m7.17 5.796a2.716 2.716 0 1 1 3.84 3.84L17.2 15.643a7 7 0 0 1-.63.587q-.346.27-.744.46c-.224.107-.46.185-.806.3l-2.084.695a1.28 1.28 0 0 1-1.62-1.62l.681-2.04l.014-.043c.116-.347.194-.582.301-.806a4 4 0 0 1 .46-.744c.153-.196.328-.371.587-.63l.031-.031zm2.78 1.06a1.216 1.216 0 0 0-1.72 0l-.182.182l.034.107c.094.27.273.63.611.968a2.55 2.55 0 0 0 1.075.645l.182-.182a1.216 1.216 0 0 0 0-1.72m-1.328 3.048a4 4 0 0 1-.99-.73a4 4 0 0 1-.73-.99L14.45 12.83c-.301.301-.407.409-.496.523q-.17.218-.289.467c-.062.131-.111.274-.246.678l-.4 1.2l.283.283l1.2-.4c.404-.135.547-.184.678-.246q.248-.12.467-.289c.114-.089.222-.195.523-.496zM7.25 9A.75.75 0 0 1 8 8.25h6.5a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 9m0 4a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75" clip-rule="evenodd" /></svg>
                            <Link to="/" className=" text-xl md:text-2xl hover:text-blue-500 font-bold pl-2 text-stone-950">100% Compliant</Link>
                        </div>
                        <div className="w-3/4 md:w-1/2 lg:w-1/4 bg-[#F1F6FC] gap-3 flex items-center flex-1 p-6">
                            <svg xmlns="http://www.w3.org/2000/svg" className="p-1 text-blue-500" width="4em" height="4em" viewBox="0 0 24 24"><path fill="currentColor" d="M21.8 15c.6 0 1.2.6 1.2 1.3v3.5c0 .6-.6 1.2-1.3 1.2h-5.5c-.6 0-1.2-.6-1.2-1.3v-3.5c0-.6.6-1.2 1.2-1.2v-1.5c0-1.4 1.4-2.5 2.8-2.5s2.8 1.1 2.8 2.5zm-1.3 0v-1.5c0-.8-.7-1.3-1.5-1.3s-1.5.5-1.5 1.3V15zM2 6h18v3.1L19 9c-.82 0-1.59.2-2.27.54C16.28 9.18 16 8.62 16 8H6c0 1.11-.89 2-2 2v4a2 2 0 0 1 2 2h7.04l-.04.5V18H2zm9 3c1.66 0 3 1.34 3 3s-1.34 3-3 3s-3-1.34-3-3s1.34-3 3-3" /></svg>
                            <Link to="/" className=" text-xl md:text-2xl hover:text-blue-500 font-bold pl-2 text-stone-950">Fixed Price Structure</Link>
                        </div>
                    </div>
                </div>

            </div>
            <div className="bg-blue-50 relative pt-8 md:pt-12 lg:pt-24">
                <svg
                    className="absolute top-0"
                    id="wave"
                    style={{ transform: 'rotate(180deg)', transition: '0.3s' }}
                    viewBox="0 0 1440 180"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
                            <stop stopColor="rgba(255, 255, 255, 1)" offset="0%" />
                            <stop stopColor="rgba(255, 255, 255, 1)" offset="100%" />
                        </linearGradient>
                    </defs>
                    <path
                        style={{ transform: 'translate(0, 0px)', opacity: 1 }}
                        fill="url(#sw-gradient-0)"
                        d="M0,90L30,75C60,60,120,30,180,15C240,0,300,0,360,15C420,30,480,60,540,78C600,96,660,102,720,108C780,114,840,120,900,108C960,96,1020,66,1080,51C1140,36,1200,36,1260,36C1320,36,1380,36,1440,36C1500,36,1560,36,1620,42C1680,48,1740,60,1800,78C1860,96,1920,120,1980,135C2040,150,2100,156,2160,150C2220,144,2280,126,2340,117C2400,108,2460,108,2520,111C2580,114,2640,120,2700,123C2760,126,2820,126,2880,105C2940,84,3000,42,3060,21C3120,0,3180,0,3240,0C3300,0,3360,0,3420,24C3480,48,3540,96,3600,96C3660,96,3720,48,3780,33C3840,18,3900,36,3960,39C4020,42,4080,30,4140,27C4200,24,4260,30,4290,33L4320,36L4320,180L4290,180C4260,180,4200,180,4140,180C4080,180,4020,180,3960,180C3900,180,3840,180,3780,180C3720,180,3660,180,3600,180C3540,180,3480,180,3420,180C3360,180,3300,180,3240,180C3180,180,3120,180,3060,180C3000,180,2940,180,2880,180C2820,180,2760,180,2700,180C2640,180,2580,180,2520,180C2460,180,2400,180,2340,180C2280,180,2220,180,2160,180C2100,180,2040,180,1980,180C1920,180,1860,180,1800,180C1740,180,1680,180,1620,180C1560,180,1500,180,1440,180C1380,180,1320,180,1260,180C1200,180,1140,180,1080,180C1020,180,960,180,900,180C840,180,780,180,720,180C660,180,600,180,540,180C480,180,420,180,360,180C300,180,240,180,180,180C120,180,60,180,30,180L0,180Z"
                    ></path>
                </svg>
                <div className="container mx-auto px-6 py-10 lg:py-20">
                    <div className="lg:flex gap-10 items-center">
                        <div className="lg:w-1/2 md:p-5 lg:p-8">
                            <div className="">
                                <Lottie options={handshakeAnimate} style={{ width: '100%', height: '100%' }} />
                            </div>
                        </div>
                        <div className="lg:w-1/2 md:pr-12 lg:pr-16">
                            <h3 className="text-blue-600 flex gap-2 items-center uppercase tracking-wider  md:text-lg font-semibold">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><g fill="none"><g fill="currentColor" clip-path="url(#grommetIconsGooglePay0)"><path d="m12.645 14.34l5.937-10.285l3.234 1.867a4.366 4.366 0 0 1 1.598 5.964l-3.344 5.791a2.73 2.73 0 0 1-3.728 1l-3.002-1.732a1.91 1.91 0 0 1-.695-2.606Z" /><path d="M12.012 7.2L4.625 19.991l3.235 1.867a4.367 4.367 0 0 0 5.964-1.598l4.791-8.298a2.73 2.73 0 0 0-1-3.729l-3.002-1.732a1.903 1.903 0 0 0-2.601.697Z" /><path d="m18.582 4.053l-2.29-1.32A5.456 5.456 0 0 0 8.839 4.73l-4.246 7.352a2.73 2.73 0 0 0 1 3.728l2.289 1.32a2.73 2.73 0 0 0 3.728-1l5.069-8.779a3.81 3.81 0 0 1 5.206-1.394z" /><path d="M9.496 6.885L6.971 5.43a2.357 2.357 0 0 0-3.215.86L.725 11.524a5.383 5.383 0 0 0 1.977 7.363l1.923 1.108l2.332 1.343l1.012.582a4.14 4.14 0 0 1-1.27-5.51l.786-1.355l2.872-4.964a2.343 2.343 0 0 0-.86-3.207Z" /></g><defs><clipPath id="grommetIconsGooglePay0"><path fill="#fff" d="M0 0h24v24H0z" /></clipPath></defs></g></svg>
                                What makes us the preferred choice?</h3>

                            <h2 className=" text-2xl md:text-4xl font-bold text-stone-900 py-2">
                                Why do recruitment agencies and contractors prefer working with us?
                            </h2>
                            <p className="md:text-xl leading-loose pt-2">
                                With over a decade of hands-on experience, our team of industry professionals is dedicated to delivering transparent, straightforward, and fully compliant contracting solutions. We provide personalized advice and support tailored to your needs, whenever you require it.

                                Our streamlined yet comprehensive payroll service, paired with an array of outstanding benefits, lets you concentrate on growing your business.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

        </>
    )
}
export default AboutUs;
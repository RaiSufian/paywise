import BreadCrumb from "../../components/breadcrumb";
import { Link } from "react-router-dom";
import Lottie from 'react-lottie';
import aboutUs from "../../assets/lottie/aboutAnimate.json";
import axios from "axios";
import { useState, useEffect } from "react";
import MakeUs from "./whatMakesUS";
import ImagePlace from "../../assets/lottie/imagePlace.json";

const AboutUs = () => {

    const [data, setData] = useState(null);

    // Get API data 
    const getData = async () => {
        await axios.get("index.php?action=get_page_widgets&wid_params=about_us")
            .then((resp) => {
                // console.log("this is why us response", resp);
                if (resp.status) {
                    setData(resp.data.data[0]);
                    setLoading(false);
                }
            })
            .catch((error) => {
                console.log("this is why us ", error);
            })
    };
    const [loading, setLoading] = useState(true);
    const slider = {
        loop: true,
        autoplay: true,
        animationData: ImagePlace,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };
    const aboutanimate = {
        loop: true,
        autoplay: true,
        animationData: aboutUs,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    useEffect(() => {
        getData();
    }, [])

    return (
        <>
            <BreadCrumb name="About Us" link="about-us" />
            <div className="container mx-auto  px-2 md:px-6">
                <div className="lg:flex pt-10 md:pt-20 items-center">
                    <div className="lg:w-1/2 md:pr-12">

                        {
                            loading ?
                                <div className="h-[80vh] overflow-hidden">
                                    <Lottie options={slider} style={{ width: '100%', height: '100%' }} />
                                </div>
                                :

                                <>

                                    <h1 className="text-blue-600 flex gap-2 items-center uppercase tracking-wider text-lg font-semibold">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><g fill="none"><g fill="currentColor" clip-path="url(#grommetIconsGooglePay0)"><path d="m12.645 14.34l5.937-10.285l3.234 1.867a4.366 4.366 0 0 1 1.598 5.964l-3.344 5.791a2.73 2.73 0 0 1-3.728 1l-3.002-1.732a1.91 1.91 0 0 1-.695-2.606Z" /><path d="M12.012 7.2L4.625 19.991l3.235 1.867a4.367 4.367 0 0 0 5.964-1.598l4.791-8.298a2.73 2.73 0 0 0-1-3.729l-3.002-1.732a1.903 1.903 0 0 0-2.601.697Z" /><path d="m18.582 4.053l-2.29-1.32A5.456 5.456 0 0 0 8.839 4.73l-4.246 7.352a2.73 2.73 0 0 0 1 3.728l2.289 1.32a2.73 2.73 0 0 0 3.728-1l5.069-8.779a3.81 3.81 0 0 1 5.206-1.394z" /><path d="M9.496 6.885L6.971 5.43a2.357 2.357 0 0 0-3.215.86L.725 11.524a5.383 5.383 0 0 0 1.977 7.363l1.923 1.108l2.332 1.343l1.012.582a4.14 4.14 0 0 1-1.27-5.51l.786-1.355l2.872-4.964a2.343 2.343 0 0 0-.86-3.207Z" /></g><defs><clipPath id="grommetIconsGooglePay0"><path fill="#fff" d="M0 0h24v24H0z" /></clipPath></defs></g></svg>
                                        About Us
                                    </h1>

                                    <h2 className="py-2 md:py-4 font-bold text-2xl md:text-4xl text-stone-900">
                                        {data.wid_heading}
                                        </h2>
                                    <p className="text-xl leading-loose md:pt-2">
                                        <div dangerouslySetInnerHTML={{ __html: data?.wid_details }}></div>
                                    </p>
                                </>

                        }
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

            <MakeUs />
        </>
    )
}
export default AboutUs;
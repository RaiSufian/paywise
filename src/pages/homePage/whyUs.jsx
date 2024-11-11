import img from "../../assets/whyus.jpg";

const WhyUs = () => {
    return (
        <section className="bg-blue-50 relative py-20">
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
            <svg
                className="absolute bottom-0"
                id="wave"
                style={{ transform: 'rotate(0deg)', transition: '0.3s' }}
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
            <div className="container mx-auto px-6 py-20">
                <div className="">
                    <div className="w-3/5 mx-auto">
                        <h3 className="text-blue-600 justify-center flex gap-2 items-center uppercase tracking-wider text-lg font-semibold">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><g fill="none"><g fill="currentColor" clip-path="url(#grommetIconsGooglePay0)"><path d="m12.645 14.34l5.937-10.285l3.234 1.867a4.366 4.366 0 0 1 1.598 5.964l-3.344 5.791a2.73 2.73 0 0 1-3.728 1l-3.002-1.732a1.91 1.91 0 0 1-.695-2.606Z" /><path d="M12.012 7.2L4.625 19.991l3.235 1.867a4.367 4.367 0 0 0 5.964-1.598l4.791-8.298a2.73 2.73 0 0 0-1-3.729l-3.002-1.732a1.903 1.903 0 0 0-2.601.697Z" /><path d="m18.582 4.053l-2.29-1.32A5.456 5.456 0 0 0 8.839 4.73l-4.246 7.352a2.73 2.73 0 0 0 1 3.728l2.289 1.32a2.73 2.73 0 0 0 3.728-1l5.069-8.779a3.81 3.81 0 0 1 5.206-1.394z" /><path d="M9.496 6.885L6.971 5.43a2.357 2.357 0 0 0-3.215.86L.725 11.524a5.383 5.383 0 0 0 1.977 7.363l1.923 1.108l2.332 1.343l1.012.582a4.14 4.14 0 0 1-1.27-5.51l.786-1.355l2.872-4.964a2.343 2.343 0 0 0-.86-3.207Z" /></g><defs><clipPath id="grommetIconsGooglePay0"><path fill="#fff" d="M0 0h24v24H0z" /></clipPath></defs></g></svg>
                            why Choose Us
                        </h3>
                        <p className="font-serif text-center text-md pt-3">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere consequatur dolorem itaque illo dicta eligendi adipisci nihil, voluptatem ex repellat!
                        </p>
                    </div>
                    <div className="flex px-20 gap-5 items-center">
                        <div className="w-1/2 py-6">
                            <div className="m-10">
                                <img
                                    data-aos="fade-up"
                                    data-aos-easing="ease-out-cubic"
                                    data-aos-duration="1000"
                                    data-aos-delay="500"
                                    src={img} alt="why us img" className="w-full  object-cover h-96 rounded-lg" />
                            </div>
                        </div>
                        <div className="w-1/2 ">
                            <div className="flex p-5 gap-3" >
                                <span className="h-8 w-8 bg-blue-200  flex justify-center items-center rounded-full">1</span>
                                <div className="flex-1"
                                    data-aos="fade-left"
                                    data-aos-easing="ease-out-cubic"
                                    data-aos-duration="1000"
                                    data-aos-delay="1000">
                                    <h4 className="font-semibold text-lg">Easy Start</h4>
                                    <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque iste quisquam sint rem nulla nostrum eum eligendi possimus. Maiores expedita neque recusandae .</p>
                                </div>
                            </div>
                            <div className="flex p-5 gap-3">
                                <span className="h-8 w-8 bg-blue-200  flex justify-center items-center rounded-full">2</span>
                                <div className="flex-1"
                                    data-aos="fade-left"
                                    data-aos-easing="ease-out-cubic"
                                    data-aos-duration="1000"
                                    data-aos-delay="1500">
                                    <h4 className="font-semibold text-lg">Free Opinion</h4>
                                    <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque iste quisquam sint rem nulla nostrum eum eligendi possimus. Maiores expedita neque recusandae .</p>
                                </div>
                            </div>
                            <div className="flex p-5 gap-3">
                                <span className="h-8 w-8 bg-blue-200  flex justify-center items-center rounded-full">3</span>
                                <div className="flex-1"
                                    data-aos="fade-left"
                                    data-aos-easing="ease-out-cubic"
                                    data-aos-duration="1000"
                                    data-aos-delay="2000">
                                    <h4 className="font-semibold text-lg">Get Results</h4>
                                    <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque iste quisquam sint rem nulla nostrum eum eligendi possimus. Maiores expedita neque recusandae .</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyUs;
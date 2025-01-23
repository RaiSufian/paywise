import React, { useEffect, useState } from 'react';
import Splide from '@splidejs/splide';
import '@splidejs/splide/css';
import { Button } from '@mui/material';
import AnimateBounce from "../../components/animateBounce";
import AnimateUp from '../../components/animateUp';
import AnimateRight from '../../components/animateRight';
import AnimateDown from '../../components/animatedown';
import { Link } from 'react-router-dom';
import axios from "axios";
import Lottie from 'react-lottie';
import aboutUs from "../../assets/lottie/slider.json";

const Hero = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const [bannerData, setBannerData] = useState(null);
    const [loading, setLoading] = useState(true);

    const slider = {
        loop: true,
        autoplay: true,
        animationData: aboutUs,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    useEffect(() => {
        if (!loading) {

            const splide = new Splide('.splide', {
                type: 'loop',
                perPage: 1,
                autoplay: true,
                interval: 8000,
                pauseOnHover: false,
                arrows: true,
                pagination: false,
                keyboard: true,
            });
            splide.on('moved', (newIndex) => {
                setActiveSlide(newIndex);
            });
            splide.mount();
            return () => {
                splide.destroy();
            };
        }

    }, [loading]);

    const getData = async () => {
        setLoading(true);

        await axios.get('index.php?action=get_banner')
            .then((resp) => {
                if (resp.status == 200) {
                    setLoading(false);
                    // console.log("data result is", resp.data.data);
                    setBannerData(resp.data.data)

                }
            })
            .catch((error) => {
                console.log("data error", error);
            })
    }
    useEffect(() => {
        getData();
    }, [])


    return (
        <>
            {
                loading ?
                    <div className="h-[80vh] overflow-hidden">
                        <Lottie options={slider} style={{ width: '100%', height: '100%' }} />

                    </div> :
                    <div className="splide relative">
                        <div className="splide__track">
                            <ul className="splide__list">
                                <li className="splide__slide">
                                    <div className='max-h-screen'>
                                        <div className="image-wrapper relative">
                                            <img src={bannerData && bannerData[0].ban_file} alt='slider image' className="slideImg" />
                                            {activeSlide === 0 &&
                                                <div className='text-white text-wrapper absolute   top-0 left-0 bottom-0 right-0'>
                                                    <div className="pl-10  w-full h-full lg:h-screen flex items-center">
                                                        <div>
                                                            <h3 className=" tracking-wider  uppercase font-sans text-sm md:text-xl font-bold">
                                                                {bannerData ? <AnimateBounce text={bannerData[0]?.ban_name} /> : <></>}
                                                            </h3>
                                                            <h2 className="leading-none lg:leading-normaluppercase text-xl md:text-5xl lg:text-7xl font-bold hero-text" id="hero-text">
                                                                {bannerData ? <AnimateUp text={bannerData[0]?.ban_details} /> : <></>}

                                                            </h2>
                                                            <div className="pt-3 md:pt-4 lg:pt-8 flex gap-5">
                                                                <Link
                                                                    to="/about-us"
                                                                    data-aos="fade-right"
                                                                    data-aos-easing="ease-in-back"
                                                                    data-aos-delay="2000"
                                                                    data-aos-duration="1000">
                                                                    <Button

                                                                        variant="contained" sx={{
                                                                            fontSize: {
                                                                                xs: '12px',
                                                                                md: '18px',
                                                                            },
                                                                            padding: {
                                                                                xs: '8px 22px 6px 22px',
                                                                                md: '10px 28px 8px 28px'
                                                                            },
                                                                            borderRadius: '50px',
                                                                            '@media (max-width:330px)': {
                                                                                fontSize: '10px',
                                                                                padding: '6px 18px 4px 18px',
                                                                            }
                                                                        }} >About Paywize</Button>
                                                                </Link>

                                                                <Link
                                                                    to="/contactus"
                                                                    data-aos="fade-left"
                                                                    data-aos-easing="ease-in-back"
                                                                    data-aos-delay="3000"
                                                                    data-aos-duration="1000">

                                                                    <Button sx={{
                                                                        fontSize: {
                                                                            xs: '12px',
                                                                            md: '18px',
                                                                        },
                                                                        padding: {
                                                                            xs: '8px 22px 6px 22px',
                                                                            md: '10px 28px 8px 28px'
                                                                        },
                                                                        borderRadius: '50px',
                                                                        backgroundColor: '#fff',
                                                                        '@media (max-width:330px)': {
                                                                            fontSize: '10px',
                                                                            padding: '6px 18px 4px 18px',
                                                                        }
                                                                    }} >Contact Us</Button>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            }
                                        </div>
                                    </div>
                                </li>
                                <li className="splide__slide">
                                    <div className='max-h-screen'>
                                        <div className="image-wrapper relative">
                                            <img src={bannerData && bannerData[1].ban_file} alt='slider image' className="slideImg" />
                                            <div className='text-white text-wrapper absolute   top-0 left-0 bottom-0 right-0'>
                                                <div className="pl-3 lg:px-5 container mx-auto  w-full h-full lg:h-screen flex items-center">
                                                    {activeSlide === 1 &&
                                                        <div className="text-center w-full">
                                                            <h2 className="uppercase text-xl md:text-4xl lg:text-6xl font-bold">
                                                                {bannerData ? <AnimateRight text={bannerData[1].ban_name} /> : <></>}
                                                            </h2>
                                                            <Link
                                                                to="/signup"
                                                                className="pt-3 md:pt-5 lg:pt-8"
                                                                data-aos="fade-bottom"
                                                                data-aos-easing="ease-in-back"
                                                                data-aos-delay="2000"
                                                                data-aos-duration="1000">
                                                                <Button variant="contained"
                                                                    sx={{
                                                                        fontSize: {
                                                                            xs: '12px',
                                                                            md: '18px',
                                                                        },
                                                                        padding: {
                                                                            xs: '8px 22px 6px 22px',
                                                                            md: '10px 28px 8px 28px'
                                                                        },
                                                                        borderRadius: '50px',
                                                                        '@media (max-width:330px)': {
                                                                            fontSize: '10px',
                                                                            padding: '6px 18px 4px 18px',
                                                                        }
                                                                    }}
                                                                >Sign Up</Button>
                                                            </Link>
                                                        </div>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="splide__slide">
                                    <div className='max-h-screen'>
                                        <div className="image-wrapper relative">
                                            <img src={bannerData && bannerData[2]?.ban_file} alt='slider image' className="slideImg" />
                                            {activeSlide === 2 &&
                                                <div className='text-white text-wrapper absolute   top-0 left-0 bottom-0 right-0'>
                                                    <div className="px-2 lg:px-5 container mx-auto  w-full h-full lg:h-screen flex items-center">
                                                        <div className="text-center w-full">
                                                            <h2 className="tracking-wider swap-y underline uppercase font-sans text-sm md:text-md lg:text-xl font-bold"><AnimateBounce text={bannerData[2]?.ban_name} /></h2>
                                                            <h1 className="uppercase text-md md:text-4xl lg:text-6xl font-bold py-1 md:py-4 lg:py-5">  <AnimateDown text={bannerData[2]?.ban_details} /></h1>
                                                            <Link
                                                                to="/our-services"
                                                                className="pt-4 md:pt-4 lg:pt-8"
                                                                data-aos="fade-right"
                                                                data-aos-easing="ease-in-back"
                                                                data-aos-delay="2000"
                                                                data-aos-duration="500">
                                                                <Button variant="contained"
                                                                    sx={{
                                                                        fontSize: {
                                                                            xs: '12px',
                                                                            md: '18px',
                                                                        },
                                                                        padding: {
                                                                            xs: '8px 22px 6px 22px',
                                                                            md: '10px 28px 8px 28px'
                                                                        },
                                                                        borderRadius: '50px',
                                                                        '@media (max-width:330px)': {
                                                                            fontSize: '10px',
                                                                            padding: '6px 18px 4px 18px',
                                                                        }
                                                                    }}
                                                                >Over Services</Button>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            }
                                        </div>
                                    </div>
                                </li>


                            </ul>
                        </div>

                        <svg
                            className="absolute -bottom-1 lg:bottom-0 left-0 right-0"
                            id="wave"
                            style={{ transform: "rotate(0deg)", transition: "0.3s" }}
                            viewBox="0 0 1440 150"
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
                                style={{ transform: "translate(0, 0px)", opacity: 1 }}
                                fill="url(#sw-gradient-0)"
                                d="M0,15L40,27.5C80,40,160,65,240,82.5C320,100,400,110,480,105C560,100,640,80,720,67.5C800,55,880,50,960,52.5C1040,55,1120,65,1200,75C1280,85,1360,95,1440,90C1520,85,1600,65,1680,60C1760,55,1840,65,1920,80C2000,95,2080,115,2160,112.5C2240,110,2320,85,2400,85C2480,85,2560,110,2640,105C2720,100,2800,65,2880,45C2960,25,3040,20,3120,37.5C3200,55,3280,95,3360,107.5C3440,120,3520,105,3600,100C3680,95,3760,100,3840,102.5C3920,105,4000,105,4080,97.5C4160,90,4240,75,4320,77.5C4400,80,4480,100,4560,110C4640,120,4720,120,4800,100C4880,80,4960,40,5040,37.5C5120,35,5200,70,5280,75C5360,80,5440,55,5520,47.5C5600,40,5680,50,5720,55L5760,60L5760,150L5720,150C5680,150,5600,150,5520,150C5440,150,5360,150,5280,150C5200,150,5120,150,5040,150C4960,150,4880,150,4800,150C4720,150,4640,150,4560,150C4480,150,4400,150,4320,150C4240,150,4160,150,4080,150C4000,150,3920,150,3840,150C3760,150,3680,150,3600,150C3520,150,3440,150,3360,150C3280,150,3200,150,3120,150C3040,150,2960,150,2880,150C2800,150,2720,150,2640,150C2560,150,2480,150,2400,150C2320,150,2240,150,2160,150C2080,150,2000,150,1920,150C1840,150,1760,150,1680,150C1600,150,1520,150,1440,150C1360,150,1280,150,1200,150C1120,150,1040,150,960,150C880,150,800,150,720,150C640,150,560,150,480,150C400,150,320,150,240,150C160,150,80,150,40,150L0,150Z"
                            />
                        </svg>
                    </div>
            }
        </>
    )
}


export default Hero;
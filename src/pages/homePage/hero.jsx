import React, { useEffect, useState } from 'react';
import Splide from '@splidejs/splide';
import '@splidejs/splide/css';
import img1 from '../../assets/slide1.jpg';
import img2 from '../../assets/slide2.jpg';
import img3 from '../../assets/slide3.jpg';
import { Button } from '@mui/material';
const Hero = () => {

    const [showButton, setShowButton] = useState(false);

    useEffect(() => {

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

        splide.on('active', (slide) => {
            if (slide.index === 0) { // Replace '0' with the index of the slide with animated text if needed
                const spans = document.querySelectorAll('#hero-text span');

                setShowButton(false);

                spans.forEach((span, index) => {
                    span.style.animation = 'none';
                    setTimeout(() => {
                        span.style.animation = '';
                        span.style.animationDelay = `${index * 0.1}s`;
                    }, 10);
                });

                const textAnimationDuration = spans.length * 0.1 * 700;
                setTimeout(() => setShowButton(true), textAnimationDuration);
            }

        });

        splide.mount();

        return () => {
            splide.destroy();
        };

    }, []);

    return (

        <div className="splide relative">
            <div className="splide__track">
                <ul className="splide__list">
                    <li className="splide__slide">
                        <div className='max-h-screen'>
                            <div className="image-wrapper relative">
                                <img src={img1} alt='slider image' />
                                <div className='text-white text-wrapper absolute   top-0 left-0 bottom-0 right-0'>
                                    <div className="px-5 container mx-auto  w-full h-screen flex items-center">
                                        <div>
                                            <h3 className=" tracking-wider swap-y underline uppercase font-sans text-xl font-bold">Paywise umbrella</h3>
                                            <h2 className="uppercase text-7xl font-bold hero-text" id="hero-text">
                                                <span>D</span>
                                                <span>i</span>
                                                <span>s</span>
                                                <span>c</span>
                                                <span>o</span>
                                                <span>v</span>
                                                <span>e</span>
                                                <span>r</span>
                                                <br />
                                                <span>H</span>
                                                <span>a</span>
                                                <span>s</span>
                                                <span>s</span>
                                                <span>e</span>
                                                <span>l</span>
                                                <span>-</span>
                                                <span>f</span>
                                                <span>r</span>
                                                <span>e</span>
                                                <span>e</span>
                                                <br />
                                                <span>c</span>
                                                <span>o</span>
                                                <span>n</span>
                                                <span>t</span>
                                                <span>r</span>
                                                <span>a</span>
                                                <span>c</span>
                                                <span>t</span>
                                                <span>i</span>
                                                <span>n</span>
                                                <span>g</span>

                                            </h2>
                                            <div className="pt-8 flex gap-5">
                                                <div className={`slide-in-left ${showButton ? 'active' : ''}`}>

                                                    <Button variant="contained" sx={{
                                                        fontSize: '18px',
                                                        padding: '10px 28px 8px 28px',
                                                        borderRadius: '50px'
                                                    }} >About Paywise</Button>
                                                </div>

                                                <div className={`slide-in-left-delay slide-in-left ${showButton ? 'active' : ''}`}>

                                                    <Button sx={{
                                                        fontSize: '18px',
                                                        padding: '10px 28px 8px 28px',
                                                        borderRadius: '50px',
                                                        backgroundColor: '#fff'
                                                    }} >Contact Us</Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="splide__slide">
                        <div className='max-h-screen'>
                            <div className="image-wrapper relative">
                                <img src={img2} alt='slider image' />
                                <div className='text-white text-wrapper absolute   top-0 left-0 bottom-0 right-0'>
                                    <div className="px-5 container mx-auto  w-full h-screen flex items-center">
                                        <div className="text-center w-full">
                                            <h2 className="uppercase text-6xl font-bold">Working for yourself just <br /> got easier</h2>
                                            <div className="pt-8">
                                                <Button variant="contained"
                                                    sx={{
                                                        fontSize: '18px',
                                                        padding: '10px 28px 8px 28px',
                                                        borderRadius: '50px',
                                                        fontWeight: '600',
                                                        verticalAlign: 'center',
                                                    }}
                                                >Sign Up</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="splide__slide">
                        <div className='max-h-screen'>
                            <div className="image-wrapper relative">
                                <img src={img3} alt='slider image' />
                                <div className='text-white text-wrapper absolute   top-0 left-0 bottom-0 right-0'>
                                    <div className="px-5 container mx-auto  w-full h-screen flex items-center">
                                        <div className="text-center w-full">
                                            <h2 className="tracking-wider swap-y underline uppercase font-sans text-xl font-bold">pay wise umbrella</h2>
                                            <h1 className="uppercase text-6xl font-bold py-5">Simplify your contracting life</h1>
                                            <div className="pt-8">
                                                <Button variant="contained"
                                                    sx={{
                                                        fontSize: '18px',
                                                        padding: '10px 28px 8px 28px',
                                                        borderRadius: '50px',
                                                        fontWeight: '600',
                                                        verticalAlign: 'center',
                                                    }}
                                                >Over Services</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                    {/* Add more slides as needed */}
                </ul>
            </div>

            <svg
                className="absolute bottom-0 left-0 right-0"
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
    )
}

export default Hero;
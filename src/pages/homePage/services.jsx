import { Button } from '@mui/material';
import { useState, useEffect } from 'react';
import axios from "axios";
import Lottie from 'react-lottie';
import aboutUs from "../../assets/lottie/slider.json";

const Services = () => {

    const [loading, setLoading] = useState(true);
    const slider = {
        loop: true,
        autoplay: true,
        animationData: aboutUs,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };
    const [data, setData] = useState(null);
    const getData = async () => {
        setLoading(true);
        await axios.get("index.php?action=get_page_widgets&wid_params=our_Services")
            .then((resp) => {
                
                setData(resp.data.data[0]);
                setLoading(false);
            })
            .catch((error) => {
                console.log("our services error", error);
            });
    }
    useEffect(() => {
        getData();
    }, [])
    return (
        <section className="verflow-hidden">
            <div className="container mx-auto py-5 md:py-10 px-3 md:px-6">
                <div className="lg:flex items-center">
                    <div className="lg:w-1/2 service_grade">

                        {
                            loading ?
                                <div className="h-[80vh] overflow-hidden">
                                    <Lottie options={slider} style={{ width: '100%', height: '100%' }} />
                                </div>
                                :
                                <div className="p-1 md:p-10 lg:p-20 ">
                                    <h3 className="text-blue-600 flex gap-2 items-center uppercase tracking-wider text-lg font-semibold">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><g fill="none"><g fill="currentColor" clip-path="url(#grommetIconsGooglePay0)"><path d="m12.645 14.34l5.937-10.285l3.234 1.867a4.366 4.366 0 0 1 1.598 5.964l-3.344 5.791a2.73 2.73 0 0 1-3.728 1l-3.002-1.732a1.91 1.91 0 0 1-.695-2.606Z" /><path d="M12.012 7.2L4.625 19.991l3.235 1.867a4.367 4.367 0 0 0 5.964-1.598l4.791-8.298a2.73 2.73 0 0 0-1-3.729l-3.002-1.732a1.903 1.903 0 0 0-2.601.697Z" /><path d="m18.582 4.053l-2.29-1.32A5.456 5.456 0 0 0 8.839 4.73l-4.246 7.352a2.73 2.73 0 0 0 1 3.728l2.289 1.32a2.73 2.73 0 0 0 3.728-1l5.069-8.779a3.81 3.81 0 0 1 5.206-1.394z" /><path d="M9.496 6.885L6.971 5.43a2.357 2.357 0 0 0-3.215.86L.725 11.524a5.383 5.383 0 0 0 1.977 7.363l1.923 1.108l2.332 1.343l1.012.582a4.14 4.14 0 0 1-1.27-5.51l.786-1.355l2.872-4.964a2.343 2.343 0 0 0-.86-3.207Z" /></g><defs><clipPath id="grommetIconsGooglePay0"><path fill="#fff" d="M0 0h24v24H0z" /></clipPath></defs></g></svg>
                                        {data?.wid_heading}
                                    </h3>
                                    <div
                                        data-aos="fade-right"
                                        data-aos-easing="ease-out-cubic"
                                        data-aos-duration="1000"
                                        data-aos-delay="500"
                                    >
                                        <div dangerouslySetInnerHTML={{ __html: data?.wid_details }}></div>
                                    </div>

                                    <div className="mt-5  uppercase">
                                        <Button variant="contained" sx={{
                                            fontSize: '16px',
                                            padding: '8px 24px 6px 24px',
                                            borderRadius: '50px'
                                        }} >Contact Us</Button>
                                    </div>
                                </div>
                        }
                    </div>
                    <div className='lg:w-1/2 '>

                        {
                            loading ?
                                <div className="h-[80vh] overflow-hidden">
                                    <Lottie options={slider} style={{ width: '100%', height: '100%' }} />
                                </div>
                                :
                                <div className="m-4 md:m-10 relative  h-72 md:h-96">
                                    <img
                                        data-aos="fade-top"
                                        data-aos-easing="ease-out-cubic"
                                        data-aos-duration="1000"
                                        data-aos-delay="500"
                                        src={data?.wid_img} alt="services img1 " className="object-cover h-40 md:h-60 w-full md:w-96 rounded-3xl absolute  -left-4 rounded-tl-none" />
                                    <img
                                        data-aos="fade-right"
                                        data-aos-easing="ease-out-cubic"
                                        data-aos-duration="1000"
                                        data-aos-delay="500"
                                        src={data?.wid_img_two}
                                        alt="services img1 " className="object-cover h-40 md:h-60 w-full md:w-96 rounded-3xl absolute -right-4 bottom-0 rounded-br-none" />

                                </div>
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;
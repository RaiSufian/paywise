import { Link } from "react-router-dom";
import PaywizeQuest from "./paywizeQuest";
import Lottie from 'react-lottie';
import PaywizeQuest2 from "./paywizeQuest2";
import FaqsList from "./faqs";
import FaqsCard from "./faqsCards";
import { useState, useEffect } from "react";
import slider from "../../assets/lottie/slider.json";
import axios from 'axios'

const Faqs = () => {

    const sliderload = {
        loop: true,
        autoplay: true,
        animationData: slider,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };


    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    const getData = async () => {
        await axios.get("index.php?action=get_page_widgets&wid_params=paywize_faqs")
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

    useEffect(() => {
        getData();
    }, [])

    return (
        <>
            <section className="flex flex-wrap faq_back lg:mb-20">

                {

                    loading ?
                        <div className="h-[80vh] w-full overflow-hidden">
                            <Lottie options={sliderload} style={{ width: '100%', height: '100%' }} />

                        </div>
                        :
                        <>

                            <div className="hidden lg:block lg:w-1/2 w-full h-56 lg:h-[calc(100%+70px)] relative">
                                <img data-aos="zoom-in" src={data?.wid_img} className="w-full h-full object-cover hover:rotate-6" />
                                <span className="absolute top-0 right-0 left-0 bottom-0 object1_bg z-100">
                                </span>
                            </div>
                            <div className="lg:w-1/2 py-20 lg:py-10">
                                <div className="px-5 md:px-14 flex items-center justify-center w-full h-full text-white">
                                    <div className="text-center">
                                        <h1 className="text-4xl font-bold  mb-6"> {data?.wid_heading}</h1>
                                        <h2 className="pb-8 text-white">
                                            <div dangerouslySetInnerHTML={{ __html: data?.wid_details }}></div>
                                        </h2>
                                        <div className="relative">
                                            <Link to="/contactus" className="py-3 pl-8 pr-10 bg-blue-500 rounded-tl-lg rounded-bl-lg hover:bg-blue-600">Contact Us</Link>
                                            <Link to="/signup" className="py-3 pr-8 pl-10 bg-blue-500 rounded-tr-lg rounded-br-lg hover:bg-blue-600">Sign Up</Link>
                                            <span className="text-black ml-3 top-1/2 left-1/2 absolute w-9 h-8 bg-white rounded-full border-opacity-50 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-sm border-4 border-gray-100">
                                                OR
                                            </span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </>
                }
            </section>
            <FaqsCard />
            <PaywizeQuest />
            <PaywizeQuest2 />
            <FaqsList />
        </>
    )
}
export default Faqs;
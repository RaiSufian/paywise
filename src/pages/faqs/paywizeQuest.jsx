import axios from 'axios'
import { useState, useEffect } from "react";
import Lottie from 'react-lottie';
import slider from "../../assets/lottie/slider.json";
const PaywizeQuest = () => {

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
        await axios.get("index.php?action=get_page_widgets&wid_params=are_you_questioning")
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
        <section className="container mx-auto px-3 md:px-6 pb-10">
            <div className="flex flex-wrap items-center">
                <div className=" w-full lg:w-1/2 md:pr-12 lg:pr-20 ">
                    {
                        loading ?
                            <div className="h-[80vh] w-full overflow-hidden">
                                <Lottie options={sliderload} style={{ width: '100%', height: '100%' }} />

                            </div>
                            :
                            <>
                                <h4 className="text-3xl md:text-5xl font-bold">
                                    {data?.wid_heading}  
                                                          </h4>
                                <p className="py-2 leading-loose text-stone-500">
                                    <div dangerouslySetInnerHTML={{ __html: data?.wid_details }}></div>
                                </p>
                            </>
                    }
                </div>
                <div className="w-full lg:w-1/2 ">

                    {
                        loading
                            ?
                            <div className="h-[80vh] w-full overflow-hidden">
                                <Lottie options={sliderload} style={{ width: '100%', height: '100%' }} />

                            </div>
                            :

                            <div className="lg:m-10">
                                <img src={data?.wid_img} className=" w-full h-60 lg:h-full rounded object-cover" />
                            </div>
                    }
                </div>
            </div>
        </section>

    )
}
export default PaywizeQuest;
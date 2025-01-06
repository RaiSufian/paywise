import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Blogs = () => {

    const [blogs, setBlogs] = useState([]);
    const getBlogs = async () => {
        await axios('index.php?action=get_services')
            .then((resp) => {
                // console.log("blogs are", resp.data.data);
                if (resp.status == 200) {
                    setBlogs(resp.data.data);
                }
            })
            .catch((error) => {
                console.log("get blogs error is:", error);
            })
    }

    useEffect(() => {
        getBlogs();
    }, [])
    return (
        <section className="" id="#PY">
            <div className="container mx-auto px-2 md:px-6 lg:px-14">
                <div className="flex flex-wrap" >

                    {

                        blogs?.map((item, index) => (

                            <div className="w-full md:w-1/2 p-3 " key={index}> 
                                <div className="p-3 lg:p-4 bg-blue-50 blog_card">
                                    <Link to="/">
                                        <img src={item?.serv_image} alt="blogs image" className="object-cover w-full h-52 lg:h-80 mb-5" />
                                    </Link>
                                    <div className="text-center">
                                        <h3 className="text-blue-500 text-2xl mb-2 font-semibold">{item.serv_title}</h3>
                                        <p className="text-neutral-500 mb-3">
                                            {item?.serv_detail}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </section>
    )
}

export default Blogs;
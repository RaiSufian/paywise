import img1 from "../../assets/services2.jpg";
import img2 from "../../assets/welcome.jpg";
import img3 from "../../assets/whatdo2.jpg";
import img4 from "../../assets/whyus.jpg";

import { Link } from "react-router-dom";
const Blogs = () => {
    return (
        <section className="" id="#PY">
            <div className="container mx-auto px-2 md:px-6 lg:px-14">
                <div className="flex flex-wrap" >
                    <div className="w-full md:w-1/2 p-3 ">
                        <div className="p-3 lg:p-4 bg-blue-50 blog_card">
                            <Link to="/">
                                <img src={img1} alt="blogs image" className="object-cover w-full h-52 lg:h-80 mb-5" />
                            </Link>
                            <div className="text-center">
                                <h3 className="text-blue-500 text-2xl mb-2 font-semibold">Dedicated Contractor PA</h3>
                                <p className="text-neutral-500 mb-3">Our team of committed Contractor PAs is here to offer assistance and support whenever you need it. We recognize that contracting can be intricate and demanding, so we're by your side at every stage of the journey</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 p-3">
                        <div className="p-3 lg:p-4 bg-blue-50 blog_card">
                            <Link to="/">
                                <img src={img2} alt="blogs image" className="object-cover w-full h-52 lg:h-80 mb-5" />
                            </Link>
                            <div className="text-center">
                                <h3 className="text-blue-500 text-2xl mb-2 font-semibold">Payroll</h3>
                                <p className="text-neutral-500 mb-3">We process payroll twice daily, five days a week, using Faster Payments to ensure you receive your funds quickly. Additionally, we offer same-day payment processing and timely notifications, keeping you informed the moment your funds are sent.</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 p-3">
                        <div className="p-3 lg:p-4 bg-blue-50 blog_card">
                            <Link to="/">
                                <img src={img3} alt="blogs image" className="object-cover w-full h-52 lg:h-80 mb-5" />
                            </Link>
                            <div className="text-center">
                                <h3 className="text-blue-500 text-2xl mb-2 font-semibold">100% Compliant</h3>
                                <p className="text-neutral-500 mb-3">
                                    Compliance is a top priority for us, which is why we conduct regular external audits to ensure full adherence to government regulations. Our accreditations from leading industry bodies and regulators further reinforce our commitment to maintaining the highest compliance standards.</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 p-3">
                        <div className="p-3 lg:p-4 bg-blue-50 blog_card">
                            <Link to="/">
                                <img src={img4} alt="blogs image" className="object-cover w-full h-52 lg:h-80 mb-5" />
                            </Link>
                            <div className="text-center">
                                <h3 className="text-blue-500 text-2xl mb-2 font-semibold">Fixed Price Structure</h3>
                                <p className="text-neutral-500 mb-3">Our fixed margins provide complete transparency, so you always know exactly what you're paying us, regardless of your earnings. Our fees include all employment insurances and administrative costs, guaranteeing no hidden charges or unexpected surprises.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blogs;
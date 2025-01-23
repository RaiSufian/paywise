import { Button } from "@mui/material";
import { Link } from "react-router-dom";
const Footer = ({ detail, links }) => {
    return (
        <section className="footer_bg">
            <div className="container mx-auto px-6 py-10">
                <div className="lg:flex gap-10">
                    <div className="lg:w-1/2 pb-5">
                        <div className="">
                            <img src={detail.config_logo} alt="footer_logo" className="w-40" />
                            <p className="text-white py-5">{detail.config_footer_txt}</p>
                            <Link to="/contactus">
                                <Button variant="contained" sx={{
                                    fontSize: '18px',
                                    padding: '10px 24px 8px 24px',
                                }} >Contect Us</Button>
                            </Link>
                        </div>
                    </div>
                    <div className="lg:w-1/2">
                        <div className="">
                            <h4 className="text-white text-2xl font-bold">Contact Info</h4>
                            <ul className="flex flex-col gap-5 py-5 text-white">
                                <li className="flex gap-2 items-center text-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="text-blue-500" width="1.5em" height="1.5em" viewBox="0 0 256 256"><path fill="currentColor" d="M144.27 45.93a8 8 0 0 1 9.8-5.66a86.22 86.22 0 0 1 61.66 61.66a8 8 0 0 1-5.66 9.8a8.2 8.2 0 0 1-2.07.27a8 8 0 0 1-7.73-5.94a70.35 70.35 0 0 0-50.33-50.33a8 8 0 0 1-5.67-9.8m-2.33 41.8c13.79 3.68 22.65 12.54 26.33 26.33A8 8 0 0 0 176 120a8.2 8.2 0 0 0 2.07-.27a8 8 0 0 0 5.66-9.8c-5.12-19.16-18.5-32.54-37.66-37.66a8 8 0 1 0-4.13 15.46m81.94 95.35A56.26 56.26 0 0 1 168 232C88.6 232 24 167.4 24 88a56.26 56.26 0 0 1 48.92-55.88a16 16 0 0 1 16.62 9.52l21.12 47.15v.12a16 16 0 0 1-1.27 15.09c-.18.27-.37.52-.57.77L88 129.45c7.49 15.22 23.41 31 38.83 38.51l24.34-20.71a8 8 0 0 1 .75-.56a16 16 0 0 1 15.17-1.4l.13.06l47.11 21.11a16 16 0 0 1 9.55 16.62m-15.88-2h-.11l-47-21.05l-24.35 20.71a8 8 0 0 1-.74.56a16 16 0 0 1-15.75 1.14c-18.73-9.05-37.4-27.58-46.46-46.11a16 16 0 0 1 1-15.7a6 6 0 0 1 .57-.77L96 95.15l-21-47a.6.6 0 0 1 0-.12A40.2 40.2 0 0 0 40 88a128.14 128.14 0 0 0 128 128a40.21 40.21 0 0 0 40-34.93Z" /></svg>
                                    <a href={`tel:${detail?.config_phone}`} className="hover:text-blue-500 transition-all"> {detail?.config_phone} </a>
                                </li>
                                <li className="flex gap-2 items-center text-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="text-blue-500" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M5 5h13a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3m0 1c-.5 0-.94.17-1.28.47l7.78 5.03l7.78-5.03C18.94 6.17 18.5 6 18 6zm6.5 6.71L3.13 7.28C3.05 7.5 3 7.75 3 8v9a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2V8c0-.25-.05-.5-.13-.72z" /></svg>
                                    <a href={`mailto:${detail?.config_email}`} className="hover:text-blue-500 transition-all">{detail?.config_email}</a>
                                </li>
                                <li className="flex gap-2 items-center text-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="text-blue-500" width="1.5em" height="1.5em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor"><circle cx="12" cy="12" r="8.5" /><path stroke-linecap="round" d="M5 2.804A6 6 0 0 0 2.804 5M19 2.804A6 6 0 0 1 21.196 5M12 6.5v5.25c0 .138.112.25.25.25h4.25" /></g></svg>
                                    <span className="hover:text-blue-500 transition-all">{detail?.config_time}</span>
                                </li>

                                <li>
                                    <h3 className="text-2xl font-bold">Social Links</h3>
                                    <ul className="py-4 flex gap-5">

                                        {
                                            links.map((link) => (

                                                <li className="rounded h-8 shadow-md social_bg w-8  text-white flex justify-center items-center">
                                                    <a href={link.sl_title} targt="_blank">
                                                        <span dangerouslySetInnerHTML={{ __html: link.sl_icon }}></span>
                                                    </a>
                                                </li>
                                            ))
                                        }

                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="container py-4 text-center text-white text-lg px-2">
                <span>©2024 Paywize Umbrella - All Rights Reserved | Designed By Sufian®</span>
            </div>
        </section>
    )
}
export default Footer;
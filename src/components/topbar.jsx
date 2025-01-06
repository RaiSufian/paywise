
const Topbar = ({ detail, links }) => {


    return (

        <div className="border-b topbar">
            <div className="container mx-auto py-2 px-1 md:px-6">
                <div className="flex justify-center md:justify-between items-center">
                    <div className="w-full md:w-1/2 flex justify-around md:justify-normal gap-1 text-xs sm:text-sm  md:text-md md:text-base">
                        <a href={`mailto:${detail?.config_email}`} className="text-white   group flex items-center gap-1 px-1 md:px-3 ">
                            <svg className=" transition-transform duration-500 group-hover:animate-rotate360" xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 24 24"><path fill="currentColor" d="M4.616 19q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h14.77q.69 0 1.152.463T21 6.616v10.769q0 .69-.463 1.153T19.385 19zM12 12.116l8-5.231L19.692 6L12 11L4.308 6L4 6.885z" /></svg>
                            <span className="group-hover:text-blue-500 group-hover:scale-95 transition-all">
                                {detail?.config_email}
                            </span>
                        </a>
                        <a href={`tel:${detail?.config_phone}`} className="group flex items-center gap-1 px-1 md:px-3 text-white">
                            <svg className=" transition-transform duration-500 group-hover:animate-rotate360" xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 24 24"><path fill="currentColor" d="m21 15.46l-5.27-.61l-2.52 2.52a15.05 15.05 0 0 1-6.59-6.59l2.53-2.53L8.54 3H3.03C2.45 13.18 10.82 21.55 21 20.97z" /></svg>
                            <span className="group-hover:text-blue-500 group-hover:scale-95 transition-all">
                                {detail?.config_phone}
                            </span>
                        </a>
                    </div>
                    <div>
                        <ul className=" hidden w-1/2 md:flex gap-3 text-white">

                            {
                                links?.map((link) => (
                                    <li className=" transition-transform duration-500 hover:animate-rotate360">
                                        <a href={link.sl_title} >
                                        <span dangerouslySetInnerHTML={{ __html: link.sl_icon }}></span>
                                        </a>
                                    </li>
                                )
                                )
                            }

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar;
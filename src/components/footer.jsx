import { Button } from "@mui/material";
const Footer = () => {
    return (
        <section className="footer_bg">
            <div className="container mx-auto px-6 py-10">
                <div className="lg:flex gap-10">
                    <div className="lg:w-1/2 pb-5">
                        <div className="">
                            <img src="/logo 2.jpg" alt="footer_logo" className="w-40" />
                            <p className="text-white py-5">At Paywise Umbrella, we recognize that managing invoicing, payroll, administration, and tax payments can be overwhelming for contractors. That’s why we’ve created the most comprehensive umbrella service in the industry, backed by a team of experts dedicated to simplifying these processes. Our goal is to remove the stress from your contracting experience, offering a seamless and hassle-free solution so you can focus on what matters most—your work. With our support, you can rest assured knowing that every aspect of your contract is handled with care and efficiency.</p>
                            <Button variant="contained" sx={{
                                fontSize: '18px',
                                padding: '10px 24px 8px 24px',
                            }} >Contect Us</Button>
                        </div>
                    </div>
                    <div className="lg:w-1/2">
                        <div className="">
                            <h4 className="text-white text-2xl font-bold">Contact Info</h4>
                            <ul className="flex flex-col gap-5 py-5 text-white">
                                <li className="flex gap-2 items-center text-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="text-blue-500" width="1.5em" height="1.5em" viewBox="0 0 256 256"><path fill="currentColor" d="M144.27 45.93a8 8 0 0 1 9.8-5.66a86.22 86.22 0 0 1 61.66 61.66a8 8 0 0 1-5.66 9.8a8.2 8.2 0 0 1-2.07.27a8 8 0 0 1-7.73-5.94a70.35 70.35 0 0 0-50.33-50.33a8 8 0 0 1-5.67-9.8m-2.33 41.8c13.79 3.68 22.65 12.54 26.33 26.33A8 8 0 0 0 176 120a8.2 8.2 0 0 0 2.07-.27a8 8 0 0 0 5.66-9.8c-5.12-19.16-18.5-32.54-37.66-37.66a8 8 0 1 0-4.13 15.46m81.94 95.35A56.26 56.26 0 0 1 168 232C88.6 232 24 167.4 24 88a56.26 56.26 0 0 1 48.92-55.88a16 16 0 0 1 16.62 9.52l21.12 47.15v.12a16 16 0 0 1-1.27 15.09c-.18.27-.37.52-.57.77L88 129.45c7.49 15.22 23.41 31 38.83 38.51l24.34-20.71a8 8 0 0 1 .75-.56a16 16 0 0 1 15.17-1.4l.13.06l47.11 21.11a16 16 0 0 1 9.55 16.62m-15.88-2h-.11l-47-21.05l-24.35 20.71a8 8 0 0 1-.74.56a16 16 0 0 1-15.75 1.14c-18.73-9.05-37.4-27.58-46.46-46.11a16 16 0 0 1 1-15.7a6 6 0 0 1 .57-.77L96 95.15l-21-47a.6.6 0 0 1 0-.12A40.2 40.2 0 0 0 40 88a128.14 128.14 0 0 0 128 128a40.21 40.21 0 0 0 40-34.93Z" /></svg>
                                    <a href="#" className="hover:text-blue-500 transition-all">02394830380</a>
                                </li>
                                <li className="flex gap-2 items-center text-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="text-blue-500" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M5 5h13a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3m0 1c-.5 0-.94.17-1.28.47l7.78 5.03l7.78-5.03C18.94 6.17 18.5 6 18 6zm6.5 6.71L3.13 7.28C3.05 7.5 3 7.75 3 8v9a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2V8c0-.25-.05-.5-.13-.72z" /></svg>
                                    <a href="mailto:admin@paywizelimited.co.uk" className="hover:text-blue-500 transition-all">admin@paywizelimited.co.uk</a>
                                </li>
                                <li className="flex gap-2 items-center text-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="text-blue-500" width="1.5em" height="1.5em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor"><circle cx="12" cy="12" r="8.5" /><path stroke-linecap="round" d="M5 2.804A6 6 0 0 0 2.804 5M19 2.804A6 6 0 0 1 21.196 5M12 6.5v5.25c0 .138.112.25.25.25h4.25" /></g></svg>
                                    <span className="hover:text-blue-500 transition-all">09:00 - 06:00</span>
                                </li>

                                <li>
                                    <h3 className="text-2xl font-bold">Social Links</h3>
                                    <ul className="py-4 flex gap-5">
                                        <li className="rounded h-8 shadow-md social_bg w-8  text-white flex justify-center items-center">
                                            <a href="#" targt="_blank">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 2h-3a5 5 0 0 0-5 5v3H6v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                                            </a>
                                        </li>
                                        <li className="rounded h-8 shadow-md social_bg w-8  text-white flex justify-center items-center">
                                            <a href="#" targt="_blank">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 24 24"><path fill="currentColor" d="M19.913 5.322a1.034 1.034 0 0 1 .837 1.629l-1.042 1.481c-.064 5.086-1.765 8.539-5.056 10.264A10.9 10.9 0 0 1 9.6 19.835a12.23 12.23 0 0 1-6.2-1.524a.76.76 0 0 1-.317-.8a.77.77 0 0 1 .63-.6a20.6 20.6 0 0 0 3.745-.886C2 13.5 3.19 7.824 3.71 6.081a1.028 1.028 0 0 1 1.729-.422a9.93 9.93 0 0 0 5.995 2.95A4.19 4.19 0 0 1 12.725 5.3a4.125 4.125 0 0 1 5.7.02ZM4.521 17.794c1.862.872 6.226 1.819 9.667.016c2.955-1.549 4.476-4.732 4.521-9.461a.77.77 0 0 1 .142-.436l1.081-1.538l-.041-.053c-.518-.007-1.029-.014-1.55 0a.84.84 0 0 1-.547-.221a3.13 3.13 0 0 0-4.383-.072a3.17 3.17 0 0 0-.935 2.87a.65.65 0 0 1-.154.545a.59.59 0 0 1-.516.205a10.92 10.92 0 0 1-7.084-3.295c-.67 2.078-1.52 7.094 3.869 9.065a.63.63 0 0 1 .416.538a.63.63 0 0 1-.3.6a13.2 13.2 0 0 1-4.186 1.237m15.147-9.305" /></svg>
                                            </a>
                                        </li>
                                        <li className="rounded h-8 shadow-md social_bg w-8  text-white flex justify-center items-center">
                                            <a href="#" targt="_blank">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M5 1.25a2.75 2.75 0 1 0 0 5.5a2.75 2.75 0 0 0 0-5.5M3.75 4a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0m-1.5 4A.75.75 0 0 1 3 7.25h4a.75.75 0 0 1 .75.75v13a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75zm1.5.75v11.5h2.5V8.75zM9.25 8a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 .75.75v.434l.435-.187a7.8 7.8 0 0 1 2.358-.595C20.318 7.4 22.75 9.58 22.75 12.38V21a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1-.75-.75v-7a1.25 1.25 0 0 0-2.5 0v7a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1-.75-.75zm1.5.75v11.5h2.5V14a2.75 2.75 0 1 1 5.5 0v6.25h2.5v-7.87c0-1.904-1.661-3.408-3.57-3.234a6.3 6.3 0 0 0-1.904.48l-1.48.635a.75.75 0 0 1-1.046-.69V8.75z" clip-rule="evenodd" /></svg>
                                            </a>
                                        </li>
                                        <li className="rounded h-8 shadow-md social_bg w-8  text-white flex justify-center items-center">
                                            <a href="#" targt="_blank">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 24 24"><path fill="currentColor" d="m14.792 10.775l-3.668-2.112A1.417 1.417 0 0 0 9 9.89v4.222c-.003.506.267.974.706 1.224a1.41 1.41 0 0 0 1.419.002l3.667-2.112a1.413 1.413 0 0 0 0-2.45m-.5 1.582l-3.666 2.113a.41.41 0 0 1-.419 0A.41.41 0 0 1 10 14.11V9.89a.41.41 0 0 1 .207-.359a.4.4 0 0 1 .418 0l3.667 2.113a.41.41 0 0 1 0 .714M19 4H5a3.003 3.003 0 0 0-3 3v10a3.003 3.003 0 0 0 3 3h14a3.003 3.003 0 0 0 3-3V7a3.003 3.003 0 0 0-3-3m2 13a2.003 2.003 0 0 1-2 2H5a2.003 2.003 0 0 1-2-2V7a2.003 2.003 0 0 1 2-2h14a2.003 2.003 0 0 1 2 2z" /></svg>                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="container py-4 text-center text-white text-lg px-2">
                <span>©2024 Paywise Umbrella - All Rights Reserved | Designed By Sufian®</span>
            </div>
        </section>
    )
}
export default Footer;
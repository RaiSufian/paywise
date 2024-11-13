import image from '../../assets/welcome.jpg';
import { Button } from '@mui/material';
const WelcomeNote = () => {
    return (
        <section className="py-3">
            <div className="container mx-auto px-3 lg:px-6">
                <div className="lg:flex items-center">
                    <div className="hidden lg:block lg:w-6/12">
                        <div className="m-10 md:m-20 relative">
                            <img data-aos="fade-down-right" data-aos-duration="1000" data-aos-easing="linear" data-aos-offset="500" src={image} alt="welcome paywise" className="w-full z-10 shadow-lg m-10" />
                            <span className='absolute w-full h-full border-4 border-blue-500 -top-7 -left-2  -z-10'></span>
                        </div>
                    </div>
                    <div className="lg:w-6/12 welcomebg">
                        <div className="p-1 md:p-8 lg:p-10">

                            <h3 className="text-blue-600 flex gap-2 items-start md:items-center uppercase tracking-wider text-lg font-semibold">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><g fill="none"><g fill="currentColor" clip-path="url(#grommetIconsGooglePay0)"><path d="m12.645 14.34l5.937-10.285l3.234 1.867a4.366 4.366 0 0 1 1.598 5.964l-3.344 5.791a2.73 2.73 0 0 1-3.728 1l-3.002-1.732a1.91 1.91 0 0 1-.695-2.606Z" /><path d="M12.012 7.2L4.625 19.991l3.235 1.867a4.367 4.367 0 0 0 5.964-1.598l4.791-8.298a2.73 2.73 0 0 0-1-3.729l-3.002-1.732a1.903 1.903 0 0 0-2.601.697Z" /><path d="m18.582 4.053l-2.29-1.32A5.456 5.456 0 0 0 8.839 4.73l-4.246 7.352a2.73 2.73 0 0 0 1 3.728l2.289 1.32a2.73 2.73 0 0 0 3.728-1l5.069-8.779a3.81 3.81 0 0 1 5.206-1.394z" /><path d="M9.496 6.885L6.971 5.43a2.357 2.357 0 0 0-3.215.86L.725 11.524a5.383 5.383 0 0 0 1.977 7.363l1.923 1.108l2.332 1.343l1.012.582a4.14 4.14 0 0 1-1.27-5.51l.786-1.355l2.872-4.964a2.343 2.343 0 0 0-.86-3.207Z" /></g><defs><clipPath id="grommetIconsGooglePay0"><path fill="#fff" d="M0 0h24v24H0z" /></clipPath></defs></g></svg>
                                Welcome to Paywise Umbrella
                            </h3>
                            <p data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1000" className="pt-4 pb-1 text-justify">
                                A top provider of compliant, onshore PAYE payroll and employment services for contractors and agencies. With our expertise and resources, we simplify your work life.</p>
                            <p data-aos="fade-up" data-aos-delay="2000" data-aos-duration="1000" className="pb-4 pt-1 text-justify">
                                Our expert team brings extensive practical experience, making contracting easy, clear, and stress-free for every client. Specializing in tax compliance, payroll, administration, client service, and HR, we have supported thousands of contractors in reaching their financial goals smoothly and confidently. Join the many satisfied contractors who have successfully navigated the contracting world with our guidance</p>
                            <ul>
                                <li className="flex items-start gap-2 pt-3" data-aos="fade-up" data-aos-delay="1500" data-aos-duration="1000">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="text-green-500 mt-1" width="1em" height="1em" viewBox="0 0 512 512"><path fill="currentColor" d="M17.47 250.9C88.82 328.1 158 397.6 224.5 485.5c72.3-143.8 146.3-288.1 268.4-444.37L460 26.06C356.9 135.4 276.8 238.9 207.2 361.9c-48.4-43.6-126.62-105.3-174.38-137z" /></svg>
                                    <span>Leading provider of compliant, onshore PAYE payroll.</span>
                                </li>
                                <li className="flex items-start gap-2 pt-3" data-aos="fade-up" data-aos-delay="2000" data-aos-duration="1000">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="text-green-500 mt-1" width="1em" height="1em" viewBox="0 0 512 512"><path fill="currentColor" d="M17.47 250.9C88.82 328.1 158 397.6 224.5 485.5c72.3-143.8 146.3-288.1 268.4-444.37L460 26.06C356.9 135.4 276.8 238.9 207.2 361.9c-48.4-43.6-126.62-105.3-174.38-137z" /></svg>
                                    <span>Expert team with hands-on experience simplifies contracting for clients.</span>
                                </li>
                                <li className="flex items-start gap-2 pt-3" data-aos="fade-up" data-aos-delay="2500" data-aos-duration="1000">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="text-green-500 mt-1" width="1em" height="1em" viewBox="0 0 512 512"><path fill="currentColor" d="M17.47 250.9C88.82 328.1 158 397.6 224.5 485.5c72.3-143.8 146.3-288.1 268.4-444.37L460 26.06C356.9 135.4 276.8 238.9 207.2 361.9c-48.4-43.6-126.62-105.3-174.38-137z" /></svg>
                                    <span>Focused on tax compliance, payroll, and client service</span>
                                </li>
                                <li className="flex items-start gap-2 pt-3" data-aos="fade-up" data-aos-delay="3000" data-aos-duration="1000">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="text-green-500 mt-1" width="1em" height="1em" viewBox="0 0 512 512"><path fill="currentColor" d="M17.47 250.9C88.82 328.1 158 397.6 224.5 485.5c72.3-143.8 146.3-288.1 268.4-444.37L460 26.06C356.9 135.4 276.8 238.9 207.2 361.9c-48.4-43.6-126.62-105.3-174.38-137z" /></svg>
                                    <span>Thousands of contractors have achieved their financial goals with our support</span>
                                </li>
                            </ul>
                            <div className="mt-5 flex justify-end uppercase" data-aos="fade-bottom" data-aos-delay="3000" data-aos-duration="1000">
                                <Button variant="contained" sx={{
                                    fontSize: '16px',
                                    padding: '8px 24px 6px 24px',
                                    borderRadius: '50px'
                                }} >Sign Up</Button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default WelcomeNote;
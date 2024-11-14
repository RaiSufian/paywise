import Topbar from "../../components/topbar";
import Header from "../../components/header";
import BreadCrumb from "../../components/breadcrumb";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import Footer from "../../components/footer";
const ContactUs = () => {
    const textFeild = {
        backgroundColor: 'transparent',
        borderRadius: "50px",
        marginBottom: '20px',

        '& .MuiOutlinedInput-root': {
            borderRadius: '20px',
            marginBottom: '15px',
        },
    }

    return (

        <>
            <Topbar />
            <Header />
            <BreadCrumb name="Contact Us" link="contactus" />
            <section className="relative bg-slate-200 ">
                <svg
                    id="wave"
                    className="absolute bottom-0"
                    style={{ transform: 'rotate(0deg)', transition: '0.3s' }}
                    viewBox="0 0 1440 180"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
                            <stop stopColor="rgba(255, 255, 255, 1)" offset="0%" />
                            <stop stopColor="rgba(255, 255, 255, 1)" offset="100%" />
                        </linearGradient>
                    </defs>
                    <path
                        style={{ transform: 'translate(0, 0px)', opacity: 1 }}
                        fill="url(#sw-gradient-0)"
                        d="M0,0L34.3,21C68.6,42,137,84,206,111C274.3,138,343,150,411,141C480,132,549,102,617,87C685.7,72,754,72,823,84C891.4,96,960,120,1029,108C1097.1,96,1166,48,1234,39C1302.9,30,1371,60,1440,87C1508.6,114,1577,138,1646,129C1714.3,120,1783,78,1851,69C1920,60,1989,84,2057,93C2125.7,102,2194,96,2263,84C2331.4,72,2400,54,2469,39C2537.1,24,2606,12,2674,27C2742.9,42,2811,84,2880,90C2948.6,96,3017,66,3086,51C3154.3,36,3223,36,3291,54C3360,72,3429,108,3497,126C3565.7,144,3634,144,3703,147C3771.4,150,3840,156,3909,150C3977.1,144,4046,126,4114,102C4182.9,78,4251,48,4320,42C4388.6,36,4457,54,4526,57C4594.3,60,4663,48,4731,51C4800,54,4869,72,4903,81L4937.1,90L4937.1,180L4902.9,180C4868.6,180,4800,180,4731,180C4662.9,180,4594,180,4526,180C4457.1,180,4389,180,4320,180C4251.4,180,4183,180,4114,180C4045.7,180,3977,180,3909,180C3840,180,3771,180,3703,180C3634.3,180,3566,180,3497,180C3428.6,180,3360,180,3291,180C3222.9,180,3154,180,3086,180C3017.1,180,2949,180,2880,180C2811.4,180,2743,180,2674,180C2605.7,180,2537,180,2469,180C2400,180,2331,180,2263,180C2194.3,180,2126,180,2057,180C1988.6,180,1920,180,1851,180C1782.9,180,1714,180,1646,180C1577.1,180,1509,180,1440,180C1371.4,180,1303,180,1234,180C1165.7,180,1097,180,1029,180C960,180,891,180,823,180C754.3,180,686,180,617,180C548.6,180,480,180,411,180C342.9,180,274,180,206,180C137.1,180,69,180,34,180L0,180Z"
                    ></path>
                </svg>
                <svg
                    id="wave"
                    className="absolute top-0"
                    style={{ transform: 'rotate(180deg)', transition: '0.3s' }}
                    viewBox="0 0 1440 180"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
                            <stop stopColor="rgba(255, 255, 255, 1)" offset="0%" />
                            <stop stopColor="rgba(255, 255, 255, 1)" offset="100%" />
                        </linearGradient>
                    </defs>
                    <path
                        style={{ transform: 'translate(0, 0px)', opacity: 1 }}
                        fill="url(#sw-gradient-0)"
                        d="M0,0L34.3,21C68.6,42,137,84,206,111C274.3,138,343,150,411,141C480,132,549,102,617,87C685.7,72,754,72,823,84C891.4,96,960,120,1029,108C1097.1,96,1166,48,1234,39C1302.9,30,1371,60,1440,87C1508.6,114,1577,138,1646,129C1714.3,120,1783,78,1851,69C1920,60,1989,84,2057,93C2125.7,102,2194,96,2263,84C2331.4,72,2400,54,2469,39C2537.1,24,2606,12,2674,27C2742.9,42,2811,84,2880,90C2948.6,96,3017,66,3086,51C3154.3,36,3223,36,3291,54C3360,72,3429,108,3497,126C3565.7,144,3634,144,3703,147C3771.4,150,3840,156,3909,150C3977.1,144,4046,126,4114,102C4182.9,78,4251,48,4320,42C4388.6,36,4457,54,4526,57C4594.3,60,4663,48,4731,51C4800,54,4869,72,4903,81L4937.1,90L4937.1,180L4902.9,180C4868.6,180,4800,180,4731,180C4662.9,180,4594,180,4526,180C4457.1,180,4389,180,4320,180C4251.4,180,4183,180,4114,180C4045.7,180,3977,180,3909,180C3840,180,3771,180,3703,180C3634.3,180,3566,180,3497,180C3428.6,180,3360,180,3291,180C3222.9,180,3154,180,3086,180C3017.1,180,2949,180,2880,180C2811.4,180,2743,180,2674,180C2605.7,180,2537,180,2469,180C2400,180,2331,180,2263,180C2194.3,180,2126,180,2057,180C1988.6,180,1920,180,1851,180C1782.9,180,1714,180,1646,180C1577.1,180,1509,180,1440,180C1371.4,180,1303,180,1234,180C1165.7,180,1097,180,1029,180C960,180,891,180,823,180C754.3,180,686,180,617,180C548.6,180,480,180,411,180C342.9,180,274,180,206,180C137.1,180,69,180,34,180L0,180Z"
                    ></path>
                </svg>
                <div className="container mx-auto  pt-8 pb-14 md:py-24 lg:py-44 px-1 lg:px-8">
                    <div className="lg:flex gap-14">
                        <div className="lg:w-1/2 pr-10 pt-10">
                            <h2 className="font-bold text-2xl md:text-3xl lg:text-5xl text-stone-900">Get In Touch</h2>
                            <p className="pt-4 text-stone-900">
                                Our team of committed professionals is here to help with any
                                questions or concerns you may have. We are proud to deliver
                                exceptional customer support and look forward to connecting
                                with you.
                            </p>

                            <ul className="mt-5">
                                <li className="pt-6 flex gap-7 items-center">
                                    <div className="h-14 w-14  flex items-center justify-center contact_item">
                                        <svg className="text-blue-500" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 16 16"><path fill="none" stroke="currentColor" d="M8 4v4l3 3M8 2v1m0 10v1M2 8h1m10 0h1m.5 0a6.5 6.5 0 1 1-13 0a6.5 6.5 0 0 1 13 0Z" /></svg>
                                    </div>
                                    <div>
                                        <label className="text-lg font-bold text-neutral-900">
                                            Working Hours
                                        </label>
                                        <span className="block text-stone-500">
                                            Monday to Friday
                                            <br />
                                            09:00 am to 06:00 pm

                                        </span>
                                    </div>
                                </li>
                                <li className="pt-6 flex gap-7 items-center">
                                    <div className="h-14 w-14  flex items-center justify-center contact_item">
                                        <svg className="text-blue-500" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M5 20a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3zM7.625 8.22a1 1 0 1 0-1.25 1.56l3.75 3.001a3 3 0 0 0 3.75 0l3.75-3a1 1 0 1 0-1.25-1.562l-3.75 3a1 1 0 0 1-1.25 0z" clip-rule="evenodd" /></svg>
                                    </div>
                                    <div>
                                        <label className="text-lg font-bold text-neutral-900">
                                            Email
                                        </label>
                                        <a href="mailto:03093994393" className="block text-stone-500">
                                            info@examplexyz.com

                                        </a>
                                    </div>
                                </li>
                                <li className="pt-6 flex gap-7 items-center">
                                    <div className="h-14 w-14  flex items-center justify-center contact_item">
                                        <svg className="text-blue-500" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><g fill="currentColor"><path d="M22 12A10 10 0 0 0 12 2v2a8 8 0 0 1 7.391 4.938A8 8 0 0 1 20 12zM2 10V5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H6a8 8 0 0 0 8 8v-2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5C7.373 22 2 16.627 2 10" /><path d="M17.543 9.704A6 6 0 0 1 18 12h-1.8A4.2 4.2 0 0 0 12 7.8V6a6 6 0 0 1 5.543 3.704" /></g></svg>
                                    </div>
                                    <div>
                                        <label className="text-lg font-bold text-neutral-900">
                                            Phone:
                                        </label>
                                        <a href="mailto:03093994393" className="block text-stone-500">
                                            0303 865 8237
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="lg:w-1/2 mt-6 md:mt-20 lg:mt-0">
                            <div className="flex justify-center">
                                <div className="w-full px-5 md:px-10 py-5  md:py-10 bg-blue-100 contact_from rounded-3xl"
                                    data-aos="zoom-in-up"
                                    data-aos-easing="ease-out-cubic"
                                    data-aos-duration="1000"
                                    data-aos-delay="500">
                                    <h2 className="font-bold text-2xl mt-2">Contact Us</h2>
                                    <p className="my-2 text-zinc-400">Please complete the form below to discover more about our services.</p>
                                    <Box
                                        component="form"
                                        sx={{ '& .MuiTextField-root': { m: 1, width: '100%' } }}
                                        noValidate
                                        autoComplete="off"
                                    >
                                        <div>
                                            <TextField

                                                label="Your Name"
                                                type="text"
                                                sx={textFeild}
                                            />
                                            <TextField

                                                label="Your Phone Number"
                                                type="number"
                                                sx={textFeild}

                                            />
                                            <TextField

                                                label="Your E-mail"
                                                type="email"
                                                sx={textFeild}

                                            />
                                            <TextField

                                                label="Subject"
                                                type="text"
                                                sx={textFeild}

                                            />
                                            <TextField
                                                id="outlined-multiline-static"
                                                label="Your Message"
                                                multiline
                                                rows={4} t
                                                fullWidth
                                                variant="outlined"
                                                sx={textFeild} s
                                            />
                                            <Button
                                                variant="outlined"
                                                sx={{
                                                    width: "150px",
                                                    height: "50px",
                                                    fontSize: "18px",
                                                    color: '#41B9EE',
                                                    margin: "8px",
                                                    color: "#fff",
                                                    borderRadius: '20px',
                                                    backgroundColor: '#3B82F6',
                                                    '&:hover': {
                                                        backgroundColor: '#068AD3',
                                                    },
                                                }}
                                            >Submit</Button>
                                        </div>

                                    </Box>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
export default ContactUs;
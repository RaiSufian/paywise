import { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";

const FaqsList = () => {

    const [loading, setLoading] = useState(false);
    const initialFormValues = {
        name: '',
        phone: '',
        email: '',
        message: '',
    };
    const [formValues, setFormValues] = useState(initialFormValues);
    const [formErrors, setFormErrors] = useState({
        name: '',
        phone: '',
        email: '',
    });
    // on form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = {};
        if (!formValues.name.trim()) errors.name = 'Name is required';
        if (!formValues.phone.trim()) errors.phone = 'Phone number is required';
        if (!formValues.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email)) {
            errors.email = 'Enter a valid email address';
        }

        setFormErrors(errors);

        if (Object.keys(errors).length === 0) {
            // console.log('Form Submitted:', formValues);
            setLoading(true);
            axios.post(`index.php?action=contact_us&cu_name=${formValues.name}&cu_phone=${formValues.phone}&cu_email=${formValues.email}&cu_message=${formValues.message}`)
                .then((resp) => {
                    // console.log("contact us form resp is:", resp);
                    if (resp.status == 200) {
                        setFormValues(initialFormValues);
                        toast.success('Thank you Contact Us', {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                        });
                    }
                    setLoading(false);
                })
                .catch((error) => {
                    setLoading(false);
                    console.log("contact us from error is:", error);
                })
        } else {
            toast.warning('Please fill in all the required fields', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    };
    // update value of formvalues
    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));


        setFormErrors((prevErrors) => ({
            ...prevErrors,
            [name]: '',
        }));

    };


    const [faqs, setFaqs] = useState([]);


    const getFaqs = async () => {
        try {
            const response = await axios.get("https://paywizelimited.co.uk/api/index.php?action=get_faqs");
            console.log("FAQs data:", response.data.data);
            if (response.status == 200) {
                setFaqs(response.data.data);
            }
            // .data contains the response body
        } catch (error) {
            console.error("Error fetching FAQs:", error.message); // Provide error details
        }
    };

    useEffect(() => {
        getFaqs();
    }, [])

    const [accordItem, setAccordItem] = useState(0);
    const textFeild = {
        backgroundColor: 'transparent',
        borderRadius: "50px",
        color: 'white',
        '& .MuiOutlinedInput-root': {
            borderRadius: '20px',
            borderColor: 'white',

            '& fieldset': {
                borderColor: 'white',         // Ensure the fieldset (border) is also white
            },
            '&:hover fieldset': {
                borderColor: 'white',         // Keep border white on hover
            },
            '&.Mui-focused fieldset': {
                borderColor: 'white',
            },
            color: 'white',
        },
        '& .MuiInputLabel-root': {
            color: 'white',
        },
        '& .MuiInputLabel-root.Mui-focused': {
            color: 'white',
        },
    }

    return (


        <section className="container mx-auto lg:flex flex-wrap px-6 pb-10">
            <ToastContainer />
            <div className="w-full lg:w-3/5 lg:pr-3">
                <h2 className="text-sm text-blue-500  mb-2">FAQ's</h2>
                <h3 className="text-4xl pb-8 font-bold text-slate-700 mb-4">Frequently Ask Questions</h3>
                <div className="my-5">


                    {
                        faqs.map((item) => {
                            return (
                                <div className="accordion-item" key={item.faq_id}>
                                    <div className="px-5 py-6 flex gap-3 cursor-pointer" onClick={accordItem == item.faq_id ? () => setAccordItem(0) : () => setAccordItem(item.faq_id)}>
                                        {
                                            accordItem == item.faq_id
                                                ?
                                                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><mask id="lineMdWatchOff0"><g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="12" r="0" fill="#fff" stroke="none"><animate fill="freeze" attributeName="r" dur="0.2s" values="0;3" /></circle><path d="M4 12c1.38 -0.77 4.42 -1.3 8 -1.3c3.58 0 6.62 0.53 8 1.3c-1.38 0.77 -4.42 1.3 -8 1.3c-3.58 0 -6.62 -0.53 -8 -1.3Z"><animate fill="freeze" attributeName="d" dur="0.5s" values="M4 12c1.38 -0.77 4.42 -1.3 8 -1.3c3.58 0 6.62 0.53 8 1.3c-1.38 0.77 -4.42 1.3 -8 1.3c-3.58 0 -6.62 -0.53 -8 -1.3Z;M2 12c1.72 -3.83 5.53 -6.5 10 -6.5c4.47 0 8.28 2.67 10 6.5c-1.72 3.83 -5.53 6.5 -10 6.5c-4.47 0 -8.28 -2.67 -10 -6.5Z" /></path><path stroke="#000" stroke-dasharray="28" stroke-dashoffset="28" d="M0 11h24" transform="rotate(45 12 12)"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.4s" values="28;0" /></path><path stroke-dasharray="28" stroke-dashoffset="28" d="M0 13h24" transform="rotate(45 12 12)"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.4s" values="28;0" /></path></g></mask><rect width="24" height="24" fill="currentColor" mask="url(#lineMdWatchOff0)" /></svg>
                                                :
                                                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><circle cx="12" cy="12" r="0" fill="currentColor"><animate fill="freeze" attributeName="r" dur="0.2s" values="0;3" /></circle><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12c1.38 -0.77 4.42 -1.3 8 -1.3c3.58 0 6.62 0.53 8 1.3c-1.38 0.77 -4.42 1.3 -8 1.3c-3.58 0 -6.62 -0.53 -8 -1.3Z"><animate fill="freeze" attributeName="d" dur="0.5s" values="M4 12c1.38 -0.77 4.42 -1.3 8 -1.3c3.58 0 6.62 0.53 8 1.3c-1.38 0.77 -4.42 1.3 -8 1.3c-3.58 0 -6.62 -0.53 -8 -1.3Z;M2 12c1.72 -3.83 5.53 -6.5 10 -6.5c4.47 0 8.28 2.67 10 6.5c-1.72 3.83 -5.53 6.5 -10 6.5c-4.47 0 -8.28 -2.67 -10 -6.5Z" /></path></svg>
                                        }
                                        <h4 className="text-lg text-blue-500 font-bold">{item.faq_question}</h4>
                                    </div>
                                    <div className={`px-5 overflow-hidden transition-all duration-300 ${accordItem == item.faq_id ? "pb-6 opacity-100" : "max-h-0 opacity-0"}`}
                                        style={{
                                            transitionProperty: 'max-height, opacity',
                                        }}>
                                        <p className="text-stone-500">
                                            {item.faq_answer}
                                        </p>
                                    </div>
                                </div>
                            )
                        })
                    }


                </div>
            </div >
            <div className="w-full lg:w-2/5 lg:pl-6">
                <div className="faqs_form py-10 px-7 ">
                    <h3 className="font-bold text-3xl text-white mb-6"> <span className="text-black">Do</span> You Have More Questions?</h3>
                    <Box
                        component="form"
                        sx={{ '& .MuiTextField-root': { m: 1, width: '100%' } }}
                        noValidate
                        autoComplete="off"
                        onSubmit={handleSubmit}
                    >
                        <div>
                            <TextField

                                label="Your Name"
                                type="text"
                                sx={textFeild}
                                name="name"
                                value={formValues.name}
                                onChange={handleChange}
                                error={!!formErrors.name}
                                helperText={formErrors.name}
                            />
                            <TextField

                                label="Your Phone Number"
                                type="number"
                                sx={textFeild}
                                name="phone"
                                value={formValues.phone}
                                onChange={handleChange}
                                error={!!formErrors.phone}
                                helperText={formErrors.phone}

                            />
                            <TextField

                                label="Your E-mail"
                                type="email"
                                sx={textFeild}
                                name="email"
                                value={formValues.email}
                                onChange={handleChange}
                                error={!!formErrors.email}
                                helperText={formErrors.email}

                            />
                            {/* <TextField
                                               
                                                label="Subject"
                                                type="text"
                                                sx={textFeild}

                                            /> */}
                            <TextField
                                id="outlined-multiline-static"
                                label="Your Message"
                                multiline
                                rows={4}
                                fullWidth
                                variant="outlined"
                                sx={textFeild}
                                value={formValues.message}
                                onChange={handleChange}
                                name="message"
                            />
                            <Button
                                variant="outlined"
                                sx={{
                                    width: "100%",
                                    height: "50px",
                                    fontSize: "18px",

                                    margin: "8px",
                                    borderColor: 'white',
                                    borderRadius: '20px',
                                    backgroundColor: 'white',
                                    '&:hover': {
                                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                        borderColor: 'white',
                                    },
                                }}
                                type="submit"
                            >{loading ? <CircularProgress size={24} color="inherit" /> : "Submit"}</Button>
                        </div>

                    </Box>
                </div>
            </div>
        </section >



    )
}

export default FaqsList;
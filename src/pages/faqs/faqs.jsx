import { useState } from "react";
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

                    <div className="accordion-item">
                        <div className="px-5 py-6 flex gap-3 cursor-pointer" onClick={accordItem == 1 ? () => setAccordItem(0) : () => setAccordItem(1)}>
                            {
                                accordItem == 1
                                    ?
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><mask id="lineMdWatchOff0"><g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="12" r="0" fill="#fff" stroke="none"><animate fill="freeze" attributeName="r" dur="0.2s" values="0;3" /></circle><path d="M4 12c1.38 -0.77 4.42 -1.3 8 -1.3c3.58 0 6.62 0.53 8 1.3c-1.38 0.77 -4.42 1.3 -8 1.3c-3.58 0 -6.62 -0.53 -8 -1.3Z"><animate fill="freeze" attributeName="d" dur="0.5s" values="M4 12c1.38 -0.77 4.42 -1.3 8 -1.3c3.58 0 6.62 0.53 8 1.3c-1.38 0.77 -4.42 1.3 -8 1.3c-3.58 0 -6.62 -0.53 -8 -1.3Z;M2 12c1.72 -3.83 5.53 -6.5 10 -6.5c4.47 0 8.28 2.67 10 6.5c-1.72 3.83 -5.53 6.5 -10 6.5c-4.47 0 -8.28 -2.67 -10 -6.5Z" /></path><path stroke="#000" stroke-dasharray="28" stroke-dashoffset="28" d="M0 11h24" transform="rotate(45 12 12)"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.4s" values="28;0" /></path><path stroke-dasharray="28" stroke-dashoffset="28" d="M0 13h24" transform="rotate(45 12 12)"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.4s" values="28;0" /></path></g></mask><rect width="24" height="24" fill="currentColor" mask="url(#lineMdWatchOff0)" /></svg>
                                    :
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><circle cx="12" cy="12" r="0" fill="currentColor"><animate fill="freeze" attributeName="r" dur="0.2s" values="0;3" /></circle><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12c1.38 -0.77 4.42 -1.3 8 -1.3c3.58 0 6.62 0.53 8 1.3c-1.38 0.77 -4.42 1.3 -8 1.3c-3.58 0 -6.62 -0.53 -8 -1.3Z"><animate fill="freeze" attributeName="d" dur="0.5s" values="M4 12c1.38 -0.77 4.42 -1.3 8 -1.3c3.58 0 6.62 0.53 8 1.3c-1.38 0.77 -4.42 1.3 -8 1.3c-3.58 0 -6.62 -0.53 -8 -1.3Z;M2 12c1.72 -3.83 5.53 -6.5 10 -6.5c4.47 0 8.28 2.67 10 6.5c-1.72 3.83 -5.53 6.5 -10 6.5c-4.47 0 -8.28 -2.67 -10 -6.5Z" /></path></svg>
                            }
                            <h4 className="text-lg text-blue-500 font-bold">What is an umbrella company?</h4>
                        </div>
                        <div className={`px-5 overflow-hidden transition-all duration-300 ${accordItem == 1 ? "pb-6 opacity-100" : "max-h-0 opacity-0"}`}
                            style={{
                                transitionProperty: 'max-height, opacity',
                            }}>
                            <p className="text-stone-500">
                                An umbrella company is a business that acts as an intermediary between contractors and their clients or recruitment agencies. The umbrella company handles invoicing, tax and National Insurance contributions, and other administrative tasks on behalf of the contractor.
                            </p>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <div className="px-5 py-6 flex gap-3 cursor-pointer" onClick={accordItem == 2 ? () => setAccordItem(0) : () => setAccordItem(2)}>
                            {
                                accordItem == 2
                                    ?
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><mask id="lineMdWatchOff0"><g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="12" r="0" fill="#fff" stroke="none"><animate fill="freeze" attributeName="r" dur="0.2s" values="0;3" /></circle><path d="M4 12c1.38 -0.77 4.42 -1.3 8 -1.3c3.58 0 6.62 0.53 8 1.3c-1.38 0.77 -4.42 1.3 -8 1.3c-3.58 0 -6.62 -0.53 -8 -1.3Z"><animate fill="freeze" attributeName="d" dur="0.5s" values="M4 12c1.38 -0.77 4.42 -1.3 8 -1.3c3.58 0 6.62 0.53 8 1.3c-1.38 0.77 -4.42 1.3 -8 1.3c-3.58 0 -6.62 -0.53 -8 -1.3Z;M2 12c1.72 -3.83 5.53 -6.5 10 -6.5c4.47 0 8.28 2.67 10 6.5c-1.72 3.83 -5.53 6.5 -10 6.5c-4.47 0 -8.28 -2.67 -10 -6.5Z" /></path><path stroke="#000" stroke-dasharray="28" stroke-dashoffset="28" d="M0 11h24" transform="rotate(45 12 12)"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.4s" values="28;0" /></path><path stroke-dasharray="28" stroke-dashoffset="28" d="M0 13h24" transform="rotate(45 12 12)"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.4s" values="28;0" /></path></g></mask><rect width="24" height="24" fill="currentColor" mask="url(#lineMdWatchOff0)" /></svg>
                                    :
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><circle cx="12" cy="12" r="0" fill="currentColor"><animate fill="freeze" attributeName="r" dur="0.2s" values="0;3" /></circle><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12c1.38 -0.77 4.42 -1.3 8 -1.3c3.58 0 6.62 0.53 8 1.3c-1.38 0.77 -4.42 1.3 -8 1.3c-3.58 0 -6.62 -0.53 -8 -1.3Z"><animate fill="freeze" attributeName="d" dur="0.5s" values="M4 12c1.38 -0.77 4.42 -1.3 8 -1.3c3.58 0 6.62 0.53 8 1.3c-1.38 0.77 -4.42 1.3 -8 1.3c-3.58 0 -6.62 -0.53 -8 -1.3Z;M2 12c1.72 -3.83 5.53 -6.5 10 -6.5c4.47 0 8.28 2.67 10 6.5c-1.72 3.83 -5.53 6.5 -10 6.5c-4.47 0 -8.28 -2.67 -10 -6.5Z" /></path></svg>
                            }
                            <h4 className="text-lg text-blue-500 font-bold">How does using an umbrella company benefit me?</h4>
                        </div>
                        <div className={`px-5 overflow-hidden transition-all duration-300 ${accordItem == 2 ? "pb-6 opacity-100" : "max-h-0 opacity-0"}`}
                            style={{
                                transitionProperty: 'max-height, opacity',
                            }}>
                            <p className="text-stone-500">
                                Using an umbrella company can make your life as a contractor much easier, as they take care of all the admin and paperwork associated with contracting. You’ll also have access to employee benefits, such as sick pay and holiday pay, which you wouldn’t get if you were working as a sole trader.                            </p>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <div className="px-5 py-6 flex gap-3 cursor-pointer" onClick={accordItem == 3 ? () => setAccordItem(0) : () => setAccordItem(3)}>
                            {
                                accordItem == 3
                                    ?
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><mask id="lineMdWatchOff0"><g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="12" r="0" fill="#fff" stroke="none"><animate fill="freeze" attributeName="r" dur="0.2s" values="0;3" /></circle><path d="M4 12c1.38 -0.77 4.42 -1.3 8 -1.3c3.58 0 6.62 0.53 8 1.3c-1.38 0.77 -4.42 1.3 -8 1.3c-3.58 0 -6.62 -0.53 -8 -1.3Z"><animate fill="freeze" attributeName="d" dur="0.5s" values="M4 12c1.38 -0.77 4.42 -1.3 8 -1.3c3.58 0 6.62 0.53 8 1.3c-1.38 0.77 -4.42 1.3 -8 1.3c-3.58 0 -6.62 -0.53 -8 -1.3Z;M2 12c1.72 -3.83 5.53 -6.5 10 -6.5c4.47 0 8.28 2.67 10 6.5c-1.72 3.83 -5.53 6.5 -10 6.5c-4.47 0 -8.28 -2.67 -10 -6.5Z" /></path><path stroke="#000" stroke-dasharray="28" stroke-dashoffset="28" d="M0 11h24" transform="rotate(45 12 12)"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.4s" values="28;0" /></path><path stroke-dasharray="28" stroke-dashoffset="28" d="M0 13h24" transform="rotate(45 12 12)"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.4s" values="28;0" /></path></g></mask><rect width="24" height="24" fill="currentColor" mask="url(#lineMdWatchOff0)" /></svg>
                                    :
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><circle cx="12" cy="12" r="0" fill="currentColor"><animate fill="freeze" attributeName="r" dur="0.2s" values="0;3" /></circle><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12c1.38 -0.77 4.42 -1.3 8 -1.3c3.58 0 6.62 0.53 8 1.3c-1.38 0.77 -4.42 1.3 -8 1.3c-3.58 0 -6.62 -0.53 -8 -1.3Z"><animate fill="freeze" attributeName="d" dur="0.5s" values="M4 12c1.38 -0.77 4.42 -1.3 8 -1.3c3.58 0 6.62 0.53 8 1.3c-1.38 0.77 -4.42 1.3 -8 1.3c-3.58 0 -6.62 -0.53 -8 -1.3Z;M2 12c1.72 -3.83 5.53 -6.5 10 -6.5c4.47 0 8.28 2.67 10 6.5c-1.72 3.83 -5.53 6.5 -10 6.5c-4.47 0 -8.28 -2.67 -10 -6.5Z" /></path></svg>
                            }                            <h4 className="text-lg text-blue-500 font-bold">How do I join paywize Umbrella?</h4>
                        </div>
                        <div className={`px-5 overflow-hidden transition-all duration-300 ${accordItem == 3 ? "pb-6 opacity-100" : "max-h-0 opacity-0"}`}
                            style={{
                                transitionProperty: 'max-height, opacity',
                            }}>
                            <p className="text-stone-500">
                                Joining paywize Umbrella is easy – simply fill out our registration form on the website, or give us a call on 0203 865 8237. We’ll then guide you through the process of setting up your employment with us, and we’ll take care of everything else from there.                            </p>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <div className="px-5 py-6 flex gap-3 cursor-pointer" onClick={accordItem == 4 ? () => setAccordItem(0) : () => setAccordItem(4)}>
                            {
                                accordItem == 4
                                    ?
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><mask id="lineMdWatchOff0"><g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="12" r="0" fill="#fff" stroke="none"><animate fill="freeze" attributeName="r" dur="0.2s" values="0;3" /></circle><path d="M4 12c1.38 -0.77 4.42 -1.3 8 -1.3c3.58 0 6.62 0.53 8 1.3c-1.38 0.77 -4.42 1.3 -8 1.3c-3.58 0 -6.62 -0.53 -8 -1.3Z"><animate fill="freeze" attributeName="d" dur="0.5s" values="M4 12c1.38 -0.77 4.42 -1.3 8 -1.3c3.58 0 6.62 0.53 8 1.3c-1.38 0.77 -4.42 1.3 -8 1.3c-3.58 0 -6.62 -0.53 -8 -1.3Z;M2 12c1.72 -3.83 5.53 -6.5 10 -6.5c4.47 0 8.28 2.67 10 6.5c-1.72 3.83 -5.53 6.5 -10 6.5c-4.47 0 -8.28 -2.67 -10 -6.5Z" /></path><path stroke="#000" stroke-dasharray="28" stroke-dashoffset="28" d="M0 11h24" transform="rotate(45 12 12)"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.4s" values="28;0" /></path><path stroke-dasharray="28" stroke-dashoffset="28" d="M0 13h24" transform="rotate(45 12 12)"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.4s" values="28;0" /></path></g></mask><rect width="24" height="24" fill="currentColor" mask="url(#lineMdWatchOff0)" /></svg>
                                    :
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><circle cx="12" cy="12" r="0" fill="currentColor"><animate fill="freeze" attributeName="r" dur="0.2s" values="0;3" /></circle><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12c1.38 -0.77 4.42 -1.3 8 -1.3c3.58 0 6.62 0.53 8 1.3c-1.38 0.77 -4.42 1.3 -8 1.3c-3.58 0 -6.62 -0.53 -8 -1.3Z"><animate fill="freeze" attributeName="d" dur="0.5s" values="M4 12c1.38 -0.77 4.42 -1.3 8 -1.3c3.58 0 6.62 0.53 8 1.3c-1.38 0.77 -4.42 1.3 -8 1.3c-3.58 0 -6.62 -0.53 -8 -1.3Z;M2 12c1.72 -3.83 5.53 -6.5 10 -6.5c4.47 0 8.28 2.67 10 6.5c-1.72 3.83 -5.53 6.5 -10 6.5c-4.47 0 -8.28 -2.67 -10 -6.5Z" /></path></svg>
                            }
                            <h4 className="text-lg text-blue-500 font-bold">How much will I get paid through paywize Umbrella?</h4>
                        </div>
                        <div className={`px-5 overflow-hidden transition-all duration-300 ${accordItem == 4 ? "pb-6 opacity-100" : "max-h-0 opacity-0"}`}
                            style={{
                                transitionProperty: 'max-height, opacity',
                            }}>
                            <p className="text-stone-500">
                                Your take-home pay will depend on a number of factors, including the rate you charge, the amount of tax you pay, and any other deductions such as National Insurance contributions. We’ll give you an estimate of your take-home pay when you sign up, so you know what to expect.                            </p>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <div className="px-5 py-6 flex gap-3 cursor-pointer" onClick={accordItem == 5 ? () => setAccordItem(0) : () => setAccordItem(5)}>
                            {
                                accordItem == 5
                                    ?
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><mask id="lineMdWatchOff0"><g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="12" r="0" fill="#fff" stroke="none"><animate fill="freeze" attributeName="r" dur="0.2s" values="0;3" /></circle><path d="M4 12c1.38 -0.77 4.42 -1.3 8 -1.3c3.58 0 6.62 0.53 8 1.3c-1.38 0.77 -4.42 1.3 -8 1.3c-3.58 0 -6.62 -0.53 -8 -1.3Z"><animate fill="freeze" attributeName="d" dur="0.5s" values="M4 12c1.38 -0.77 4.42 -1.3 8 -1.3c3.58 0 6.62 0.53 8 1.3c-1.38 0.77 -4.42 1.3 -8 1.3c-3.58 0 -6.62 -0.53 -8 -1.3Z;M2 12c1.72 -3.83 5.53 -6.5 10 -6.5c4.47 0 8.28 2.67 10 6.5c-1.72 3.83 -5.53 6.5 -10 6.5c-4.47 0 -8.28 -2.67 -10 -6.5Z" /></path><path stroke="#000" stroke-dasharray="28" stroke-dashoffset="28" d="M0 11h24" transform="rotate(45 12 12)"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.4s" values="28;0" /></path><path stroke-dasharray="28" stroke-dashoffset="28" d="M0 13h24" transform="rotate(45 12 12)"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.4s" values="28;0" /></path></g></mask><rect width="24" height="24" fill="currentColor" mask="url(#lineMdWatchOff0)" /></svg>
                                    :
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><circle cx="12" cy="12" r="0" fill="currentColor"><animate fill="freeze" attributeName="r" dur="0.2s" values="0;3" /></circle><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12c1.38 -0.77 4.42 -1.3 8 -1.3c3.58 0 6.62 0.53 8 1.3c-1.38 0.77 -4.42 1.3 -8 1.3c-3.58 0 -6.62 -0.53 -8 -1.3Z"><animate fill="freeze" attributeName="d" dur="0.5s" values="M4 12c1.38 -0.77 4.42 -1.3 8 -1.3c3.58 0 6.62 0.53 8 1.3c-1.38 0.77 -4.42 1.3 -8 1.3c-3.58 0 -6.62 -0.53 -8 -1.3Z;M2 12c1.72 -3.83 5.53 -6.5 10 -6.5c4.47 0 8.28 2.67 10 6.5c-1.72 3.83 -5.53 6.5 -10 6.5c-4.47 0 -8.28 -2.67 -10 -6.5Z" /></path></svg>
                            }
                            <h4 className="text-lg text-blue-500 font-bold">Do I have to use paywize Umbrella's recommended pension scheme?</h4>
                        </div>
                        <div className={`px-5 overflow-hidden transition-all duration-300 ${accordItem == 5 ? "pb-6 opacity-100" : "max-h-0 opacity-0"}`}
                            style={{
                                transitionProperty: 'max-height, opacity',
                            }}>
                            <p className="text-stone-500">
                                No, you’re free to choose your own pension scheme if you prefer. However, we do recommend our pension scheme as it’s designed specifically for contractors and offers a range of benefits, including lower fees and tax relief.                            </p>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <div className="px-5 py-6 flex gap-3 cursor-pointer" onClick={accordItem == 6 ? () => setAccordItem(0) : () => setAccordItem(6)}>
                            {
                                accordItem == 6
                                    ?
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><mask id="lineMdWatchOff0"><g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="12" r="0" fill="#fff" stroke="none"><animate fill="freeze" attributeName="r" dur="0.2s" values="0;3" /></circle><path d="M4 12c1.38 -0.77 4.42 -1.3 8 -1.3c3.58 0 6.62 0.53 8 1.3c-1.38 0.77 -4.42 1.3 -8 1.3c-3.58 0 -6.62 -0.53 -8 -1.3Z"><animate fill="freeze" attributeName="d" dur="0.5s" values="M4 12c1.38 -0.77 4.42 -1.3 8 -1.3c3.58 0 6.62 0.53 8 1.3c-1.38 0.77 -4.42 1.3 -8 1.3c-3.58 0 -6.62 -0.53 -8 -1.3Z;M2 12c1.72 -3.83 5.53 -6.5 10 -6.5c4.47 0 8.28 2.67 10 6.5c-1.72 3.83 -5.53 6.5 -10 6.5c-4.47 0 -8.28 -2.67 -10 -6.5Z" /></path><path stroke="#000" stroke-dasharray="28" stroke-dashoffset="28" d="M0 11h24" transform="rotate(45 12 12)"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.4s" values="28;0" /></path><path stroke-dasharray="28" stroke-dashoffset="28" d="M0 13h24" transform="rotate(45 12 12)"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.4s" values="28;0" /></path></g></mask><rect width="24" height="24" fill="currentColor" mask="url(#lineMdWatchOff0)" /></svg>
                                    :
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><circle cx="12" cy="12" r="0" fill="currentColor"><animate fill="freeze" attributeName="r" dur="0.2s" values="0;3" /></circle><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12c1.38 -0.77 4.42 -1.3 8 -1.3c3.58 0 6.62 0.53 8 1.3c-1.38 0.77 -4.42 1.3 -8 1.3c-3.58 0 -6.62 -0.53 -8 -1.3Z"><animate fill="freeze" attributeName="d" dur="0.5s" values="M4 12c1.38 -0.77 4.42 -1.3 8 -1.3c3.58 0 6.62 0.53 8 1.3c-1.38 0.77 -4.42 1.3 -8 1.3c-3.58 0 -6.62 -0.53 -8 -1.3Z;M2 12c1.72 -3.83 5.53 -6.5 10 -6.5c4.47 0 8.28 2.67 10 6.5c-1.72 3.83 -5.53 6.5 -10 6.5c-4.47 0 -8.28 -2.67 -10 -6.5Z" /></path></svg>
                            }
                            <h4 className="text-lg text-blue-500 font-bold">What happens if I need to take time off work due to illness or injury?</h4>
                        </div>
                        <div className={`px-5 overflow-hidden transition-all duration-300 ${accordItem == 6 ? "pb-6 opacity-100" : "max-h-0 opacity-0"}`}
                            style={{
                                transitionProperty: 'max-height, opacity',
                            }}>
                            <p className="text-stone-500">
                                If you’re unable to work due to illness or injury, you may be entitled to sick pay through paywize Umbrella. We offer up to 28 weeks of sick pay, so you can rest assured that you’ll be taken care of if you need time off work.
                            </p>
                        </div>
                    </div>
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
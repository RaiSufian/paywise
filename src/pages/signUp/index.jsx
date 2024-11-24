import Topbar from "../../components/topbar";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import BreadCrumb from "../../components/breadcrumb";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { FormControl, FormHelperText } from "@mui/material";
import { ToastContainer, toast } from 'react-toastify';

import dayjs from 'dayjs';
import axios from "axios";

import { useState } from "react";

const SignUp = () => {
    const textField = {
        backgroundColor: 'transparent',
        borderRadius: "50px",
        marginBottom: '0px',

        '& .MuiOutlinedInput-root': {
            borderRadius: '20px',
            marginBottom: '0px',
        },
    }
    const initialFormValues = {
        title: '',
        f_name: '',
        l_name: '',
        s_name: '',
        dob: '',
        marital_statu: '',
        e_mail: '',
        h_address: '',
        post_code: '',
        mobile_num: '',
        nationality: '',
        share_code: '',
        NI_number: '',
        bank_number: '',
        account_number: '',
        sort_code: '',
        job_title: [],
        agency_name: '',
        comment: '',
        passport: '',
        bank_details: '',
        proof: '',
        confirmation: '',
        proof_right_work: '',
        proof_address: '',
        proof_ni: '',
        proof_bank: ''
    };
    const [signUp, setSignUp] = useState(initialFormValues);
    const [formErrors, setFormErrors] = useState({
        title: '',
        f_name: '',
        s_name: '',
        dob: '',
        marital_statu: '',
        e_mail: '',
        h_address: '',
        post_code: '',
        mobile_num: '',
        nationality: '',
        NI_number: '',
        bank_number: '',
        account_number: '',
        sort_code: '',
        agency_name: '',
        confirmation: '',

    });


    // Submit Form
    const handleSubmit = (e) => {
        // console.log("This form is submit", signUp);
        e.preventDefault();
        const errors = {};

        if (!signUp.title.trim()) errors.title = 'The field is required.';
        if (!signUp.f_name.trim()) errors.f_name = 'The field is required.';
        if (!signUp.s_name.trim()) errors.s_name = 'The field is required.';
        if (!signUp.dob.trim()) errors.dob = 'The field is required.';
        if (!signUp.marital_statu.trim()) errors.marital_statu = 'The field is required.';
        if (!signUp.e_mail.trim()) errors.e_mail = 'The field is required.';
        if (!signUp.h_address.trim()) errors.h_address = 'The field is required.';
        if (!signUp.post_code.trim()) errors.post_code = 'The field is required.';
        if (!signUp.mobile_num.trim()) errors.mobile_num = 'The field is required.';
        if (!signUp.nationality.trim()) errors.nationality = 'The field is required.';
        if (!signUp.NI_number.trim()) errors.NI_number = 'The field is required.';
        if (!signUp.bank_number.trim()) errors.bank_number = 'The field is required.';
        if (!signUp.account_number.trim()) errors.account_number = 'The field is required.';
        if (!signUp.sort_code.trim()) errors.sort_code = 'The field is required.';
        if (!signUp.agency_name.trim()) errors.agency_name = 'The field is required.';
        if (!signUp.confirmation.trim()) errors.confirmation = 'The field is required.';
        setFormErrors(errors);
        if (Object.keys(errors).length === 0) {
            
             console.log('Form Submitted:', signUp);
            axios.post(`index.php?action=signup&mail-address=${signUp.e_mail}&your-title=${signUp.title}&first-name=${signUp.f_name}&middle-name=${signUp.l_name}&sur-name=${signUp.s_name}&date-of-birth=${signUp.dob}&marital-status=${signUp.marital_statu == 'yes' ? true : false}&home-address=${signUp.h_address}&post-code=${signUp.post_code}&mobile-number=${signUp.mobile_num}&nationality=${signUp.nationality}&share-code=${signUp.sort_code}&ni-number=${signUp.NI_number}&bank-name=${signUp.bank_number}&account-number=${signUp.account_number}&sort-code=${signUp.sort_code}&agency-name=${signUp.agency_name}&comment=${signUp.comment}&proof-right-work=${signUp.proof_right_work}&proof-address=${signUp.proof_address}&proof-bank=${signUp.proof_bank}&proof-ni=${signUp.proof_ni}&confirmation=${signUp.confirmation}&job-title=${signUp.job_title}`,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                }
            )
                .then((resp) => {
                    console.log("Sign Up form resp is:", resp);
                    if (resp.status == 200) {
                        // setSignUp(initialFormValues);
                        toast.success('Thank you for you message. It has been send', {
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
                })
                .catch((error) => {
                    console.log("Sign Up from error is:", error);
                })
        }

    }
    // update value of formvalues
    const handleChange = (e) => {
        const { name, value } = e.target;

        setSignUp((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));


        setFormErrors((prevErrors) => ({
            ...prevErrors,
            [name]: '',
        }));

    };
    // handle checkbox values
    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;

        setSignUp((prevValues) => {
            const updatedJobTitles = checked
                ? [...prevValues.job_title, value] // Add value if checked
                : prevValues.job_title.filter((title) => title !== value); // Remove value if unchecked

            return {
                ...prevValues,
                job_title: updatedJobTitles,
            };
        });
    };

    // handle file from forms
    const handleFileChange = (e) => {
        const { name } = e.target;

        setSignUp((prevValues) => ({
            ...prevValues,
            [name]: e.target.files[0],
        }));
    }

    return (

        <>
            <ToastContainer />
            <Topbar />
            <Header />
            <BreadCrumb name="Sign Up" link="signup" />
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
                        <div className="lg:w-1/2 pr-10 pt-10 sticky top-0">
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
                                >
                                    <h2 className="font-bold text-2xl my-2">Required Payroll Information </h2>
                                    <Box
                                        component="form"
                                        sx={{ '& .MuiTextField-root': { m: 1, width: '100%' } }}
                                        noValidate

                                        onSubmit={handleSubmit}
                                        enctype="multipart/form-data"
                                    >
                                        <div>
                                            <TextField

                                                label="Title *"
                                                type="text"
                                                sx={textField}
                                                name='title'
                                                value={signUp.title}
                                                onChange={handleChange}
                                                error={!!formErrors.title}
                                                helperText={formErrors.title}
                                            />
                                            <div className="md:flex gap-3">
                                                <div className="md:w-1/2">
                                                    <TextField
                                                        label="First Name *"
                                                        type="text"
                                                        sx={textField}
                                                        name='f_name'
                                                        value={signUp.f_name}
                                                        onChange={handleChange}
                                                        error={!!formErrors.f_name}
                                                        helperText={formErrors.f_name}
                                                    />
                                                </div>
                                                <div className="md:w-1/2">
                                                    <TextField

                                                        label="Middle Name"
                                                        type="text"
                                                        sx={textField}
                                                        name='l_name'
                                                        value={signUp.l_name}
                                                        onChange={handleChange}

                                                    />
                                                </div>
                                            </div>
                                            <TextField
                                                label="Surname *"
                                                type="text"
                                                sx={textField}
                                                name='s_name'
                                                value={signUp.s_name}
                                                onChange={handleChange}
                                                error={!!formErrors.s_name}
                                                helperText={formErrors.s_name}
                                            />
                                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                <DatePicker
                                                    label="Date of Birth *"
                                                    sx={textField}
                                                    name='dob'
                                                    value={signUp.dob ? dayjs(signUp.dob) : null}
                                                    onChange={(newDate) =>
                                                        handleChange({
                                                            target: {
                                                                name: 'dob',
                                                                value: newDate ? newDate.toISOString() : null,
                                                            },
                                                        })
                                                    }
                                                    // Pass error and helperText to the internal TextField
                                                    slotProps={{
                                                        textField: {
                                                            sx: textField,
                                                            name: 'dob',
                                                            error: !!formErrors.dob,
                                                            helperText: formErrors.dob,
                                                        },
                                                    }}
                                                />
                                            </LocalizationProvider>
                                            <TextField

                                                label="Marital status *"
                                                type="text"
                                                sx={textField}
                                                name='marital_statu'
                                                value={signUp.marital_statu}
                                                onChange={handleChange}
                                                error={!!formErrors.marital_statu}
                                                helperText={formErrors.marital_statu}

                                            />
                                            <TextField

                                                label="E-mail"
                                                type="email"
                                                sx={textField}
                                                name='e_mail'
                                                value={signUp.e_mail}
                                                onChange={handleChange}
                                                error={!!formErrors.e_mail}
                                                helperText={formErrors.e_mail}

                                            />
                                            <TextField
                                                label="Home Address"
                                                type="text"
                                                sx={textField}
                                                name='h_address'
                                                value={signUp.h_address}
                                                onChange={handleChange}
                                                error={!!formErrors.h_address}
                                                helperText={formErrors.h_address}
                                            />
                                            <div className="md:flex gap-3">
                                                <div className="md:w-1/2">
                                                    <TextField
                                                        label="Post Code *"
                                                        type="text"
                                                        sx={textField}
                                                        name='post_code'
                                                        value={signUp.post_code}
                                                        onChange={handleChange}
                                                        error={!!formErrors.post_code}
                                                        helperText={formErrors.post_code}
                                                    />
                                                </div>
                                                <div className="md:w-1/2">
                                                    <TextField
                                                        label="Mobile Number"
                                                        type="Number"
                                                        sx={textField}
                                                        name='mobile_num'
                                                        value={signUp.mobile_num}
                                                        onChange={handleChange}
                                                        error={!!formErrors.mobile_num}
                                                        helperText={formErrors.mobile_num}
                                                    />
                                                </div>
                                            </div>
                                            <div className="md:flex gap-3">
                                                <div className="md:w-1/2">
                                                    <TextField
                                                        label="Nationality *"
                                                        type="text"
                                                        sx={textField}
                                                        name='nationality'
                                                        value={signUp.nationality}
                                                        onChange={handleChange}
                                                        error={!!formErrors.nationality}
                                                        helperText={formErrors.nationality}
                                                    />
                                                </div>
                                                <div className="md:w-1/2">
                                                    <TextField
                                                        label="Share Code"
                                                        type="text"
                                                        sx={textField}
                                                        name="share_code"
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                            <TextField
                                                label="NI Number*"
                                                type="text"
                                                sx={textField}
                                                name='NI_number'
                                                value={signUp.NI_number}
                                                onChange={handleChange}
                                                error={!!formErrors.NI_number}
                                                helperText={formErrors.NI_number}
                                            />
                                            <TextField
                                                label="Bank Number*"
                                                type="text"
                                                sx={textField}
                                                name='bank_number'
                                                value={signUp.bank_number}
                                                onChange={handleChange}
                                                error={!!formErrors.bank_number}
                                                helperText={formErrors.bank_number}
                                            />
                                            <TextField
                                                label="Account Number*"
                                                type="number"
                                                sx={textField}
                                                name='account_number'
                                                value={signUp.account_number}
                                                onChange={handleChange}
                                                error={!!formErrors.account_number}
                                                helperText={formErrors.account_number}
                                            />
                                            <TextField
                                                label="Sort Code*"
                                                type="number"
                                                sx={textField}
                                                name='sort_code'
                                                value={signUp.sort_code}
                                                onChange={handleChange}
                                                error={!!formErrors.sort_code}
                                                helperText={formErrors.sort_code}
                                            />
                                            <h4 className="mx-2 font-bold text-blue-500">Job Title *</h4>
                                            <div className="ml-3">
                                                <FormGroup>
                                                    <FormControlLabel required control={<Checkbox
                                                        value="RGN"
                                                        checked={signUp.job_title.includes("RGN")}
                                                        onChange={handleCheckboxChange}
                                                    />} label="RGN" />
                                                    <FormControlLabel required control={<Checkbox
                                                        value="RMN"
                                                        checked={signUp.job_title.includes("RMN")}
                                                        onChange={handleCheckboxChange}
                                                    />} label="RMN" />

                                                    <FormControlLabel required control={<Checkbox
                                                        value="BAND"
                                                        checked={signUp.job_title.includes("BAND")}
                                                        onChange={handleCheckboxChange}
                                                    />} label="BAND" />

                                                    <FormControlLabel required control={<Checkbox
                                                        value="HCA"
                                                        checked={signUp.job_title.includes("HCA")}
                                                        onChange={handleCheckboxChange}
                                                    />} label="HCA" />

                                                    <FormControlLabel required control={<Checkbox
                                                        value="ITU"
                                                        checked={signUp.job_title.includes("ITU")}
                                                        onChange={handleCheckboxChange}
                                                    />} label="ITU" />

                                                    <FormControlLabel required control={<Checkbox
                                                        value="ODP"
                                                        checked={signUp.job_title.includes("ODP")}
                                                        onChange={handleCheckboxChange}
                                                    />} label="ODP" />

                                                    <FormControlLabel required control={<Checkbox
                                                        value="RNLD"
                                                        checked={signUp.job_title.includes("RNLD")}
                                                        onChange={handleCheckboxChange}
                                                    />} label="RNLD" />

                                                    <FormControlLabel required control={<Checkbox
                                                        value="Others"
                                                        checked={signUp.job_title.includes("Others")}
                                                        onChange={handleCheckboxChange}
                                                    />} label="Others" />


                                                </FormGroup>
                                            </div>
                                            <p className="text-neutral-700 py-5">
                                                Please select as needed or write in the comments if your speciality is not mentioned
                                            </p>
                                            <TextField
                                                label="Agency Name*"
                                                type="text"
                                                sx={textField}
                                                name='agency_name'
                                                value={signUp.agency_name}
                                                onChange={handleChange}
                                                error={!!formErrors.agency_name}
                                                helperText={formErrors.agency_name}
                                            />
                                            <TextField
                                                id="outlined-multiline-static"
                                                label="Comment"
                                                multiline
                                                rows={4}
                                                fullWidth
                                                variant="outlined"
                                                sx={textField}
                                                name='comment'
                                                value={signUp.comment}
                                                onChange={handleChange}

                                            />
                                            <div className="mt-4">
                                                <h5 className="font-bold">Please Attach the documents</h5>
                                                <ol className="list-decimal">
                                                    <li className="pt-3 ml-4">
                                                        Write to work - Passport and Visa
                                                    </li>
                                                    <li className="pt-3 ml-4">
                                                        Proof of address - Utility Bill, Council tax, Driving Licence
                                                    </li>
                                                    <li className="pt-3 ml-4">
                                                        Proof of Bank Details - Bank Statement, Bank Letter, Bank Card
                                                    </li>
                                                    <li className="pt-3 ml-4">
                                                        Proof of NI - P60, P45, NI Card or Text Letter
                                                    </li>
                                                </ol>
                                            </div>
                                            <div>
                                                <div className="mt-5">
                                                    <label>RIGHT TO WORK - PASSPORT AND VISA AS REQUIRED</label>
                                                    <input
                                                        name='proof_right_work'
                                                        accept=".pdf, .doc, .docx, .jpg, .png, .jpeg, .txt, .xlsx"
                                                        type="file"
                                                        onChange={handleFileChange}
                                                        className="bg-white py-3 px-5 rounded-2xl w-full" />
                                                </div>
                                                <div className="mt-5">
                                                    <label>PROOF OF ADDRESS - UTILITY BILL, COUNCIL TAX, DRIVING LICENCE</label>
                                                    <input
                                                        name='proof_address'
                                                        accept=".pdf, .doc, .docx, .jpg, .png, .jpeg, .txt, .xlsx"
                                                        type="file"
                                                        onChange={handleFileChange}
                                                        className="bg-white py-3 px-5 rounded-2xl w-full" />
                                                </div>
                                                <div className="mt-5">
                                                    <label>PROOF OF BANK DETAILS - BANK STATEMENT</label>
                                                    <input
                                                        name='proof_bank'
                                                        accept=".pdf, .doc, .docx, .jpg, .png, .jpeg, .txt, .xlsx"
                                                        type="file"
                                                        onChange={handleFileChange}
                                                        className="bg-white py-3 px-5 rounded-2xl w-full" />
                                                </div>
                                                <div className="mt-5">
                                                    <label>PROOF OF NI - P60, P45, NI CARD OR TAX LETTER</label>
                                                    <input
                                                        name='proof_ni'
                                                        accept=".pdf, .doc, .docx, .jpg, .png, .jpeg, .txt, .xlsx"
                                                        type="file"
                                                        onChange={handleFileChange}
                                                        className="bg-white py-3 px-5 rounded-2xl w-full" />
                                                </div>
                                            </div>
                                            <p className="text-neutral-700 mt-5 pl-2">
                                                By law you will be automatically enrolled in a pension scheme.
                                                Please discuss this with our consultants for more information.
                                            </p>
                                            <p className="text-neutral-700 mt-5 pl-2">
                                                I authorize Smart Cash Umbrella to process my payroll and pay any
                                                money due to me into the above bank/building society account.
                                            </p>
                                            <div className="mt-5 mb-5 px-4 py-2 bg-white  md:w-1/2 rounded-2xl ">
                                                <FormControl
                                                    component="fieldset"
                                                    error={!!formErrors.confirmation}
                                                    helperText={formErrors.confirmation}
                                                >
                                                    <RadioGroup
                                                        row
                                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                                        name="confirmation"
                                                        value={signUp.confirmation}
                                                        onChange={handleChange}


                                                    >
                                                        <FormControlLabel value={true} control={<Radio />} label="Yes" />
                                                        <FormControlLabel value={false} control={<Radio />} label="No" />

                                                    </RadioGroup>

                                                    {formErrors.confirmation && (
                                                        <FormHelperText>{formErrors.confirmation}</FormHelperText>
                                                    )}
                                                </FormControl>
                                            </div>
                                            <Button
                                                variant="outlined"
                                                sx={{
                                                    width: "150px",
                                                    height: "50px",
                                                    fontSize: "18px",
                                                    margin: "8px",
                                                    color: "#fff",
                                                    borderRadius: '20px',
                                                    backgroundColor: '#3B82F6',
                                                    '&:hover': {
                                                        backgroundColor: '#068AD3',
                                                    },
                                                }}
                                                type="submit"
                                            >Sign Up</Button>
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
export default SignUp;
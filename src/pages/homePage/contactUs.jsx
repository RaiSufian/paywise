import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useState } from 'react';
const ContactUs = () => {
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
                borderColor: 'white',         // Keep border white when focused
            },
            color: 'white',                 // White text inside the input
        },
        '& .MuiInputLabel-root': {
            color: 'white',                 // White label text color
        },
        '& .MuiInputLabel-root.Mui-focused': {
            color: 'white',                 // White label text when focused
        },
    }

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
            setFormValues(initialFormValues);

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

        // console.log("value of are:", formValues);
    };



    return (
        <section className="" >
            <div className="container mx-auto pb-6 px-3 md:px-6">
                <div className="lg:flex items-center">
                    <div className="lg:w-1/2 md:px-20 ">
                        <div className="msg_bg text-center md:text-start">
                            <span className="mx-auto md:mx-0 w-20 h-20 bg-gray-100 items-center rounded-full flex justify-center">
                                <svg className="text-green-500" xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24"><path fill="currentColor" d="M20.605 4.17a4.67 4.67 0 0 0-3.33-1.38H6.705a4.71 4.71 0 0 0-4.71 4.72v6.6a4.71 4.71 0 0 0 4.71 4.72h2.33l1.95 1.94c.127.143.284.255.46.33c.175.072.361.11.55.11q.286-.004.55-.11a1.6 1.6 0 0 0 .44-.31l2-2h2.33a4.7 4.7 0 0 0 3.33-1.38a4.8 4.8 0 0 0 1-1.53c.234-.575.357-1.19.36-1.81v-6.6a4.67 4.67 0 0 0-1.4-3.3m-13.24 8.17a1.66 1.66 0 1 1 1.66-1.66a1.67 1.67 0 0 1-1.66 1.66m4.63 0a1.66 1.66 0 1 1 0-3.32a1.66 1.66 0 0 1 0 3.32m4.62 0a1.66 1.66 0 1 1 1.66-1.66a1.67 1.67 0 0 1-1.66 1.66" /></svg>
                            </span>
                            <h5 className="py-4 text-2xl md:text-4xl font-semibold font-sans">Get a free consultancy <br /> from our expert right now!</h5>
                            <p className="pt-2 text-gray-500">With more than a decade of hands-on experience, our team of industry-leading experts is committed to offering exceptional contracting solutions that prioritize transparency, ease, and compliance. We understand the complexities of the contracting world, and our deep knowledge allows us to navigate these challenges effortlessly on behalf of our clients.</p>
                        </div>
                    </div>
                    <div className="lg:w-1/2 pt-5 lg:pt-0">
                        <div className="flex justify-center">
                            <div className="md:w-4/5 px-5 md:px-10 py-5  md:py-10 form_area rounded-3xl"
                                data-aos="zoom-in-up"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="1000"
                                data-aos-delay="500">

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
                                            name="message"
                                            multiline
                                            rows={4} 
                                            fullWidth
                                            variant="outlined"
                                            sx={textFeild}
                                            value={formValues.message}
                                            onChange={handleChange}

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
                                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',  // Slight white tint on hover
                                                    borderColor: 'white',
                                                },
                                            }}
                                            type="submit"
                                        >Submit</Button>
                                    </div>

                                </Box>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}
export default ContactUs;
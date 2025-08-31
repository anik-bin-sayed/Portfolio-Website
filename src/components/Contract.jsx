import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
    const formId = import.meta.env.VITE_FORMSPREE_ID
    const [state, handleSubmit] = useForm(formId);

    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const isFormValid = formData.name && formData.email && formData.message;

    if (state.succeeded) {
        return (
            <section id="contact" className="contact-section py-20 px-6 md:px-20">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 contact-title">
                        Thank You!
                    </h2>
                    <p className="contact-desc">
                        ✅ Your message has been sent successfully. I’ll get back to you soon.
                    </p>
                </div>
            </section>
        );
    }

    return (
        <section id="contact" className="contact-section py-20 px-6 md:px-20">
            <div className="max-w-3xl mx-auto text-center">
                {/* Section Header */}
                <h2 className="text-3xl md:text-4xl font-bold mb-6 contact-title">
                    Get in Touch
                </h2>
                <p className="contact-desc mb-12">
                    I'm always open to discussing new projects or opportunities. Feel free to reach out using the form below.
                </p>

                {/* Contact Form */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 contact-form">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="contact-input border border-gray-700 rounded-lg px-4 py-3"
                    />
                    <ValidationError prefix="Name" field="name" errors={state.errors} />

                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="contact-input border border-gray-700 rounded-lg px-4 py-3"
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />

                    <textarea
                        name="message"
                        rows="5"
                        placeholder="Your Message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="contact-input border border-gray-700 rounded-lg px-4 py-3 placeholder-gray-500"
                    ></textarea>
                    <ValidationError prefix="Message" field="message" errors={state.errors} />

                    <div className="relative group inline-block self-center w-full">
                        <button
                            type="submit"
                            disabled={!isFormValid || state.submitting}
                            className={`contact-btn w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300 mt-2
                ${isFormValid
                                    ? 'bg-red-700 hover:bg-red-500 cursor-pointer'
                                    : 'bg-gray-400 cursor-not-allowed'}`}
                        >
                            {state.submitting ? "Sending..." : "Send Message"}
                        </button>

                        {/* Tooltip */}
                        {!isFormValid && (
                            <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden group-hover:block 
                bg-black text-white text-xs rounded-md px-2 py-1 whitespace-nowrap shadow-md">
                                Please fill up all fields
                            </span>
                        )}
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;

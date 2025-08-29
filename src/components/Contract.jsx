import React from 'react'

const Contract = () => {
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
                <form className="flex flex-col gap-4 contact-form">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="contact-input border border-gray-700 rounded-lg px-4 py-3"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="contact-input border border-gray-700 rounded-lg px-4 py-3"
                    />
                    <textarea
                        rows="5"
                        placeholder="Your Message"
                        className="contact-input border border-gray-700 rounded-lg px-4 py-3"
                    ></textarea>
                    <button
                        type="submit"
                        className="contact-btn px-6 py-3 rounded-lg font-semibold bg-red-700 hover:bg-red-50 hover:text-blue-950 transition-all duration-300 mt-2 cursor-pointer"
                    >
                        Send Message
                    </button>
                </form>

            </div>
        </section>
    )
}

export default Contract

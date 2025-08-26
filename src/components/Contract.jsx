import React from 'react'

const Contract = () => {
    return (
        <section id="contact" className="bg-gray-900 text-white py-20 px-6 md:px-20">
            <div className="max-w-3xl mx-auto text-center">
                {/* Section Header */}
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Get in Touch
                </h2>
                <p className="text-gray-400 mb-12">
                    I'm always open to discussing new projects or opportunities. Feel free to reach out using the form below.
                </p>

                {/* Contact Form */}
                <form className="flex flex-col gap-4">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-crimson"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-crimson"
                    />
                    <textarea
                        rows="5"
                        placeholder="Your Message"
                        className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-crimson"
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-crimson text-white px-6 py-3 rounded-lg font-semibold bg-red-700 hover:bg-red-50 hover:text-blue-950 transition-all duration-300 mt-2 cursor-pointer"
                    >
                        Send Message
                    </button>
                </form>

                {/* Optional: Social Icons */}
                <div className="flex justify-center gap-6 mt-10">
                    <a href="#" className="text-gray-400 hover:text-crimson transition-colors">
                        <i className="fab fa-github fa-lg"></i>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-crimson transition-colors">
                        <i className="fab fa-linkedin fa-lg"></i>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-crimson transition-colors">
                        <i className="fab fa-twitter fa-lg"></i>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Contract
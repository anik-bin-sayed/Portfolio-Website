import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const formId = "asdfasdf1323123123";
  const [state, handleSubmit] = useForm(formId);

  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const isFormValid = formData.name && formData.email && formData.message;

  if (state.succeeded) {
    return (
      <section className="relative py-24 px-6 md:px-20 bg-[#050505] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-green-400">
            Message Sent!
          </h2>
          <p className="text-gray-400">
            Thanks for reaching out. I’ll get back to you soon.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="contact"
      className="relative w-full py-24 px-6 md:px-20 bg-[#050505] text-white overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-red-600/20 blur-[100px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-600/20 blur-[100px] rounded-full" />
      <div className="max-w-3xl mx-auto relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          <span className="bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">
            Get in Touch
          </span>
        </h2>

        <p className="text-gray-400 mb-12">
          Have a project in mind or just want to say hi? Feel free to send me a
          message.
        </p>
        <form
          onSubmit={handleSubmit}
          className="space-y-4 text-left bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-lg"
        >
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-transparent border border-white/10 focus:border-red-500 focus:outline-none transition"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-transparent border border-white/10 focus:border-red-500 focus:outline-none transition"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div>
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-transparent border border-white/10 focus:border-red-500 focus:outline-none transition"
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button
            type="submit"
            disabled={!isFormValid || state.submitting}
            className={`w-full px-6 py-3 rounded-xl font-semibold transition-all duration-300
              ${
                isFormValid
                  ? "bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 shadow-lg shadow-red-600/30 hover:shadow-red-600/50 hover:scale-105"
                  : "bg-gray-600 cursor-not-allowed"
              }`}
          >
            {state.submitting ? "Sending..." : "Send Message"}
          </button>
          {!isFormValid && (
            <p className="text-xs text-gray-500 text-center">
              Please fill all fields to enable submit
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;

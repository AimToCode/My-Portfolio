import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import TitleHeader from "../components/TitleHeader";
import ContactExperience from "../components/models/contact/ContactExperience";

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ text: "", type: "" });
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage({ text: "", type: "" });

    const serviceId = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;

    // Check if EmailJS keys are provided; if not, provide friendly feedback
    if (!serviceId || !templateId || !publicKey) {
      setTimeout(() => {
        setLoading(false);
        setStatusMessage({
          text: "Thank you for reaching out, Lakshya! (Note: Add your EmailJS keys to .env to deliver messages to your inbox directly).",
          type: "success",
        });
        setForm({ name: "", email: "", message: "" });
      }, 1000);
      return;
    }

    try {
      await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        publicKey
      );

      setStatusMessage({
        text: "Thank you! Your message has been sent successfully. I'll get back to you soon.",
        type: "success",
      });
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatusMessage({
        text: "Something went wrong while sending. Please try again or reach out on LinkedIn.",
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5 max-w-7xl mx-auto">
        <TitleHeader
          title="Get in Touch – Let’s Build Together"
          sub="💬 Have a project, question, or opportunity? Let’s connect! 🚀"
        />
        <div className="grid-12-cols mt-16 items-stretch">
          <div className="xl:col-span-5 flex flex-col justify-between">
            <div className="card-border rounded-2xl p-8 md:p-10 flex-1 flex flex-col justify-center">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white">Send a Message</h3>
                <p className="text-white-50 text-sm mt-1">
                  Based in Bhopal, MP, India &mdash; open to remote and on-site opportunities.
                </p>
              </div>

              {statusMessage.text && (
                <div
                  className={`p-4 rounded-xl text-sm mb-6 ${
                    statusMessage.type === "success"
                      ? "bg-emerald-500/20 border border-emerald-500/40 text-emerald-300"
                      : "bg-red-500/20 border border-red-500/40 text-red-300"
                  }`}
                >
                  {statusMessage.text}
                </div>
              )}

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-6"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white-50 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Sharma"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-black-200 border border-white/10 text-white placeholder-white/30 focus:border-cyan-400 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white-50 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="e.g. alex@example.com"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-black-200 border border-white/10 text-white placeholder-white/30 focus:border-cyan-400 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white-50 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, idea, or questions..."
                    rows="4"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-black-200 border border-white/10 text-white placeholder-white/30 focus:border-cyan-400 focus:outline-none transition-colors"
                  />
                </div>

                <button type="submit" disabled={loading} className="w-full">
                  <div className="cta-button group w-full">
                    <div className="bg-circle" />
                    <p className="text font-semibold">
                      {loading ? "Sending..." : "Send Message"}
                    </p>
                    <div className="arrow-wrapper">
                      <img src="/images/arrow-down.svg" alt="arrow" />
                    </div>
                  </div>
                </button>
              </form>
            </div>
          </div>

          <div className="xl:col-span-7 min-h-[420px] h-full flex flex-col">
            <div className="bg-[#cd7c2e] w-full h-full hover:cursor-grab rounded-3xl overflow-hidden shadow-2xl relative">
              <div className="absolute top-4 left-4 z-10 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white text-xs font-mono">
                🖱️ Drag to rotate 3D desk
              </div>
              <ContactExperience />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import React, { useState, useRef } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

// Social Icon
function SocialIcon(props) {
  const { url, icon: Icon } = props;
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.15, rotate: 6 }}
  whileTap={{ scale: 0.95 }}
  transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
      className="text-gray-400 hover:text-cyan-400 focus:text-cyan-400 outline-none"
      aria-label={url}
    >
      <Icon size={30} />
    </motion.a>
  );
}

// Floating Input Field
function InputField({ id, label, ...props }) {
  return (
    <div className="relative">
      <input
        id={id}
        {...props}
        className="peer w-full bg-transparent border-b-2 border-gray-500 text-white placeholder-transparent focus:outline-none focus:border-cyan-400 transition-colors px-0 h-12"
        placeholder={label}
        autoComplete="off"
      />
      <label
        htmlFor={id}
        className="absolute left-0 -top-3.5 text-gray-400 text-sm transition-all
          peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2
          peer-focus:-top-3.5 peer-focus:text-cyan-400 peer-focus:text-sm"
      >
        {label}
      </label>
    </div>
  );
}

export default function ContactSayHi() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const formRef = useRef(null);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    try {
      await emailjs.sendForm(
        'service_u2ad988', 'template_j7xe2hl', formRef.current, 'S3ut-kjyknLhb4w2H'
      );
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    } catch {
      setError("Failed to send message. Please try again.");
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.2 }},
  };

  const itemVariants = {
    hidden: { y: 24, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 180 } },
  };

  const MotionMain = motion.main;
  const MotionSection = motion.section;
  const MotionButton = motion.button;

  const socialLinks = [
    { url: "https://github.com/Prakharbansall", icon: FaGithub },
    { url: "https://www.linkedin.com/in/prakhar-m03/", icon: FaLinkedin },
    { url: "https://x.com/PrakharBan16313", icon: FaTwitter },
    { url: "https://www.instagram.com/arrey_prakhar/", icon: FaInstagram },
  ];

  return (
  <div id="contact" className="min-h-screen flex items-center justify-center px-2 py-6 sm:px-8">
      <MotionMain
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-4xl"
      >
        {/* Header */}
        <MotionSection variants={itemVariants} className="text-center mb-10 sm:mb-16 px-2">
          <div className="flex items-center justify-center gap-2 sm:gap-4">
            <span className="text-4xl xs:text-5xl sm:text-6xl animate-wave">👋</span>
          </div>
          <h1 className="mt-2 text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
            Let's build something great
          </h1>
          <p className="text-gray-400 mt-2 sm:mt-4 text-base xs:text-lg">
            I help teams ship fast with clean UI and robust systems.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 w-full">
            <a href="mailto:prakhar@example.com" className="px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition w-full sm:w-auto text-center">Email me</a>
            <a href="https://drive.google.com/file/d/1g0Ebo_iv-yDZJH3EF7W4sb8Mo3dxEzr9/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:from-purple-500 hover:to-pink-500 transition w-full sm:w-auto text-center">View resume</a>
          </div>
        </MotionSection>
        {/* Contact Form */}
        <MotionSection
          variants={itemVariants}
          id="contact-form"
          className="w-full max-w-2xl mx-auto px-2 py-6 sm:p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl glow-ring"
        >
          <h2 className="text-2xl xs:text-3xl font-bold mb-2 sm:mb-4 text-center bg-clip-text text-transparent bg-gradient-to-tr from-purple-400 to-pink-500">
            Let’s work together 🚀
          </h2>
          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6 sm:gap-8 mt-4 sm:mt-8">
            <InputField
              id="name"
              type="text"
              name="name"
              label="Your Name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <InputField
              id="email"
              type="email"
              name="email"
              label="Your Email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <div className="relative">
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                required
                rows={4}
                className="peer w-full bg-transparent border-b-2 border-gray-500 text-white placeholder-transparent focus:outline-none focus:border-cyan-400 transition-colors resize-none px-0 min-h-[80px] xs:min-h-[100px]"
              />
              <label
                htmlFor="message"
                className="absolute left-0 -top-3.5 text-gray-400 text-sm transition-all
                  peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2
                  peer-focus:-top-3.5 peer-focus:text-cyan-400 peer-focus:text-sm"
              >
                Your Message
              </label>
            </div>
            <MotionButton
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              disabled={submitted}
              className="w-full py-3 xs:py-4 rounded-full text-base xs:text-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed ring-1 ring-white/15 hover:ring-white/35 focus:outline-none focus:ring-2 focus:ring-pink-400/60 shadow-none"
            >
              {submitted ? "Message Sent! 🎉" : "Send Message"}
            </MotionButton>
          </form>
          {submitted && (
            <div className="text-green-400 mt-4 text-center">✅ Your message has been sent!</div>
          )}
          {error && (
            <div className="text-red-400 mt-4 text-center">{error}</div>
          )}
          <div className="flex flex-wrap gap-4 xs:gap-6 justify-center mt-8 sm:mt-10 mb-2 sm:mb-4">
            {socialLinks.map((link, idx) => (
              <div key={idx} className="p-2 xs:p-3 rounded-full bg-white/5 hover:bg-white/10 transition glow-ring">
                <SocialIcon {...link} />
              </div>
            ))}
          </div>
        </MotionSection>
        {/* Footer */}
        <motion.footer variants={itemVariants} className="text-center text-gray-400 py-6 sm:py-8 mt-10 sm:mt-16 text-xs xs:text-sm">
          <p>&copy; {new Date().getFullYear()} Prakhar Bansal. Crafted with passion.</p>
        </motion.footer>
      </MotionMain>
    </div>
  );
}

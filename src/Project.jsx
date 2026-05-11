import { motion } from "motion/react"
import { Tilt } from 'react-tilt';
import { FaGithub, FaExternalLinkAlt, FaRocket, FaTools, FaLightbulb } from 'react-icons/fa';
import { useState } from 'react';

export default function ProjectCard() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      title: "AAGAJ",
      subtitle: "Business Website Experience",
      overview: `A polished business-focused website experience designed with a clean visual identity and structured content flow for better engagement and trust.`,
      features: [
        "Modern, premium UI presentation with smooth section flow.",
        "Clear service communication with focused call-to-actions.",
        "Responsive layout optimized across desktop and mobile.",
        "Strong visual hierarchy for quick readability."
      ],
      technologies: ["React", "Tailwind CSS", "JavaScript", "Vite"],
      liveLink: "https://www.aagajtech.in/",
      sourceLink: "https://github.com/Prakharbansall/AAGAJ",
    },
    {
      title: "Protico Technology",
      subtitle: "IT Solutions Landing Platform",
      overview: `A forward-looking technology company website crafted to present services, value propositions, and brand positioning through a confident, conversion-friendly interface.`,
      features: [
        "Service-first layout designed for business clarity.",
        "Balanced typography and spacing for premium readability.",
        "Responsive components with smooth interaction states.",
        "Structured sections that improve user journey."
      ],
      technologies: ["React", "Tailwind CSS", "JavaScript", "Vite"],
      liveLink: "https://protico.vercel.app/",
      sourceLink: "https://github.com/Prakharbansall/PROTICO",
    },
    {
      title: "RESONERAAI",
      subtitle: "AI Brand Showcase Website",
      overview: `An AI-focused web presence built to communicate innovation and technical credibility with bold visuals, concise messaging, and immersive section transitions.`,
      features: [
        "Brand-aligned visual theme for an AI-first identity.",
        "Interactive content blocks with engaging hover states.",
        "Performance-conscious responsive layout.",
        "Clean storytelling structure for product communication."
      ],
      technologies: ["React", "Tailwind CSS", "JavaScript", "Vite"],
      liveLink: "https://resoneraa.vercel.app/",
      sourceLink: "https://github.com/Prakharbansall/RESONERAA",
    },
    {
      title: "Aali Construction",
      subtitle: "Construction Portfolio Website",
      overview: `A robust and elegant construction business portfolio that highlights projects and services with strong visuals and straightforward information architecture.`,
      features: [
        "Project-centric layout for easy portfolio browsing.",
        "Professional visual tone with clear content sections.",
        "Mobile-friendly responsive behavior.",
        "Consistent design language across all pages."
      ],
      technologies: ["React", "Tailwind CSS", "JavaScript", "Vite"],
      liveLink: "https://aali-const.vercel.app/",
      sourceLink: "https://github.com/Prakharbansall/Aali-Const",
    },
    {
      title: "E-Commerce Platform",
      subtitle: "Full-Stack Retail Application",
      overview: `A dynamic, full-stack e-commerce platform built with Express.js and a classic frontend stack. This project showcases the ability to build scalable and user-friendly web applications, encompassing both frontend and backend components.`,
      features: [
        "Dynamic product display with detailed information.",
        "Fully functional shopping cart: add, remove, and adjust item quantities.",
        "Secure user authentication and registration system.",
        "Efficient order management for users to track their purchases.",
        "Responsive design ensuring a seamless experience on all devices."
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Express.js", "Git"],
      liveLink: "https://e-commerce-zeta-orcin.vercel.app/",
      sourceLink: "https://github.com/Prakharbansall/E-commerce-",
    },
   
    {
      title: "Tic-Tac-Toe Master",
      subtitle: "Interactive Web-Based Game",
      overview: `An interactive and responsive web-based game developed with vanilla JavaScript. This project demonstrates the ability to create engaging, user-friendly applications with smooth gameplay and real-time state management.`,
      features: [
        "Seamless and intuitive gameplay experience.",
        "Immediate feedback on player actions for enhanced engagement.",
        "Responsive design optimized for all screen sizes.",
        "Real-time score tracking for wins, losses, and draws."
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Git"],
      liveLink: "https://prakharbansall.github.io/tictactoe/",
      sourceLink: "https://github.com/Prakharbansall/tictactoe",
    },
    {
      title: "Weather Wizard",
      subtitle: "Real-Time Weather Forecast App",
      overview: `A real-time weather forecasting web application utilizing the OpenWeatherMap API. This project showcases the ability to integrate third-party APIs and create dynamic applications that deliver accurate, live data.`,
      features: [
        "Fetches current weather details: temperature, humidity, wind speed.",
        "City search functionality for instant weather information worldwide.",
        "Robust error handling for invalid city names or API issues.",
        "Sleek, responsive design for a great experience on any device."
      ],
      technologies: ["HTML", "CSS", "JavaScript", "REST API", "Git"],
      liveLink: "https://weather-app-sooty-one-52.vercel.app/",
      sourceLink: "https://github.com/Prakharbansall/Weather-App",
    }
  ];

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.34, 1.56, 0.64, 1],
      }
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay: 0.1, ease: "easeOut" },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: { duration: 0.3 },
    },
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -15 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  };

  const techVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.06,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
    hover: {
      scale: 1.1,
      boxShadow: "0 8px 16px rgba(168, 85, 247, 0.3)",
      transition: { duration: 0.2 },
    },
  };

  const scrollbarVariants = {
    hidden: { scaleY: 0, opacity: 0, transformOrigin: "bottom" },
    visible: {
      scaleY: 1,
      opacity: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    exit: {
      scaleY: 0,
      opacity: 0,
      transition: { duration: 0.2, ease: "easeIn" },
    },
  };

  return (
    <div id="projects" className="space-y-10 sm:space-y-14 md:space-y-16 px-2 sm:px-4 md:px-0 mt-8 sm:mt-10">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500">
          Projects
        </h2>
        <motion.div
          className="h-1 w-20 mx-auto bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        />
      </motion.div>

      <div className="space-y-10 sm:space-y-14 md:space-y-16">
        {projects.map((project, index) => (
          <Tilt
            key={index}
            options={{
              max: 20,
              perspective: 1000,
              scale: 1.05,
              speed: 500,
              transition: true,
              axis: null,
              reset: true,
              glare: true,
              "max-glare": 0.5,
            }}
          >
            <motion.div
              className="relative w-full max-w-5xl mx-auto border border-purple-900/40 bg-gradient-to-br from-gray-900/80 to-black/80 text-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-[0_12px_40px_rgba(139,92,246,0.25)] backdrop-blur-xl overflow-hidden"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{
                boxShadow: "0 18px 60px rgba(219,39,119,0.35)",
                borderColor: "#a855f7",
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {/* Animated gradient background on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/0 to-pink-600/0 pointer-events-none"
                animate={
                  hoveredIndex === index
                    ? {
                        backgroundImage: [
                          "linear-gradient(90deg, rgba(168,85,247,0) 0%, rgba(168,85,247,0.1) 50%, rgba(236,72,153,0) 100%)",
                          "linear-gradient(90deg, rgba(236,72,153,0) 0%, rgba(168,85,247,0.1) 50%, rgba(168,85,247,0) 100%)",
                        ],
                      }
                    : {}
                }
                transition={{ duration: 3, repeat: hoveredIndex === index ? Infinity : 0 }}
              />

              <motion.div className="relative z-10 flex justify-between items-start mb-4">
                <div className="flex-1">
                  <motion.h2
                    className="text-3xl font-extrabold tracking-wide text-purple-400 drop-shadow-lg"
                    variants={titleVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {project.title.split("").map((char, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.03, duration: 0.3 }}
                        viewport={{ once: true }}
                      >
                        {char}
                      </motion.span>
                    ))}
                  </motion.h2>
                  <motion.span
                    className="text-purple-300 italic block mt-1"
                    variants={subtitleVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {project.subtitle}
                  </motion.span>
                </div>

                <motion.div className="flex space-x-4 text-2xl ml-4">
                  {project.sourceLink && (
                    <motion.a
                      href={project.sourceLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
                      aria-label="Source Code"
                      variants={iconVariants}
                      initial="hidden"
                      whileInView="visible"
                      whileHover="hover"
                      viewport={{ once: true }}
                    >
                      <FaGithub />
                    </motion.a>
                  )}
                  <motion.a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
                    aria-label="Live Demo"
                    variants={iconVariants}
                    initial="hidden"
                    whileInView="visible"
                    whileHover="hover"
                    viewport={{ once: true }}
                  >
                    <FaExternalLinkAlt />
                  </motion.a>
                </motion.div>
              </motion.div>

              <motion.div
                className="space-y-6 relative z-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {/* Overview Section */}
                <motion.div variants={contentVariants}>
                  <motion.h3
                    className="flex items-center text-xl font-semibold mb-2 text-gray-200"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.span
                      variants={iconVariants}
                      initial="hidden"
                      whileInView="visible"
                      whileHover="hover"
                      viewport={{ once: true }}
                      className="mr-2 text-purple-400"
                    >
                      <FaLightbulb />
                    </motion.span>
                    Project Overview
                  </motion.h3>
                  <motion.p
                    className="text-gray-300 leading-relaxed text-lg"
                    variants={contentVariants}
                  >
                    {project.overview}
                  </motion.p>
                </motion.div>

                {/* Features Section */}
                <motion.div variants={contentVariants}>
                  <motion.h3
                    className="flex items-center text-xl font-semibold mb-2 text-gray-200"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.span
                      variants={iconVariants}
                      initial="hidden"
                      whileInView="visible"
                      whileHover="hover"
                      viewport={{ once: true }}
                      className="mr-2 text-purple-400"
                    >
                      <FaRocket />
                    </motion.span>
                    Key Features
                  </motion.h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-1 text-base">
                    {project.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        custom={i}
                        variants={featureVariants}
                        initial="hidden"
                        whileInView="visible"
                        whileHover={{ x: 10, color: "#c4b5fd" }}
                        transition={{ duration: 0.2 }}
                        viewport={{ once: true }}
                      >
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Technologies Section */}
                <motion.div variants={contentVariants}>
                  <motion.h3
                    className="flex items-center text-xl font-semibold mb-3 text-gray-200"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.span
                      variants={iconVariants}
                      initial="hidden"
                      whileInView="visible"
                      whileHover="hover"
                      viewport={{ once: true }}
                      className="mr-2 text-purple-400"
                    >
                      <FaTools />
                    </motion.span>
                    Technologies Used
                  </motion.h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <motion.span
                        key={i}
                        custom={i}
                        variants={techVariants}
                        initial="hidden"
                        whileInView="visible"
                        whileHover="hover"
                        viewport={{ once: true }}
                        className="bg-gray-800/80 text-purple-300 text-sm font-medium px-3 py-1 rounded-full shadow-md ring-1 ring-purple-700/30"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>

              {/* Hover Scrollbar Effect at Bottom */}
              {hoveredIndex === index && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 rounded-full origin-bottom"
                  variants={scrollbarVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent rounded-full"
                    animate={{ x: ["0%", "100%"] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                </motion.div>
              )}

              {/* Pulse effect on bottom border */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-purple-400/0 via-purple-400 to-purple-400/0"
                animate={hoveredIndex === index ? { opacity: [0.5, 1, 0.5] } : { opacity: 0.3 }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </Tilt>
        ))}
      </div>
    </div>
  );
}
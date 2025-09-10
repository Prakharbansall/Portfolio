import { motion } from "motion/react"
// Step 1: Import the Tilt component
import { Tilt } from 'react-tilt'; 
import { FaGithub, FaExternalLinkAlt, FaRocket, FaTools, FaLightbulb } from 'react-icons/fa';

export default function ProjectCard() {
  const projects = [
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
      title: "Book-Hunt",
      subtitle: "MERN Stack Book Discovery App",
      overview: `Book-Hunt is a full-stack web application designed to help users search, discover, and manage their favorite books efficiently. This project highlights skills in creating interactive and scalable applications using the MERN stack.`,
      features: [
        "Powerful book search by keyword or author.",
        "Comprehensive book details including title, author, and ratings.",
        "Personalized favorites list to save books for later.",
        "Secure sign-up and login for a personalized experience.",
        "Optimized for seamless use on desktop, tablet, and mobile devices."
      ],
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "CSS", "Git"],
      liveLink: "https://book-hunt-ke4daygws-prakharbansal977-9234s-projects.vercel.app/",
      sourceLink: "https://github.com/Prakharbansall/Book-Hunt",
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
    initial: { opacity: 0, y: 50 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    },
  };

  // Step 2: Define options for the Tilt effect
  const tiltOptions = {
    max: 20,          // Max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets
    scale: 1.05,      // 1.05 = 5% zoom on hover
    speed: 500,       // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null,       // What axis should be disabled. Can be X or Y.
    reset: true,      // If the tilt effect has to be reset on exit.
    glare: true,      // Adds a glare effect
    "max-glare": 0.5, // The maximum glare opacity
  };

  return (
    <div id="projects" className="space-y-12 sm:space-y-14 md:space-y-16 px-3 sm:px-4 md:px-0">
      <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
        Projects
      </h2>
      {projects.map((project, index) => (
        // Step 3: Wrap the motion.div with the Tilt component
        <Tilt key={index} options={tiltOptions}>
          <motion.div
            className="relative w-full max-w-5xl mx-auto border border-purple-900/40 bg-gradient-to-br from-gray-900/80 to-black/80 text-white p-6 sm:p-8 md:p-10 rounded-2xl 
            shadow-[0_12px_40px_rgba(139,92,246,0.25)] hover:shadow-[0_18px_60px_rgba(219,39,119,0.25)] backdrop-blur-xl
            transition-all duration-300 ease-in-out hover:border-purple-500/50"
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* The inner content of the card remains the same */}
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-3xl font-extrabold tracking-wide text-purple-400 drop-shadow-lg">
                  {project.title}
                </h2>
                <span className="text-purple-300 italic">{project.subtitle}</span>
              </div>
              <div className="flex space-x-4 text-2xl">
                <a href={project.sourceLink} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors duration-200" aria-label="Source Code">
                  <FaGithub />
                </a>
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors duration-200" aria-label="Live Demo">
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="flex items-center text-xl font-semibold mb-2 text-gray-200">
                  <FaLightbulb className="mr-2 text-purple-400" /> Project Overview
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg">{project.overview}</p>
              </div>
              
              <div>
                <h3 className="flex items-center text-xl font-semibold mb-2 text-gray-200">
                  <FaRocket className="mr-2 text-purple-400" /> Key Features
                </h3>
                <ul className="list-disc list-inside text-gray-300 space-y-1 text-base">
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="flex items-center text-xl font-semibold mb-3 text-gray-200">
                  <FaTools className="mr-2 text-purple-400" /> Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="bg-gray-800/80 text-purple-300 text-sm font-medium px-3 py-1 rounded-full shadow-md ring-1 ring-purple-700/30">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </Tilt>
      ))}
    </div>
  );
}
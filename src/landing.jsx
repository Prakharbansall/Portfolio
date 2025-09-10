import { motion as Motion } from "framer-motion";

export default function About() {
  return (
    <>
      <div id="hero" className="min-h-screen flex flex-col items-center mt-[95px] text-white text-center px-4">
        {/* Current role */}
        <div className="flex items-center space-x-2 mb-6">
        <div className="relative">
              <span className="absolute inline-flex h-3 w-3 rounded-full bg-green-500 opacity-88 animate-ping"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </div>
          <span className="text-xl tracking-widest text-gray-200">
            Available For Work
          </span>
        </div>

        <Motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
          }}
          className="text-6xl sm:text-7xl md:text-[150px] font-extrabold leading-tight"
          aria-label="PRAKHAR BANSAL"
        >
          {"PRAKHAR".split("").map((ch, i) => (
            <Motion.span
              key={`f-${i}-${ch}`}
              className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500"
              variants={{ hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {ch}
            </Motion.span>
          ))}
          <br />
          {"BANSAL".split("").map((ch, i) => (
            <Motion.span
              key={`l-${i}-${ch}`}
              className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-400"
              variants={{ hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {ch}
            </Motion.span>
          ))}
        </Motion.div>

        <p className="text-5xl  text-gray-400 mt-6">
          Frontend & Backend (Full-Stack) <br/> Developer.
        </p>

        {/* Button */}
        <a href="#contact" className="mt-8 px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition">
          Get in touch
        </a>

      
      </div>
    </>
  );
}

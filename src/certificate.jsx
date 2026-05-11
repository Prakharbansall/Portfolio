import React, { useState } from "react";
import { motion } from "motion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";
import { FaAward, FaSparkles } from "react-icons/fa";

import ImgHTML from "../Images/HTML.png";
import ImgNode from "../Images/NodeJs.png";
import ImgCloud from "../Images/Cloud Fundamental.png";
import ImgDesign from "../Images/Design Thinking.jpg";
import ImgOracle from "../Images/Oracle.jpg";
import ImgSE from "../Images/Software Engineering.png";
import ImgWS from "../Images/Web Service.png";
import ImgJS from "../Images/JavaScript.png";

const certificates = [
  { img: ImgHTML, name: "HTML Certificate" },
  { img: ImgNode, name: "NodeJS Certificate" },
  { img: ImgCloud, name: "Cloud Fundamental Certificate" },
  { img: ImgDesign, name: "Design Thinking Certificate" },
  { img: ImgOracle, name: "Oracle Certificate" },
  { img: ImgSE, name: "Software Engineering Certificate" },
  { img: ImgWS, name: "Web Service Certificate" },
  { img: ImgJS, name: "JavaScript Certificate" },
];

export default function CertificateCarousel() {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleSlideClick = (img) => {
    window.open(img, "_blank", "noopener,noreferrer");
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.34, 1.56, 0.64, 1] },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, delay: 0.2 },
    },
    float: {
      y: [0, -10, 0],
      transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const slideVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (custom) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: custom * 0.05,
        duration: 0.5,
      },
    }),
  };

  const underlineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 0.8, delay: 0.3 },
    },
  };

  const navButtonVariants = {
    initial: { scale: 1, opacity: 0.7 },
    hover: {
      scale: 1.15,
      opacity: 1,
      boxShadow: "0 0 30px rgba(168, 85, 247, 0.6)",
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <div id="certificates" className="relative min-h-[80vh] flex flex-col items-center justify-center text-white py-8 sm:py-12 md:py-16 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-purple-600/30 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center mb-12 sm:mb-16">
          <motion.div
            className="flex items-center gap-2 sm:gap-3 mb-4"
            variants={iconVariants}
            initial="hidden"
            whileInView="visible"
            animate="float"
            viewport={{ once: true }}
          >
            <FaAward className="text-3xl sm:text-4xl text-purple-400" />
            <span className="text-purple-300 font-semibold text-sm sm:text-base">ACHIEVEMENTS</span>
          </motion.div>

          <motion.h2
            className="text-4xl xs:text-5xl sm:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 text-center drop-shadow-lg px-4"
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {" "}
            Professional
            <br />
            <motion.span
              className="relative inline-block"
              whileInView={{ x: [0, 5, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            >
              Certificates
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                variants={underlineVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              />
            </motion.span>
          </motion.h2>

          <motion.p
            className="text-gray-300 text-center mt-4 text-sm sm:text-base max-w-2xl px-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Explore my professional certifications and skill validations
          </motion.p>
        </div>

        {/* Carousel Container */}
        <motion.div
          className="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-16 relative"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1}
            breakpoints={{
              480: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            loop={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 100,
              depth: 150,
              modifier: 2.2,
              slideShadows: false,
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: true,
            }}
            modules={[Navigation, EffectCoverflow, Autoplay]}
            onSlideChange={(swiper) => {
              setActiveIndex(swiper.activeIndex);
              setHoveredIndex(null);
            }}
            onSwiper={setSwiperInstance}
            className="h-[300px] xs:h-[350px] sm:h-[400px] md:h-[450px]"
          >
            {certificates.map((cert, index) => (
              <SwiperSlide key={index}>
                {({ isActive }) => (
                  <motion.div
                    className="h-full"
                    custom={index}
                    variants={slideVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <motion.div
                      onClick={() => handleSlideClick(cert.img)}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      className={`h-full w-full rounded-3xl overflow-hidden cursor-pointer relative group transition-all duration-500 ${
                        isActive ? "scale-100" : "scale-85 opacity-70"
                      }`}
                      whileHover={{ scale: isActive ? 1.08 : 0.92 }}
                      transition={{ duration: 0.4 }}
                    >
                      {/* Background gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-gray-900/40 to-black/80 z-10" />

                      {/* Image */}
                      <motion.img
                        src={cert.img}
                        alt={cert.name}
                        className="w-full h-2/3 object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.4 }}
                      />

                      {/* Content Section */}
                      <div className="absolute inset-0 flex flex-col justify-between p-3 sm:p-5 z-20">
                        {/* Top badge */}
                        <motion.div
                          className="flex justify-end"
                          initial={{ opacity: 0, y: -10 }}
                          whileHover={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="flex items-center gap-1 bg-gradient-to-r from-purple-500/80 to-pink-500/80 backdrop-blur-md rounded-full px-2 xs:px-3 py-1 text-xs xs:text-sm font-semibold">
                            <FaSparkles className="text-yellow-300" />
                            <span>Certified</span>
                          </div>
                        </motion.div>

                        {/* Bottom text section */}
                        <motion.div
                          className="text-center space-y-2"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{
                            opacity: isActive || hoveredIndex === index ? 1 : 0,
                            y: isActive || hoveredIndex === index ? 0 : 10,
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <h3 className="text-sm xs:text-base sm:text-lg font-bold text-white drop-shadow-lg">
                            {cert.name}
                          </h3>
                          <motion.p
                            className="text-xs xs:text-sm text-purple-200"
                            initial={{ opacity: 0 }}
                            animate={{
                              opacity: isActive || hoveredIndex === index ? 1 : 0,
                            }}
                            transition={{ delay: 0.1 }}
                          >
                            Click to view
                          </motion.p>
                        </motion.div>
                      </div>

                      {/* Glowing border effect */}
                      <motion.div
                        className="absolute inset-0 rounded-3xl pointer-events-none z-30"
                        animate={
                          isActive || hoveredIndex === index
                            ? {
                                boxShadow: [
                                  "inset 0 0 20px rgba(168, 85, 247, 0.3), 0 0 30px rgba(168, 85, 247, 0.4)",
                                  "inset 0 0 30px rgba(168, 85, 247, 0.5), 0 0 40px rgba(168, 85, 247, 0.6)",
                                  "inset 0 0 20px rgba(168, 85, 247, 0.3), 0 0 30px rgba(168, 85, 247, 0.4)",
                                ],
                              }
                            : {
                                boxShadow:
                                  "inset 0 0 10px rgba(168, 85, 247, 0.1), 0 0 15px rgba(139, 92, 246, 0.2)",
                              }
                        }
                        transition={{ duration: 2, repeat: isActive || hoveredIndex === index ? Infinity : 0 }}
                      />

                      {/* Shine effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 rounded-3xl pointer-events-none z-20"
                        animate={isActive || hoveredIndex === index ? { x: ["0%", "100%"] } : { x: "-100%" }}
                        transition={{ duration: 0.8, repeat: isActive || hoveredIndex === index ? Infinity : 0 }}
                      />
                    </motion.div>
                  </motion.div>
                )}
              </SwiperSlide>
            ))}

            {/* Enhanced Navigation Buttons */}
            <motion.button
              className="swiper-button-prev !absolute !top-1/2 !-translate-y-1/2 !-left-16 sm:!-left-20 md:!-left-24 !w-12 !h-12 sm:!w-14 sm:!h-14 md:!w-16 md:!h-16 !rounded-full !flex !items-center !justify-center !bg-gradient-to-br !from-purple-600/60 !to-purple-900/60 !ring-2 !ring-purple-400/60 !shadow-xl !backdrop-blur-md !border-0 z-20 hover:!from-purple-600/80 hover:!to-purple-900/80"
              variants={navButtonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
            >
              <IoArrowBackOutline className="text-2xl sm:text-3xl md:text-4xl text-purple-200" />
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400/20 to-transparent"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.button>

            <motion.button
              className="swiper-button-next !absolute !top-1/2 !-translate-y-1/2 !-right-16 sm:!-right-20 md:!-right-24 !w-12 !h-12 sm:!w-14 sm:!h-14 md:!w-16 md:!h-16 !rounded-full !flex !items-center !justify-center !bg-gradient-to-br !from-pink-600/60 !to-pink-900/60 !ring-2 !ring-pink-400/60 !shadow-xl !backdrop-blur-md !border-0 z-20 hover:!from-pink-600/80 hover:!to-pink-900/80"
              variants={navButtonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
            >
              <IoArrowForwardOutline className="text-2xl sm:text-3xl md:text-4xl text-pink-200" />
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-l from-pink-400/20 to-transparent"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.button>
          </Swiper>
        </motion.div>

        {/* Slide Counter */}
        <motion.div
          className="flex justify-center mt-8 sm:mt-10 gap-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          {certificates.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => swiperInstance?.slideTo(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "w-8 bg-gradient-to-r from-purple-400 to-pink-400"
                  : "w-2 bg-gray-500/40 hover:bg-gray-500/70"
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </motion.div>

        {/* Info Text */}
        <motion.p
          className="text-center text-gray-400 text-xs sm:text-sm mt-6 sm:mt-8 px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          viewport={{ once: true }}
        >
          {certificates.length} certifications • Swipe or use arrows to explore
        </motion.p>
      </motion.div>
    </div>
  );
}
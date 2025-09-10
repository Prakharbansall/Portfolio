import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";

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
  const handleSlideClick = (img) => {
    window.open(img, "_blank", "noopener,noreferrer");
  };

  return (
    <div id="certificates" className="min-h-[70vh] flex flex-col items-center justify-center text-white py-6 sm:py-8">
      <h2 className="text-3xl xs:text-4xl sm:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 mb-8 sm:mb-12 text-center drop-shadow-lg">
        Certificates
      </h2>
      <div className="w-full max-w-5xl px-2 sm:px-6">
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
            stretch: 0,
            depth: 120,
            modifier: 2.2,
            slideShadows: false,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Navigation, EffectCoverflow, Autoplay]}
          className="h-[320px] xs:h-[360px] sm:h-[400px]"
        >
          {certificates.map((cert, index) => (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <div
                  onClick={() => handleSlideClick(cert.img)}
                  className={`h-[220px] xs:h-[260px] sm:h-[320px] bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-[0_10px_40px_rgba(168,85,247,0.25)] ring-1 ring-purple-800/30 overflow-hidden cursor-pointer transform transition-transform duration-500 ${
                    isActive ? "scale-105" : "scale-90 opacity-75"
                  } hover:scale-110 hover:opacity-100 flex flex-col justify-center items-center`}
                >
                  <img
                    src={cert.img}
                    alt={cert.name}
                    className="w-full h-[120px] xs:h-[160px] sm:h-[220px] object-cover"
                  />
                  <div className="p-2 sm:p-4 text-center">
                    <h3 className="text-base xs:text-lg font-semibold text-purple-200">{cert.name}</h3>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}

          {/* Navigation buttons */}
          <div className="swiper-button-prev !absolute !top-1/2 !-translate-y-1/2 !left-2 xs:!left-4 rounded-full w-10 h-10 xs:w-14 xs:h-14 flex items-center justify-center bg-purple-700/50 ring-1 ring-purple-400/30 shadow-lg hover:bg-purple-600/60 transition-colors duration-300">
            <IoArrowBackOutline className="text-2xl xs:text-3xl text-white" />
          </div>
          <div className="swiper-button-next !absolute !top-1/2 !-translate-y-1/2 !right-2 xs:!right-4 rounded-full w-10 h-10 xs:w-14 xs:h-14 flex items-center justify-center bg-pink-600/50 ring-1 ring-pink-300/30 shadow-lg hover:bg-pink-500/60 transition-colors duration-300">
            <IoArrowForwardOutline className="text-2xl xs:text-3xl text-white" />
          </div>
        </Swiper>
      </div>
    </div>
  );
}

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import styles from "../public/Portfolio.module.css";

// Replace with your actual image imports
import img1 from '../assets/foodDel.png'
import img2 from '../assets/innovader.png'
import img3 from '../assets/myra.png'
import img4 from '../assets/rentup.png'
import img5 from '../assets/roofing.png'
import img6 from '../assets/shpoorji.png'
import img7 from '../assets/yugen.png'
import img8 from '../assets/chat.png'

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

const ScreenshotCarousel = () => {
  return (
    <div className={styles.container}>
        <h1><span>Our</span> Projects</h1>
      <Swiper
      
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        loop={true}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 300,
          modifier: 2.5,
          slideShadows: true
        }}
        autoplay={{
          delay: 2000, // Time between slides in ms
          disableOnInteraction: false, // Keeps autoplay after interaction
        }}
        className={styles.swiperContainer}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index} className={styles.swiperSlide}>
            <img src={img} alt={`Screenshot ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ScreenshotCarousel;

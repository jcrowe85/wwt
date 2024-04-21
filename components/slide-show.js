import { motion, AnimatePresence, wrap} from "framer-motion";
import React, { useState } from "react";
import Carousel from "framer-motion-carousel";

export default function Slideshow({ image }) {

    const images = [
        "https://world-wide-trekking.s3.us-west-1.amazonaws.com/sect2SlideShow/section-2-carousel-desktop-img-5.jpg",
        "https://world-wide-trekking.s3.us-west-1.amazonaws.com/sect2SlideShow/section-2-carousel-desktop-img-6.jpg",
        "https://world-wide-trekking.s3.us-west-1.amazonaws.com/sect2SlideShow/section-2-carousel-desktop-img-7.jpg",
        "https://world-wide-trekking.s3.us-west-1.amazonaws.com/sect2SlideShow/section-2-carousel-desktop-img-1.png",
        "https://world-wide-trekking.s3.us-west-1.amazonaws.com/sect2SlideShow/section-2-carousel-desktop-img-2.jpg",
        "https://world-wide-trekking.s3.us-west-1.amazonaws.com/sect2SlideShow/section-2-carousel-desktop-img-3.jpg",
        "https://world-wide-trekking.s3.us-west-1.amazonaws.com/sect2SlideShow/section-2-carousel-desktop-img-4.jpg",
    ]

    return (
        <Carousel interval={3000} speed={2000} renderDots={() => null} renderArrowRight={() => null} renderArrowLeft={() => null}>
        {images.map((item, i) => (
          <img
            draggable="false"
            src={`${item}`}
            key={i}
            width="100%"
            alt=""
          />
        ))}
      </Carousel>
    )
}

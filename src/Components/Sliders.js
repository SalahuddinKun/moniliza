import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import playIcon from '../assets/play.png';  
import for1 from '../assets/for1.jpeg';
import for2 from '../assets/for2.jpeg';
import for3 from '../assets/for3.jpeg'; 
import video from '../assets/video.mp4'
import video2 from '../assets/video2.mp4'
import video3 from '../assets/video3.mp4'
import video4 from '../assets/video4.mp4'
import video5 from '../assets/video5.mp4'
import video6 from '../assets/video6.mp4'



const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "gray", right: "-25px", zIndex: 1 }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "gray", left: "-45px", zIndex: 1 }}
      onClick={onClick}
    />
  );
};

const ImageCarousel = ({ onVideoSelect }) => {
  const items = [
    { img: for1, video:video  },
    { img: for2, video: video2 },
    { img: for3, video:video3   },
    { img: for1, video:video4   },
    { img: for2, video: video5  },
    { img: for3, video: video6  },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleImageClick = (videoUrl) => {
    onVideoSelect(videoUrl); // Call the function passed from parent
  };

  return (
    <div className="container mt-4" style={{ position: "relative", padding: "0 50px" }}>
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index} className="carousel-item" style={{ position: "relative" }}>
            <img
              className="carousel-image"
              src={item.img}
              alt={`Image ${index + 1}`}
              onClick={() => handleImageClick(item.video)}
              style={{ cursor: 'pointer' }}
            />
            <img src={playIcon} onClick={() => handleImageClick(item.video)} alt="Play Icon" className="video-icon" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;

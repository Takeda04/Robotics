import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { VideoCard } from "./video";

import slider from "@/assets/images/slider.png";
import slider2 from "@/assets/images/slider2.png";
import slider3 from "@/assets/images/slider3.png";
import slider4 from "@/assets/images/slider4.png";
import slider5 from "@/assets/images/slider5.png";

const CarouselContainer = styled.div`
  .slick-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
  }

  .slick-list {
    display: flex;
  }

  .slick-track {
    display: flex;
    flex-direction: row; /* Ensure horizontal layout */
  }

  .slick-prev, .slick-next {
    display: none !important; /* Hide the Next/Previous buttons */
  }

  .slick-dots {
    display: flex !important;
    justify-content: center; /* Center the dots */
    margin-top: 30px; /* Add margin-top of 30px */
    
    li {
      margin: 0 5px; /* Space between dots */
      width: 12px; /* Make the dots circular */
      height: 12px; /* Same as width for perfect circle */
    }

    li button {
      width: 100%;
      height: 100%;
      padding: 0; /* Remove padding */
    }

    li button:before {
      font-size: 0; /* Remove default number */
      content: ''; /* Remove the number and add a dot */
      display: block;
      width: 12px; /* Circle size */
      height: 12px;
      border: 2px solid #FFE000;
      background-color: #000;
      border-radius: 50%; 
    }

    li.slick-active button:before {
      background-color: #f0d625; 
    }
  }

  @media (max-width: 768px) {
    .slick-slide {
      width: 90%;
    }
  }

  @media (max-width: 480px) {
    .slick-slide {
      width: 95%; 
    }
  }
`;

const CustomCarousel = () => {
  const images = [slider, slider2, slider3, slider4, slider5,slider, slider2, slider3, slider4, slider5];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1024, // Tablet and small desktop
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        },
      },
      {
        breakpoint: 768, // Mobile landscape
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        },
      },
      {
        breakpoint: 480, // Mobile portrait
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        },
      },
    ],
  };

  return (
    <CarouselContainer>
      <Slider {...settings}>
        {images.map((image, index) => (
          <VideoCard image={image} key={index} />
        ))}
      </Slider>
    </CarouselContainer>
  );
};

export default CustomCarousel;

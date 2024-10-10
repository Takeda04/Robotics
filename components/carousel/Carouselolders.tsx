import React from "react";
import Slider from "react-slick";
import styled from "styled-components";


import slider2 from "@/assets/images/slider2.png";
import slider3 from "@/assets/images/slider3.png";
import slider4 from "@/assets/images/slider4.png";
import slider5 from "@/assets/images/slider5.png";
import slider from "@/assets/images/child_big.png";
import Image from "next/image";

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

  .slick-prev,
  .slick-next {
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
      content: ""; /* Remove the number and add a dot */
      display: block;
      width: 12px; /* Circle size */
      height: 12px;
      border: 2px solid #ffe000;
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

const CarouselOlders = () => {
  const images = [
    slider,
    slider2,
    slider3,
    slider4,
    slider5,
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024, // Tablet and small desktop
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Mobile landscape
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // Mobile portrait
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <CarouselContainer>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div className="min-w-[200px] w-[200px] h-[150px] md:w-[1200px] md:h-[602px] px-5" key={index}>
            <Image
              src={image}
              alt="First image"
              className="min-w-[200px] w-[200px] h-[150px] md:w-[1400px] md:h-[602px] object-cover rounded-lg shadow-lg"
            />
          </div>
        ))}
      </Slider>
    </CarouselContainer>
  );
};

export default CarouselOlders;

import React from "react";
import Slider from "react-slick";
import styled from "styled-components";

import FootCard from "../robotics/foot-card";

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

const RobotCarousel = ({ CardContent }: any) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1024, // Tablet and small desktop
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Mobile landscape
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // Mobile portrait
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <CarouselContainer>
      <Slider {...settings}>
        {CardContent.map((content: { text: any; link: any; btn: any; image: any; }, index: any) => (
          <FootCard key={index} text={content.text} link={content.link} btn={content.btn} image={content.image}/>
        ))}
      </Slider>
    </CarouselContainer>
  );
};

export default RobotCarousel;

import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";


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

const ImageCarousel = ({images}:{images:any}) => {


  const settings = {
    dots: true,
    infinite: false,
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
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
        {images.map((image: string | StaticImport, index: React.Key | null | undefined) => (
          <div
            key={index}
            className="md:w-[1200px] px-5"
          >
            <Image
              alt="First image"
              className="min-w-[300px] w-[300px] h-[350px] md:h-[402px] rounded-[20px] shadow-lg"
              src={image}
              width={300}
              height={300}
              loading="lazy"
            />
          </div>
        ))}
      </Slider>
    </CarouselContainer>
  );
};

export default ImageCarousel;

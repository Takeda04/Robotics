import { Button } from "@nextui-org/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { GrFormNextLink } from "react-icons/gr";

import { fontTektur } from "@/config/fonts";

const HomeCard = ({ image, text, link, btn }: any) => {
  const router = useRouter();

  const navigator = (page: string) => {
    router.push(page);
  };

  return (
    <div
      className="flex flex-col justify-between md:w-[551px] min-w-[300px] bg-[#F0D625] w-[250px] px-[15px] py-[15px]  md:px-[51px] md:py-[43px]"
      style={{
        borderRadius: "30px",
      }}
    >
      <span>
        <Image
          alt="website slider image"
          className="w-[300px] h-[191px] md:w-[449px] md:h-[211px] object-cover rounded-3xl"
          height={211}
          src={image}
          width={449}

        />

        <p
          className={`${fontTektur.variable} font-tektur  text-black md:text-[#000] text-[20px] sm:text-[30px] md:text-[35px] lg:text-[40px] text-start font-bold my-[21px]`}
        >
          {text}
        </p>
      </span>
      <div className="flex items-end justify-end mb-0">
        <Button
          className="mb-0 bg-black rounded-full text-white text-end hidden sm:flex"
          endContent={<GrFormNextLink className="text-[2xl]" />}
          onClick={() => navigator(link)}
        >
          {btn}
        </Button>
      </div>
    </div>
  );
};

export default HomeCard;

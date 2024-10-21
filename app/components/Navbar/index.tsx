"use client";

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
  NavbarMenu,
} from "@nextui-org/navbar";

// images

import { useState, useEffect } from "react";
import Image from "next/image";
import { IoMdClose } from "react-icons/io";
import { Link } from "@nextui-org/link";
import {
  Button,
  ButtonGroup,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";

import { fontTektur } from "@/config/fonts";
import { ChevronDown } from "@/assets/icons/icons";
import ToggleIcon from "@/assets/icons/toggleModal.png";
import { useTranslation } from "@/app/[lng]/i18n/client";
import { getCookie } from "cookies-next";

export const Navbar = ({ lng }: { lng: string }) => {
  const { t } = useTranslation(lng, "translation", {});
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();
  const lang = getCookie("i18next");
  const [showPhoneNumber, setShowPhoneNumber] = useState(false);
  const phoneNumber = "+99833-718-44-44";

  const handleToggle = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleClick = () => {
    setShowPhoneNumber((prevShow) => !prevShow);
  };

  const handleLanguageChange = (lang: string) => {
    const pathname = window.location.pathname;
    const path = pathname.slice(4, pathname.length);

    router.push(`/${lang.toLowerCase()}/${path}`);
  };

  const icons = {
    chevron: (
      <ChevronDown fill="currentColor" height={16} size={16} width={16} />
    ),
  };

  const checkScreenSize = () => {
    setIsMobile(window.innerWidth <= 1200);
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return (
    <NextUINavbar
      className={`h-[100px] sm:h-[157px] relative py-5 sm:absolute border-t-[10px] border-b-[10px] border-[#F0D625]`}
      isMenuOpen={isOpen}
      maxWidth="xl"
      onMenuOpenChange={setIsOpen}
    >
      <NavbarBrand>
        <Link href={`/${lang}/`}>
          <Image
            alt="website logo"
            className="sm:w-[111px] min-w-[70px] md:min-w-[100px]"
            height={70}
            src="/icon/logotip.svg"
            width={70}
          />
        </Link>
      </NavbarBrand>
      {!isMobile && (
        <NavbarContent className="sm:gap-[46px] hidden sm:flex">
          <NavbarItem>
            <Link
              className={`${fontTektur.variable} font-tektur text-[24px]`}
              color="foreground"
              href={`/${lang}/`}
            >
              {t("main")}
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className={`${fontTektur.variable} font-tektur text-[24px]`}
              color="foreground"
              href="#about"
            >
              {t("about")}
            </Link>
          </NavbarItem>
          <Dropdown backdrop="blur">
            <NavbarItem>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className={`${fontTektur.variable} font-tektur p-4 bg-transparent data-[hover=true]:bg-transparent text-[24px]`}
                  endContent={icons.chevron}
                  radius="full"
                  style={{ borderColor: "#F0D625", color: "#F0D625" }} // Button border and text color
                  variant="bordered"
                >
                  {t("drop")}
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
              aria-label="Kurs itemlari"
              className="w-[340px]"
              itemClasses={{
                base: "gap-4",
              }}
            >
              <DropdownItem
                className={`${fontTektur.variable} font-tektur text-[#F0D625] text-[24px] border-b border-[#F0D625] py-2`}
                href={`/${lang}/robotic`}
              >
                {t("drop1")}
              </DropdownItem>
              <DropdownItem
                className={`${fontTektur.variable} font-tektur text-[#F0D625] text-[24px] border-b border-[#F0D625] py-2`}
                href={`/${lang}/english`}
              >
                {t("drop2")}
              </DropdownItem>
              <DropdownItem
                className={`${fontTektur.variable} font-tektur text-[#F0D625] text-[24px] border-b border-[#F0D625] py-2`}
                href={`/${lang}/painting_children`}
              >
                {t("drop3")}
              </DropdownItem>
              <DropdownItem
                className={`${fontTektur.variable} font-tektur text-[#F0D625] text-[24px] border-b border-[#F0D625] py-2`}
                href={`/${lang}/painting_olders`}
              >
                {t("drop4")}
              </DropdownItem>
              <DropdownItem
                className={`${fontTektur.variable} font-tektur text-[#F0D625] text-[24px] border-b border-[#F0D625] py-2`}
                href={`/${lang}/chess`}
              >
                {t("drop5")}
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>

          <NavbarItem>
            <Link
              className={`${fontTektur.variable} font-tektur text-[24px]`}
              color="foreground"
              href='#footer'
            >
              {t("contact")}
            </Link>
          </NavbarItem>
          <Button
            className={`${fontTektur.variable} font-tektur font-bold text-[24px]`}
            style={{
              borderColor: "#F0D625",
              background: "#F0D625",
              color: "#000000",
              boxShadow:
                "0 0 10px 0 #F0D625, 0 0 15px 0 #F0D625, 0 0 20px 0 #F0D625",
            }}
            onClick={handleClick}
          >
            {showPhoneNumber ? phoneNumber : t("call")}
          </Button>

          <ButtonGroup className="hidden sm:flex">
            <Button
              className={`${fontTektur.variable} font-tektur text-[24px]`}
              style={{
                background: lng === "uz" ? "#F0D625" : "transparent",
                color: lng === "uz" ? "#FFFFFF" : "#F0D625",
                borderRadius: "15px",
                padding: "10px 20px",
              }}
              onClick={() => handleLanguageChange("UZ")}
            >
              UZ
            </Button>
            <Button
              className={`${fontTektur.variable} font-tektur text-[24px]`}
              style={{
                background: lng === "ru" ? "#F0D625" : "transparent",
                color: lng === "ru" ? "#FFFFFF" : "#F0D625",
                borderRadius: "15px",
                padding: "10px 20px",
              }}
              onClick={() => handleLanguageChange("RU")}
            >
              RU
            </Button>
          </ButtonGroup>
        </NavbarContent>
      )}

      {/* Mobile version */}
      {isMobile && (
        <NavbarContent className="custom-lg:hidden " justify="end">
          <ButtonGroup className="flex">
            <Button
              className={`${fontTektur.variable} font-tektur text-[24px]`}
              style={{
                background: lng === "uz" ? "#F0D625" : "transparent",
                color: lng === "uz" ? "#FFFFFF" : "#F0D625",
                borderRadius: "15px",
                padding: "5px 10px",
              }}
              onClick={() => handleLanguageChange("UZ")}
            >
              UZ
            </Button>
            <Button
              className={`${fontTektur.variable} font-tektur text-[24px]`}
              style={{
                background: lng === "ru" ? "#F0D625" : "transparent",
                color: lng === "ru" ? "#FFFFFF" : "#F0D625",
                borderRadius: "15px",
                padding: "5px 10px",
              }}
              onClick={() => handleLanguageChange("RU")}
            >
              RU
            </Button>
          </ButtonGroup>
          <button className="cursor-pointer" onClick={handleToggle}>
            <div className="relative w-9 h-9">
              <div
                className={`absolute inset-0 flex justify-center items-center transition-all duration-300 ${
                  isOpen ? "opacity-100 rotate-0" : "opacity-0 rotate-90"
                }`}
              >
                <IoMdClose
                  className="transition-transform duration-300"
                  size={35}
                />
              </div>

              <div
                className={`absolute inset-0 flex justify-center items-center transition-all duration-300 ${
                  isOpen ? "opacity-0 -rotate-90" : "opacity-100 rotate-0"
                }`}
              >
                <Image
                  alt="open menu icon"
                  height={35}
                  src={ToggleIcon}
                  width={35}
                />
              </div>
            </div>
          </button>
        </NavbarContent>
      )}

      <NavbarMenu className="mt-[30px] sm:mt-[30px] md:mt-[90px] lg:mt-[90px] gap-y-5 ">
        <NavbarItem>
          <Link
          onPress={handleToggle}
            className={`${fontTektur.variable} font-tektur text-[24px]`}
            color="foreground"
            href={`/${lang}/`}
          >
            {t("main")}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
          onPress={handleToggle}
            className={`${fontTektur.variable} font-tektur text-[24px]`}
            color="foreground"
            href='#about'
          >
            {t("about")}
          </Link>
        </NavbarItem>
        <Dropdown backdrop="blur">
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className={`${fontTektur.variable} font-tektur p-4 bg-transparent data-[hover=true]:bg-transparent text-[24px]`}
                endContent={icons.chevron}
                radius="full"
                style={{ borderColor: "#F0D625", color: "#F0D625" }} // Button border and text color
                variant="bordered"
              >
                {t("drop")}
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="Kurs itemlari"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
            onPress={handleToggle}
              className={`${fontTektur.variable} font-tektur text-[#F0D625] text-[24px] border-b border-[#F0D625] py-2`}
              href={`/${lang}/robotic`}
            >
              {t("drop1")}
            </DropdownItem>
            <DropdownItem
            onPress={handleToggle}
              className={`${fontTektur.variable} font-tektur text-[#F0D625] text-[24px] border-b border-[#F0D625] py-2`}
              href={`/${lang}/english`}
            >
              {t("drop2")}
            </DropdownItem>
            <DropdownItem
            onPress={handleToggle}
              className={`${fontTektur.variable} font-tektur text-[#F0D625] text-[24px] border-b border-[#F0D625] py-2`}
              href={`/${lang}/painting_children`}
            >
              {t("drop3")}
            </DropdownItem>
            <DropdownItem
            onPress={handleToggle}
              className={`${fontTektur.variable} font-tektur text-[#F0D625] text-[24px] border-b border-[#F0D625] py-2`}
              href={`/${lang}/painting_olders`}
            >
              {t("drop4")}
            </DropdownItem>
            <DropdownItem
            onPress={handleToggle}
              className={`${fontTektur.variable} font-tektur text-[#F0D625] text-[24px] border-b border-[#F0D625] py-2`}
              href={`/${lang}/chess`}
            >
              {t("drop5")}
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <NavbarItem>
          <Link
          onPress={handleToggle}
            className={`${fontTektur.variable} font-tektur text-[24px]`}
            color="foreground"
            href='#footer'
          >
            {t("contact")}
          </Link>
        </NavbarItem>
        <Button
          className={`${fontTektur.variable} font-tektur font-bold text-[24px]`}
          style={{
            borderColor: "#F0D625",
            background: "#F0D625",
            color: "#000000",
            boxShadow:
              "0 0 10px 0 #F0D625, 0 0 15px 0 #F0D625, 0 0 20px 0 #F0D625",
          }}
          onClick={handleClick}
        >
          {showPhoneNumber ? phoneNumber : t("call")}
        </Button>
      </NavbarMenu>
    </NextUINavbar>
  );
};

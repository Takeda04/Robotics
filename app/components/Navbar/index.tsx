"use client";

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
  NavbarMenu,
} from "@nextui-org/navbar";
// images
import ToggleIcon from "@/assets/icons/toggleModal.png";
import logo from "@/assets/icons/logo.png";

import { useState, useEffect } from "react";
import Image from "next/image";

import { IoMdClose } from "react-icons/io";
import { Link } from "@nextui-org/link";
import { fontTektur } from "@/config/fonts";
import {
  Button,
  ButtonGroup,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { ChevronDown } from "@/assets/icons/icons";
import { useRouter } from "next/navigation";
import { useTranslation } from "@/app/[lng]/i18n/client";

export const Navbar = ({ lng }: { lng: string }) => {
  const { t } = useTranslation(lng, 'translation', {});
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();
  const lang = window.localStorage.getItem("i18nextLng")


  const handleToggle = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleLanguageChange = (lang: string) => {

    const pathname = window.location.pathname;
    const path = pathname.slice(4, pathname.length);
    router.push(`/${lang.toLowerCase()}/${path}`);
  };

  const icons = {
    chevron: (
      <ChevronDown fill="currentColor" size={16} height={16} width={16} />
    ),
  };

  const checkScreenSize = () => {
    setIsMobile(window.innerWidth <= 1000);
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
      className="h-[100px] sm:h-[157px] relative py-5 sm:absolute border-t-[10px] border-b-[10px] border-[#F0D625]"
      maxWidth="xl"
      isMenuOpen={isOpen} // Control menu open state
      onMenuOpenChange={setIsOpen} // Handle menu open change
    >
      <NavbarBrand>
        <Link href="/">
        <Image
          src={logo}
          alt="website logo"
          width={70}
          height={70}
          className="sm:w-[111px] md:min-w-[100px]"
        />
        </Link>
      </NavbarBrand>
      {!isMobile && (
        <NavbarContent className="sm:gap-[46px] hidden sm:flex">
          <NavbarItem>
            <Link
              className={`${fontTektur.variable} font-tektur text-[24px]`}
              color="foreground"
              href="/"
            >
              {t("main")}
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className={`${fontTektur.variable} font-tektur text-[24px]`}
              color="foreground"
              href="/"
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
                  variant="bordered"
                  style={{ borderColor: "#F0D625", color: "#F0D625" }} // Button border and text color
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
                href="/robotic"
                className={`${fontTektur.variable} font-tektur text-[#F0D625] text-[24px] border-b border-[#F0D625] py-2`}
              >
                {t("drop1")}
              </DropdownItem>
              <DropdownItem
                href="/english"
                className={`${fontTektur.variable} font-tektur text-[#F0D625] text-[24px] border-b border-[#F0D625] py-2`}
              >
                {t("drop2")}
              </DropdownItem>
              <DropdownItem
                href="/painting_children"
                className={`${fontTektur.variable} font-tektur text-[#F0D625] text-[24px] border-b border-[#F0D625] py-2`}
              >
                {t("drop3")}
              </DropdownItem>
              <DropdownItem
                href="/painting_olders"
                className={`${fontTektur.variable} font-tektur text-[#F0D625] text-[24px] border-b border-[#F0D625] py-2`}
              >
                {t("drop4")}
              </DropdownItem>
              <DropdownItem
                href="/chess"
                className={`${fontTektur.variable} font-tektur text-[#F0D625] text-[24px] border-b border-[#F0D625] py-2`}
              >
                {t("drop5")}
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>

          <NavbarItem>
            <Link
              className={`${fontTektur.variable} font-tektur text-[24px]`}
              color="foreground"
              href="/"
            >
              {t("contact")}
            </Link>
          </NavbarItem>
          <Button
            onClick={() => window.open("tel:+998998552572")}
            style={{
              borderColor: "#F0D625",
              background: "#F0D625",
              color: "#000000",
              boxShadow:
                "0 0 10px 0 #F0D625, 0 0 15px 0 #F0D625, 0 0 20px 0 #F0D625",
            }}
            className={`${fontTektur.variable} font-tektur font-bold text-[24px]`}
          >
            {t("call")}
          </Button>

          <ButtonGroup className="hidden sm:flex">
            <Button
              onClick={() => handleLanguageChange("UZ")}
              style={{
                background: lng === "uz" ? "#F0D625" : "transparent",
                color: lng === "uz" ? "#FFFFFF" : "#F0D625",
                borderRadius: "15px",
                padding: "10px 20px",
              }}
              className={`${fontTektur.variable} font-tektur text-[24px]`}
            >
              UZ
            </Button>
            <Button
              onClick={() => handleLanguageChange("RU")}
              style={{
                background: lng === "ru" ? "#F0D625" : "transparent",
                color: lng === "ru" ? "#FFFFFF" : "#F0D625",
                borderRadius: "15px",
                padding: "10px 20px",
              }}
              className={`${fontTektur.variable} font-tektur text-[24px]`}
            >
              RU
            </Button>
          </ButtonGroup>
        </NavbarContent>
      )}

      {/* Mobile version */}
      {isMobile && (
        <NavbarContent className="custom-lg:hidden" justify="end">
          <ButtonGroup className="flex">
            <Button
              onClick={() => handleLanguageChange("UZ")}
              style={{
                background: lng === "uz" ? "#F0D625" : "transparent",
                color: lng === "uz" ? "#FFFFFF" : "#F0D625",
                borderRadius: "15px",
                padding: "5px 10px",
              }}
              className={`${fontTektur.variable} font-tektur text-[24px]`}
            >
              UZ
            </Button>
            <Button
              onClick={() => handleLanguageChange("RU")}
              style={{
                background: lng === "ru" ? "#F0D625" : "transparent",
                color: lng === "ru" ? "#FFFFFF" : "#F0D625",
                borderRadius: "15px",
                padding: "5px 10px",
              }}
              className={`${fontTektur.variable} font-tektur text-[24px]`}
            >
              RU
            </Button>
          </ButtonGroup>
          <button onClick={handleToggle} className="cursor-pointer">
            <div className="relative w-9 h-9">
              <div
                className={`absolute inset-0 flex justify-center items-center transition-all duration-300 ${
                  isOpen ? "opacity-100 rotate-0" : "opacity-0 rotate-90"
                }`}
              >
                <IoMdClose
                  size={35}
                  className="transition-transform duration-300"
                />
              </div>

              <div
                className={`absolute inset-0 flex justify-center items-center transition-all duration-300 ${
                  isOpen ? "opacity-0 -rotate-90" : "opacity-100 rotate-0"
                }`}
              >
                <Image
                  width={35}
                  height={35}
                  src={ToggleIcon}
                  alt="open menu icon"
                />
              </div>
            </div>
          </button>
        </NavbarContent>
      )}

      <NavbarMenu className="mt-[100px] gap-y-5">
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
            href={`/${lang}/`}
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
                variant="bordered"
                style={{ borderColor: "#F0D625", color: "#F0D625" }} // Button border and text color
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
              href={`/${lang}/robotic`}
              className={`${fontTektur.variable} font-tektur text-[#F0D625] text-[24px] border-b border-[#F0D625] py-2`}
            >
              {t("drop1")}
            </DropdownItem>
            <DropdownItem
              href={`/${lang}/english`}
              className={`${fontTektur.variable} font-tektur text-[#F0D625] text-[24px] border-b border-[#F0D625] py-2`}
            >
              {t("drop2")}
            </DropdownItem>
            <DropdownItem
              href={`/${lang}/painting_children`}
              className={`${fontTektur.variable} font-tektur text-[#F0D625] text-[24px] border-b border-[#F0D625] py-2`}
            >
              {t("drop3")}
            </DropdownItem>
            <DropdownItem
              href={`/${lang}/painting_olders`}
              className={`${fontTektur.variable} font-tektur text-[#F0D625] text-[24px] border-b border-[#F0D625] py-2`}
            >
              {t("drop4")}
            </DropdownItem>
            <DropdownItem
              href={`/${lang}/chess`}
              className={`${fontTektur.variable} font-tektur text-[#F0D625] text-[24px] border-b border-[#F0D625] py-2`}
            >
              {t("drop5")}
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <NavbarItem>
          <Link
            className={`${fontTektur.variable} font-tektur text-[24px]`}
            color="foreground"
            href={`/${lang}/`}
          >
            {t("contact")}
          </Link>
        </NavbarItem>
        <Button
          style={{
            borderColor: "#F0D625",
            background: "#F0D625",
            color: "#000000",
            boxShadow:
              "0 0 10px 0 #F0D625, 0 0 15px 0 #F0D625, 0 0 20px 0 #F0D625",
          }}
          className={`${fontTektur.variable} font-tektur font-bold text-[24px]`}
        >
          {t("call")}
        </Button>
      </NavbarMenu>
    </NextUINavbar>
  );
};

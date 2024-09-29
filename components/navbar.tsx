"use client";

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
// images
import ToggleIcon from "@/assets/icons/toggleModal.png";
import logo from "@/assets/icons/logo.png";

import { useState } from "react";
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
import { ChevronDown } from "@/assets/icons/chevron";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Initially set it to false to hide the menu
  const [activeLanguage, setActiveLanguage] = useState("UZ");
  const iconClasses = "text-xl text-default-500 pointer-events-none flex-shrink-0";

  const handleToggle = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleLanguageChange = (lang: string) => {
    setActiveLanguage(lang);
  };

  const icons = {
    chevron: (
      <ChevronDown fill="currentColor" size={16} height={16} width={16} />
    ),
  };

  return (
    <NextUINavbar
      className="h-[100px] sm:h-[157px]"
      maxWidth="xl"
      position="sticky"
      isMenuOpen={isOpen} // Control menu open state
      onMenuOpenChange={setIsOpen} // Handle menu open change
    >
      <NavbarBrand>
        <Image
          src={logo}
          alt="website logo"
          width={60}
          height={60}
          className="sm:w-[111px] sm:h-[111px]"
        />
      </NavbarBrand>
      <NavbarContent className="gap-[46px] hidden sm:flex">
        <NavbarItem>
          <Link
            className={`${fontTektur.variable} font-tektur text-[24px]`}
            color="foreground"
            href="/"
          >
            Главная
          </Link>
        </NavbarItem>
        <NavbarItem
        >
          <Link
            className={`${fontTektur.variable} font-tektur text-[24px]`}
            color="foreground"
            href="/"
          >
            О нас
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
                Курсы
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
            >
              Basic
            </DropdownItem>
            <DropdownItem
              className={`${fontTektur.variable} font-tektur text-[#F0D625] text-[24px] border-b border-[#F0D625] py-2`}
            >
              Pro
            </DropdownItem>
            <DropdownItem
              className={`${fontTektur.variable} font-tektur text-[#F0D625] text-[24px] border-b border-[#F0D625] py-2`}
            >
              Pro Plus
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <NavbarItem>
          <Link
            className={`${fontTektur.variable} font-tektur text-[24px]`}
            color="foreground"
            href="/"
          >
            Контакты
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
          Позвонить
        </Button>
        <ButtonGroup className="hidden sm:flex">
          <Button
            onClick={() => handleLanguageChange("UZ")}
            style={{
              background: activeLanguage === "UZ" ? "#F0D625" : "transparent",
              color: activeLanguage === "UZ" ? "#FFFFFF" : "#F0D625",
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
              background: activeLanguage === "RU" ? "#F0D625" : "transparent",
              color: activeLanguage === "RU" ? "#FFFFFF" : "#F0D625",
              borderRadius: "15px",
              padding: "10px 20px",
            }}
            className={`${fontTektur.variable} font-tektur text-[24px]`}
          >
            RU
          </Button>
        </ButtonGroup>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ButtonGroup className="flex">
          <Button
            onClick={() => handleLanguageChange("UZ")}
            style={{
              background: activeLanguage === "UZ" ? "#F0D625" : "transparent",
              color: activeLanguage === "UZ" ? "#FFFFFF" : "#F0D625",
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
              background: activeLanguage === "RU" ? "#F0D625" : "transparent",
              color: activeLanguage === "RU" ? "#FFFFFF" : "#F0D625",
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
      <NavbarMenu className="mt-[100px] gap-y-5">
        <NavbarItem>
          <Link
            className={`${fontTektur.variable} font-tektur text-[24px]`}
            color="foreground"
            href="/"
          >
            Главная
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className={`${fontTektur.variable} font-tektur text-[24px]`}
            color="foreground"
            href="/"
          >
            О нас
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
                Курсы
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
            >
              Basic
            </DropdownItem>
            <DropdownItem
              className={`${fontTektur.variable} font-tektur text-[#F0D625] text-[24px] border-b border-[#F0D625] py-2`}
            >
              Pro
            </DropdownItem>
            <DropdownItem
              className={`${fontTektur.variable} font-tektur text-[#F0D625] text-[24px] border-b border-[#F0D625] py-2`}
            >
              Pro Plus
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <NavbarItem>
          <Link
            className={`${fontTektur.variable} font-tektur text-[24px]`}
            color="foreground"
            href="/"
          >
            Контакты
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
          Позвонить
        </Button>
      </NavbarMenu>
    </NextUINavbar>
  );
};

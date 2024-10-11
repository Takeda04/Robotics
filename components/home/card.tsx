import { Button } from "@nextui-org/button";
import {
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Select,
  SelectItem,
  useDisclosure,
} from "@nextui-org/react";
import Image from "next/image";
import React from "react";

import { fontTektur } from "@/config/fonts";
import robot from "@/assets/images/modal_robot.png";
import { useTranslation } from "@/app/[lng]/i18n/client";

const Card = ({ lng }: { lng: string }) => {
  const { t } = useTranslation(lng, "translation", {});
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <div
        className="w-[232px] h-[215px] md:w-[651px] md:h-[474px] bg-white py-[15px] px-[15px] md:py-[28px] md:px-[50px] flex flex-col items-start"
        style={{
          borderRadius: "30px",
        }}
      >
        <p
          className={`${fontTektur.variable} font-tektur text-[#000] text-[22px] sm:text-[48px] md:text-[64px] lg:text-[80px] font-bold`}
        >
          JustRobotics
        </p>
        <p
          className={`${fontTektur.variable} font-tektur text-[#000] text-[16px] sm:text-[28px] md:text-[32px] lg:text-[40px] font-bold`}
        >
          {t("main_card")}
        </p>
        <p
          className={`text-[#000] text-[14px] sm:text-[22px] md:text-[32px] lg:text-[40px]`}
        >
          {t("sub_main_card")}
        </p>
        <Button
          className="bg-black text-[#FFE001] text-[16px] sm:text-[32px] md:h-[150px] mt-2 md:mt-0"
          onPress={onOpen}
        >
          {t("card_btn")}
        </Button>
      </div>
      <Modal
        backdrop="blur"
        className="bg-black py-[30px]"
        isOpen={isOpen}
        placement="center"
        size="3xl"
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <div className="flex flex-col items-center">
                <ModalHeader className="text-2xl">
                  Приглашаем на первый урок!
                </ModalHeader>
                <div className="sm:flex items-center justify-around">
                  <div className="w-[400px] ">
                    <ModalBody>
                      <Input
                        label="Введите свое имя"
                        labelPlacement="outside"
                        placeholder="Patrick"
                        variant="bordered"
                      />
                      <Input
                        label="Введите свое второе имя"
                        labelPlacement="outside"
                        placeholder="Handsome"
                        variant="bordered"
                      />
                      <Input
                        label="Введите номер телефона"
                        labelPlacement="outside"
                        placeholder="+998901234567"
                        type="tel"
                        variant="bordered"
                      />
                      <div className="flex w-full gap-5">
                        <Input
                          className="w-[200px]"
                          label="Возраст"
                          labelPlacement="outside"
                          placeholder="14"
                          type="age"
                          variant="bordered"
                        />
                        <Select
                          className="w-full sm:w-[240px]" // Full width on smaller screens
                          label="Выберете курс"
                          labelPlacement="outside"
                          variant="bordered"
                        >
                          {[
                            "Robotics",
                            "English",
                            "Chess",
                            "Painting for children",
                            "Painting for olders",
                          ].map((course, index) => (
                            <SelectItem key={index}>{course}</SelectItem>
                          ))}
                        </Select>
                      </div>
                    </ModalBody>
                  </div>
                  <div className="flex flex-col items-center justify-between">
                    <Image
                      alt="modal robot"
                      className="hidden md:flex w-[250px] h-[200px]"
                      height={130}
                      src={robot}
                      width={200}
                    />
                    <ModalFooter className="m-0  md:mt-14 ml-0 md:ml-8">
                      <Button color="danger" variant="flat" onPress={onClose}>
                        Назад
                      </Button>
                      <Button
                        className="bg-[#FFE000] text-black"
                        onPress={onClose}
                      >
                        Записать
                      </Button>
                    </ModalFooter>
                  </div>
                </div>
              </div>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default Card;

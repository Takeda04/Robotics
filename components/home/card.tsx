import { fontTektur } from "@/config/fonts";
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
import robot from "@/assets/images/modal_robot.png";
import { useTranslation } from "@/app/[lng]/i18n/client";

const Card = ({ lng }: { lng: string }) => {
  const { t } = useTranslation(lng, 'translation', {});
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
          onPress={onOpen}
          className="bg-black text-[#FFE001] text-[16px] sm:text-[32px] md:h-[150px] mt-2 md:mt-0"
        >
          {t("card_btn")}
        </Button>
      </div>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="center"
        backdrop="blur"
        className="bg-black py-[30px]"
        size="3xl"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <div className="flex flex-col items-center">
                <ModalHeader className="text-2xl">Приглашаем на первый урок!</ModalHeader>
                <div className="sm:flex items-center justify-around">
                  <div className="w-[400px] ">
                    <ModalBody>
                      <Input
                        labelPlacement="outside"
                        label="Введите свое имя"
                        placeholder="Patrick"
                        variant="bordered"
                      />
                      <Input
                        labelPlacement="outside"
                        label="Введите свое второе имя"
                        placeholder="Handsome"
                        variant="bordered"
                      />
                      <Input
                        labelPlacement="outside"
                        label="Введите номер телефона"
                        placeholder="+998901234567"
                        variant="bordered"
                        type="tel"
                      />
                      <div className="flex w-full gap-5">
                        <Input
                          labelPlacement="outside"
                          label="Возраст"
                          placeholder="14"
                          variant="bordered"
                          type="age"
                          className="w-[200px]"
                        />
                        <Select
                          labelPlacement="outside"
                          label="Выберете курс"
                          variant="bordered"
                          className="w-full sm:w-[240px]" // Full width on smaller screens
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
                      src={robot}
                      alt="modal robot"
                      width={200}
                      height={130}
                      className="hidden md:flex w-[250px] h-[200px]"
                    />
                    <ModalFooter className="m-0  md:mt-14 ml-0 md:ml-8">
                      <Button color="danger" variant="flat" onPress={onClose}>
                        Назад
                      </Button>
                      <Button className="bg-[#FFE000] text-black" onPress={onClose}>
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

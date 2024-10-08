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
import React from "react";

const Card = () => {
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
          твой проводник в мир технологий и искусства
        </p>
        <p
          className={`text-[#000] text-[14px] sm:text-[22px] md:text-[32px] lg:text-[40px]`}
        >
          получите бесплатное первое занятие
        </p>
        <Button
          onPress={onOpen}
          className="bg-black text-[#FFE001] text-[16px] sm:text-[32px] md:h-[150px] mt-2 md:mt-0"
        >
          Перейти к курсам
        </Button>
      </div>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
        backdrop="blur"
        className="bg-black py-[30px]"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <Input
                  labelPlacement="outside"
                  autoFocus
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
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Назад
                </Button>
                <Button color="primary" onPress={onClose}>
                  Записать
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default Card;

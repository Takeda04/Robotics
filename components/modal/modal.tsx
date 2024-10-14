import { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Input, Button, Select, SelectItem, ModalContent } from "@nextui-org/react"; // Adjust imports based on your library
import Image from "next/image";

interface MyModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  t: (key: string) => string; // Assuming you are using i18n for translation
  robot: any;
  courses: { drop: string }[];
}

interface FormData {
  name: string;
  surname: string;
  phone: string;
  age: string;
  course: string;
}

interface FormErrors {
  name?: string;
  surname?: string;
  phone?: string;
  age?: string;
  course?: string;
}

const MyModal: React.FC<MyModalProps> = ({ isOpen, onOpenChange, t, robot, courses }) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    surname: "",
    phone: "",
    age: "",
    course: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};
    if (!formData.name) newErrors.name = t("modal_name") + " is required";
    if (!formData.surname) newErrors.surname = t("modal_surename") + " is required";
    if (!formData.phone) newErrors.phone = t("form_phone") + " is required";
    if (!formData.age) newErrors.age = t("form_age") + " is required";
    if (!formData.course) newErrors.course = t("form_course") + " is required";
    return newErrors;
  };

  const handleSubmit = async () => {
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbwrTmCS4_580bQb105Kn1Ifqxw5qTD0IP6rwU59xENgg1bTjt0IazMWLufGbXQH_0dNDQ/exec", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        alert("Form successfully submitted!");
        onOpenChange(false); // Close modal
      } else {
        alert("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  return (
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
                {t("modal_title")}
              </ModalHeader>
              <div className="sm:flex items-center justify-around">
                <div className="w-[400px]">
                  <ModalBody>
                    <Input
                      label={t("modal_name")}
                      labelPlacement="outside"
                      placeholder="Patrick"
                      variant="bordered"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      isInvalid={!!errors.name}
                      errorMessage={errors.name}
                      name="first_name"
                    />
                    <Input
                      label={t("modal_surename")}
                      labelPlacement="outside"
                      placeholder="Handsome"
                      variant="bordered"
                      value={formData.surname}
                      onChange={(e) => setFormData({ ...formData, surname: e.target.value })}
                      isInvalid={!!errors.surname}
                      errorMessage={errors.surname}
                      name="last_name"
                    />
                    <Input
                      label={t("form_phone")}
                      labelPlacement="outside"
                      placeholder="+998901234567"
                      type="tel"
                      variant="bordered"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      isInvalid={!!errors.phone}
                      errorMessage={errors.phone}
                      name="phone"
                    />
                    <div className="flex w-full gap-5">
                      <Input
                        className="w-[200px]"
                        label={t("form_age")}
                        labelPlacement="outside"
                        placeholder="14"
                        type="number"
                        variant="bordered"
                        value={formData.age}
                        onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                        isInvalid={!!errors.age}
                        errorMessage={errors.age}
                        name="age"
                      />
                      <Select
                        className="w-full sm:w-[240px]"
                        label={t("form_course")}
                        labelPlacement="outside"
                        variant="bordered"
                        value={formData.course}
                        onChange={(value) => setFormData({ ...formData, course: value.target.value })}
                        isInvalid={!!errors.course}
                        errorMessage={errors.course}
                        name="course"
                      >
                        {courses.map((course, index) => (
                          <SelectItem key={index} value={course.drop}>
                            {course.drop}
                          </SelectItem>
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
                      {t("back")}
                    </Button>
                    <Button
                      className="bg-[#FFE000] text-black"
                      onPress={handleSubmit} // Call handleSubmit on click
                    >
                      {t("record_btn")}
                    </Button>
                  </ModalFooter>
                </div>
              </div>
            </div>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default MyModal;

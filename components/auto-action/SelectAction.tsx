import { Button, useDisclosure, useSteps } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import React, { useState } from "react";
import FilterSection from "../filter/FilterSection";
import { DeviceInfoType, FilterType } from "@/Type";
import MySelectMultiple from "../filter/MySelectMult";
import ResetButton from "../filter/ResetButton";
import DeviceInfo from "./DeviceInfo";
import DeviceStepper from "./DeviceStepper";
import DeviceChooseStep from "./DeviceChooseStep";
import ChooseAction from "./ChooseActionStep";

const steps = [
  { title: "First", description: "Choose Device" },
  { title: "Second", description: "Choose Action" },
  { title: "Third", description: "Final Review" },
];

const SelectAction = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { activeStep, setActiveStep } = useSteps({
    index: 0,
    count: steps.length,
  });
  const [action, setAction] = useState<{
    device: DeviceInfoType | null;
    state: number;
  }>({ device: null, state: 0 });

  console.log(action);

  return (
    <>
      <Button onClick={onOpen}>Choose Device</Button>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="6xl"
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <DeviceStepper activeStep={activeStep} steps={steps} />
            {activeStep == 0 ? (
              <DeviceChooseStep
                handleAction={setAction}
                moveNext={() => {
                  setActiveStep(activeStep + 1);
                }}
              />
            ) : activeStep === 1 && action.device !== null ? (
              <ChooseAction
                deviceInf={action.device}
                disabled={false}
                action={action}
                handleAction={setAction}
              />
            ) : (
              <ChooseAction
                deviceInf={action.device}
                disabled={true}
                action={action}
                handleAction={setAction}
              />
            )}
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => {
                setActiveStep(activeStep > 0 ? activeStep - 1 : activeStep);
              }}
            >
              Previous
            </Button>
            {activeStep == 2 ? (
              <Button
                colorScheme="green"
                mr={3}
                onClick={() => {
                  console.log("You accept this configuration", action)
                }}
              >
                Accept
              </Button>
            ) : (
              <Button
                colorScheme="blue"
                mr={3}
                onClick={() => {
                  setActiveStep(
                    activeStep < 3 && action.device !== null
                      ? activeStep + 1
                      : activeStep
                  );
                }}
              >
                Next
              </Button>
            )}

            <Button
              colorScheme="red"
              mr={3}
              onClick={() => {
                setActiveStep(0);
                setAction({ device: null, state: 0 });
                onClose();
              }}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SelectAction;

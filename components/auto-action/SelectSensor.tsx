"use client";

import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import FilterSection from "../filter/FilterSection";
import { FilterType, SensorInfoType } from "@/Type";
import SensorInfo from "./SensorInfo";
import MySelectMultiple from "../filter/MySelectMult";
import ResetButton from "../filter/ResetButton";
import { Sensor } from "@/utils/AST";


const fakeSensorList: SensorInfoType[] = [
  { name: "Garden Thermometer", type: "Thermometer", location: "Garden" },
  { name: "Light Activator", type: "DistanceSensor", location: "BathRoom" },
  { name: "Hall Light Activator", type: "DistanceSensor", location: "Hallway" },
];

const SelectSensor = ({ ast }: { ast: any }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [filter, setFilter] = useState<FilterType>({});
  const [chosenSensor, setChosenSensor] = useState<SensorInfoType>({
    name: "",
    type: "",
    location: "",
  });
  ast.addSubTree(new Sensor(chosenSensor.name, chosenSensor.type, chosenSensor.location), ast.rhs)
  return (
    <>
      <Button onClick={onOpen} size="sm" bgColor={"#3531F0"} color={"white"}>
        {chosenSensor.name !== "" ? chosenSensor.name : "Choose Sensor"}
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size={"6xl"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Choose Sensor</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FilterSection filterList={filter} setFilterList={setFilter}>
              <div className="flex gap-2">
                <MySelectMultiple
                  optList={["sensor1", "sensor2", "sensor3", "sensor4"]}
                  placeholder="Sensor"
                  filterList={filter}
                  setFilterList={setFilter}
                  objField="sensors"
                />
                <MySelectMultiple
                  optList={["Room 1", "Room 2", "Room 3", "Room 4"]}
                  placeholder="Room"
                  filterList={filter}
                  setFilterList={setFilter}
                  objField="rooms"
                />
                <ResetButton setFilterList={setFilter} />
              </div>
            </FilterSection>
            {/* Use a list of rooms fetched from the database. */}
            <div className="gap-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-4">
              {fakeSensorList.map((sensor, idx) => (
                <SensorInfo
                  key={idx}
                  sensorInf={sensor}
                  handleClick={sensor => {
                    console.log("Chosen sensor: ", sensor)
                    setChosenSensor(sensor);
                    onClose();
                  }}
                />
              ))}
            </div>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" ml={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SelectSensor;

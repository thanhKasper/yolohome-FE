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

const SelectSensor = ({ast}:{ast:any}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [filter, setFilter] = useState<FilterType>({});
  const [chosenSensor, setChosenSensor] = useState<SensorInfoType | null>(null);
  console.log("ast sensor before adding", ast)
  chosenSensor && ast.addSubTree(new Sensor(chosenSensor?.name, chosenSensor?.type, chosenSensor?.location), ast.rhs)
  return (
    <>
      <Button onClick={onOpen} size="sm" bgColor={"#3531F0"} color={"white"}>
        {chosenSensor ? chosenSensor.name : "Choose Sensor"}
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
              <SensorInfo
                sensorInf={{
                  name: "sensor x",
                  type: "Thermometer",
                  location: "Room A",
                }}
                handleClick={() => {
                  console.log("You click");
                  setChosenSensor({
                    name: "sensor x",
                    type: "Thermometer",
                    location: "Room A",
                  });
                  onClose();
                }}
              />
              <SensorInfo
                sensorInf={{
                  name: "sensor y",
                  type: "Humid Sensor",
                  location: "Room B",
                }}
                handleClick={() => {
                  setChosenSensor({
                    name: "sensor y",
                    type: "Humid Sensor",
                    location: "Room B",
                  });
                  onClose();
                }}
              />
              <SensorInfo
                sensorInf={{
                  name: "sensor k",
                  type: "Radar Sensor",
                  location: "Room R",
                }}
                handleClick={() => {
                  setChosenSensor({
                    name: "sensor k",
                    type: "Radar Sensor",
                    location: "Room R",
                  });
                  onClose();
                }}
              />
              <SensorInfo
                sensorInf={{
                  name: "sensor Z",
                  type: "Thermometer",
                  location: "Room T",
                }}
                handleClick={() => {
                  setChosenSensor({
                    name: "sensor Z",
                    type: "Thermometer",
                    location: "Room T",
                  });
                  onClose();
                }}
              />
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

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
import MySelect from "../filter/MySelectMult";
import { FilterType } from "@/Type";
import Room from "../Room";

const SelectSensor = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [filter, setFilter] = useState<FilterType>({});
  return (
    <>
      <Button onClick={onOpen} size="sm" bgColor={"#3531F0"} color={"white"}>
        Choose Sensor
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Choose Sensor</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FilterSection filterList={filter} setFilterList={setFilter}>
              <MySelect
                optList={["sensor1", "sensor2", "sensor3", "sensor4"]}
                placeholder="Sensor"
                filterList={filter}
                setFilterList={setFilter}
                objField="sensors"
              />
            </FilterSection>
            {/* Use a list of rooms fetched from the database. */}
            <Room name="Room 1" kind="sensors"/>
            <Room name="Room 1" kind="sensors"/>
            <Room name="Room 1" kind="sensors"/>
            <Room name="Room 1" kind="sensors"/>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SelectSensor;

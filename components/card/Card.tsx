"use client";
import React, { useState } from "react";
import { Switch, Input } from "@chakra-ui/react";

type DeviceKind = "devices" | "sensors";

const Card = ({ device, kind }: { device: any; kind: DeviceKind }) => {
  console.log("Device inside card: ", device);
  const [state, setState] = useState(device ? device.state : 0);
  // const [isChange, setIsChange] = useState(false);
  // const [changeName, setChangeName] = useState("Device Name");
  return (
    <div className="bg-white w-full p-4 rounded-2xl flex flex-col border-2 border-gray-200">
      <div className="flex items-center gap-4 w-full h-6">
        <img
          src={`/card/${
            device &&
            (device.type == "fan"
              ? "fan"
              : device.type == "light"
              ? "light"
              : "door")
          }.png`}
          alt=""
        />
        {/* {isChange ? (
          <Input
            variant="flushed"
            value={changeName}
            onChange={e => setChangeName(e.target.value)}
          />
        ) : ( */}
        <h4 className="text-lg font-semibold text-my-secondary">
          {device && device.name}
        </h4>
        {/* )} */}
        {/* <img
          src="/card/edit.png"
          alt=""
          onClick={() => setIsChange(old => !old)}
          className="ml-auto"
        /> */}
      </div>
      {kind == "devices" ? (
        <>
          <div className="mt-4">
            <p>
              <span className="font-semibold">State:</span> {device && (device.type == "fan" ? (device.state == 0 ? "Off" : device.state): (device.type == "door" ? (device.state == 0 ? "Lock" : "Unlock"): (device.state == 0 ? "Off" : "On")))}
            </p>
          </div>
          <div className="mt-10">
            {device.type !== "fan" ? (
              <Switch
                size="lg"
                isChecked={state == 0 ? false : true}
                onChange={() => {
                  setState(old => (old + 1) % 2);
                }}
              />
            ) : (
              <div className="flex gap-2">
                <div
                  className={`w-8 h-8 flex justify-center items-center font-semibold rounded-full border-2 border-my-secondary cursor-pointer ${
                    state == 0 ? "bg-my-secondary" : ""
                  }`}
                >
                  0
                </div>
                <div
                  className={`w-8 h-8 flex justify-center items-center font-semibold rounded-full border-2 border-my-secondary cursor-pointer ${
                    state == 1 ? "bg-my-secondary" : ""
                  }`}
                >
                  1
                </div>
                <div
                  className={`w-8 h-8 flex justify-center items-center font-semibold rounded-full border-2 border-my-secondary cursor-pointer ${
                    state == 2 ? "bg-my-secondary" : ""
                  }`}
                >
                  2
                </div>
                <div
                  className={`w-8 h-8 flex justify-center items-center font-semibold rounded-full border-2 border-my-secondary cursor-pointer ${
                    state == 3 ? "bg-my-secondary" : ""
                  }`}
                >
                  3
                </div>
                <div
                  className={`w-8 h-8 flex justify-center items-center font-semibold rounded-full border-2 border-my-secondary cursor-pointer ${
                    state == 4 ? "bg-my-secondary" : ""
                  }`}
                >
                  4
                </div>
              </div>
            )}
          </div>
        </>
      ) : (
        <div className="mt-4 h-full flex justify-center items-center">
          <p className="font-semibold text-7xl">
            86<sup>o</sup>C
          </p>
        </div>
      )}
    </div>
  );
};

export default Card;

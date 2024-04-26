'use client'
import React, { useState } from 'react'
import { Switch, Input } from "@chakra-ui/react";

type DeviceKind = "devices" | "sensors"

const Card = ({kind}: {kind: DeviceKind}) => {
  const [state, setState] = useState(0)
  const [isChange, setIsChange] = useState(false)
  const [changeName, setChangeName] = useState("Device Name")
  return (
    <div className="bg-white w-full p-4 rounded-2xl flex flex-col border-2 border-gray-200">
      <div className="flex items-center gap-4 w-full h-6">
        <img src="/card/fan.png" alt="" />
        {isChange ? (
          <Input
            variant="flushed"
            value={changeName}
            onChange={e => setChangeName(e.target.value)}
          />
        ) : (
          <h4 className="text-lg font-semibold text-my-secondary">
            {changeName}
          </h4>
        )}
        <img
          src="/card/edit.png"
          alt=""
          onClick={() => setIsChange(old => !old)}
          className="ml-auto"
        />
      </div>
      {kind == "devices" ? (
        <>
          <div className="mt-4">
            <p>State: on</p>
            <p>Connected Sensor: none</p>
          </div>
          <div className="mt-10">
            <Switch
              size="lg"
              isChecked={state == 0 ? false : true}
              onChange={() => {
                setState(old => (old + 1) % 2);
              }}
            />
          </div>
        </>
      ) : (
        <div className='mt-4 h-full flex justify-center items-center'>
          <p className='font-semibold text-7xl'>86 <sup>o</sup>C</p>
        </div>
      )}
    </div>
  );
}

export default Card
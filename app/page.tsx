"use client";

import Card from "@/components/card/Card";
import PersonWaterChart from "@/components/statistic/PersonWaterChart";
import WaterChart from "@/components/statistic/WaterChart";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { be_url } from "@/web_config";
import {DoorFactory, FanFactory, LightFactory} from "@/utils/DeviceFactory"

export default function Dashboard() {
  const [deviceList, setDeviceList] = useState([])
  useEffect(() => {
    const getStatusList = async () => {
      try {
        const getDevices= await axios.get(`${be_url}/statusDevices`);
        // console.log(getDevices.data)
        const light1Id = getDevices.data.light1
        const light2Id = getDevices.data.light2
        const fanId = getDevices.data.fan
        const doorId = getDevices.data.door
        const lightFac = new LightFactory()
        const light1Obj = lightFac.createDevice(String(light1Id))
        const light2Obj = lightFac.createDevice(String(light2Id))

        const fanFac = new FanFactory()
        const fanObj = fanFac.createDevice(String(fanId))

        const doorFac = new DoorFactory()
        const doorObj = doorFac.createDevice(String(doorId))
        setDeviceList([
          light1Obj.displayState(),
          light2Obj.displayState(),
          fanObj.displayState(),
          doorObj.displayState(),
        ]); 
      } catch (e) {
        console.log(e);
      }
    };

    getStatusList();
  }, []);

  console.log(deviceList)

  return (
    <>
      <h3 className="text-xl font-semibold">My Devices</h3>
      <div className="mt-4 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {deviceList.map((device, id) => <Card key={id} kind="devices" device={device}/>)}
        {/* <Card kind="devices" />
        <Card kind="devices" /> */}
      </div>

      <h3 className="text-xl font-semibold mt-8">My Sensors</h3>
      <div className="mt-4 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <Card kind="sensors" />
        <Card kind="sensors" />
        <Card kind="sensors" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-8">
        <WaterChart />
        <PersonWaterChart />
      </div>
    </>
  );
}

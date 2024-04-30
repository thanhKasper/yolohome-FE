import { SensorInfoType } from '@/Type'
import React from 'react'

const SensorInfo = ({sensorInf, handleClick} : {sensorInf: SensorInfoType; handleClick: (sensor: SensorInfoType) => void}) => {
  return (
    <div className="bg-slate-200 p-4 rounded-lg cursor-pointer border-2 border-slate-300 hover:bg-slate-100" onClick={() => {handleClick(sensorInf)}}>
      <p>
        <span className="font-semibold">Sensor Name:</span> {sensorInf.name}
      </p>
      <p>
        <span className="font-semibold">Sensor Type:</span> {sensorInf.type}
      </p>
      <p>
        <span className="font-semibold">Sensor Location:</span> {sensorInf.location}
      </p>
    </div>
  );
}

export default SensorInfo
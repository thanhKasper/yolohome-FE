import HumidChart from "@/components/statistic/HumidChart";
import PersonWaterChart from "@/components/statistic/PersonWaterChart";
import TempChart from "@/components/statistic/TempChart";
import WaterChart from "@/components/statistic/WaterChart";
import React from "react";

const StatisticPage = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <WaterChart />
      <HumidChart />
      {/* <PersonWaterChart/> */}
      <TempChart/>
    </div>
  );
};

export default StatisticPage;

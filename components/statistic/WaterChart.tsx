"use client";

import React, { DetailedHTMLProps, HTMLAttributes, useRef } from "react";
import { Bar } from "react-chartjs-2";
import {
  CategoryScale,
  LinearScale,
  Chart,
  BarController,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import autocolors from "chartjs-plugin-autocolors";
import { Select } from "@chakra-ui/react";

Chart.register(
  CategoryScale,
  LinearScale,
  BarController,
  BarElement,
  Title,
  Tooltip,
  Legend,
  autocolors
);

const data = [
  { year: 2010, count: 10 },
  { year: 2011, count: 20 },
  { year: 2012, count: 15 },
  { year: 2013, count: 25 },
  { year: 2014, count: 22 },
  { year: 2015, count: 30 },
  { year: 2016, count: 28 },
];

const WaterChart = () => {
  return (
    <div>
      <div className="flex gap-2 items-center">
        <h2 className="font-semibold text-xl">Water Consumption Over Time</h2>
        <Select
          placeholder="Time"
          defaultValue={"day"}
          width={"120px"}
          size={"sm"}
          bgColor={"white"}
        >
          <option value="day">By day</option>
          <option value="week">By week</option>
          <option value="month">By month</option>
          <option value="year">By year</option>
        </Select>
        <Select
          placeholder="Person"
          size="sm"
          width={"120px"}
          bgColor={"white"}
        >
          <option value="day">Person 1</option>
          <option value="week">Person 2</option>
          <option value="month">Person 3</option>
          <option value="year">Person 4</option>
        </Select>
      </div>
      <div className={`relative h-80 mt-auto`}>
        <Bar
          options={{
            maintainAspectRatio: false,
          }}
          datasetIdKey="waterchart"
          updateMode="resize"
          data={{
            labels: data.map(row => row.year),
            datasets: [
              {
                label: "Acquisitions by year",
                data: data.map(row => row.count),
                backgroundColor: "#1814F3",
              },
            ],
          }}
        />
      </div>
    </div>
  );
};

export default WaterChart;

'use client'

import Card from "@/components/card/Card";
import Sidebar from "@/components/sidebar/Sidebar";
import Topbar from "@/components/topbar/Topbar";
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, Pie } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
  datasets: [
    {
      label: "Famility Water Consumption",
      data: [8, 10, 4, 7, 12, 5, 15],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    }
  ],
};

const piedata = {
  labels: ["Person 1", "Person 2", "Person 3", "Person 4"],
  datasets: [
    {
      label: "# of Votes",
      data: [3, 1, 5, 2],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

export default function Dashboard() {
  return (
    <>
      <h3 className="text-xl font-semibold">My Devices</h3>
      <div className="mt-4 flex flex-wrap gap-6">
        <Card kind="devices" />
        <Card kind="devices" />
      </div>

      <h3 className="text-xl font-semibold mt-8">My Sensors</h3>
      <div className="mt-4 flex flex-wrap gap-6">
        <Card kind="sensors" />
        <Card kind="sensors" />
        <Card kind="sensors" />
      </div>

      <div className="md:flex md:flex-row mt-8 justify-between">
        <div className="">
          <h3 className="text-xl font-semibold">Water Consumption</h3>
          <div className="lg:w-[480px] lg:h-[270px] 2xl:w-[592px] 2xl:h-[333px] bg-white mt-4 p-4">
            <Line data={data} options={{ maintainAspectRatio: false }} />
          </div>
        </div>

        <div className="">
          <h3 className="text-xl font-semibold">Water Consumption By Person</h3>
          <div className="lg:w-[480px] lg:h-[270px] 2xl:w-[592px] 2xl:h-[333px] bg-white mt-4 p-4">
            <Pie data={piedata} options={{ maintainAspectRatio: false }} />
          </div>
        </div>
      </div>
    </>
  );
}

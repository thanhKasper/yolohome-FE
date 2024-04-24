import Card from "@/components/card/Card";
import Sidebar from "@/components/sidebar/Sidebar";
import Topbar from "@/components/topbar/Topbar";
import Image from "next/image";

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
    </>
  );
}

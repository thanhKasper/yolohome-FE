import React from "react";
import { fe_url } from "@/config";
import { NavItemType } from "../../TypeList";
import { useRouter } from "next/navigation";

const NavItem = ({
  navItem,
  currentActive,
  setActive,
}: {
  navItem: NavItemType;
  currentActive: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const router = useRouter()
  return (
    <div
      className="flex items-center h-12 mt-4 relative"
      onClick={e => {
        setActive(old => navItem.navId);
        router.push(navItem.itemLink)
      }}
    >
      <div
        className={`absolute h-full w-1 bg-my-primary rounded-e-full ${
          navItem.navId !== currentActive && "hidden"
        }`}
      ></div>
      <div className="w-8 flex items-center ml-10">
        <img
          className={`${navItem.navId == currentActive && "active-svg"}`}
          src={navItem.imgLink}
          alt=""
        />
      </div>
      <li
        className={`cursor-pointer  font-medium ${
          navItem.navId == currentActive
            ? "text-my-primary font-semibold"
            : "text-my-newtral"
        }`}
      >
        {navItem.itemName}
      </li>
    </div>
  );
};

export default NavItem;

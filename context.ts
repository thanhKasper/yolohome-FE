import {createContext} from 'react'
import { NavItemType } from './TypeList';
import {v4 as uuid} from "uuid"

const navList: NavItemType[] = [
  {
    itemName: "Dashboard",
    itemLink: "/",
    navId: "1",
    imgLink: "/sidebar/Home.svg",
  },
  {
    itemName: "Devices",
    itemLink: "/devices",
    navId: "2",
    imgLink: "/sidebar/Devices.svg",
  },
  {
    itemName: "Sensors",
    itemLink: "/sensors",
    navId: "3",
    imgLink: "/sidebar/Sensors.svg",
  },
  {
    itemName: "Auto Action",
    itemLink: "/actions",
    navId: "4",
    imgLink: "/sidebar/Auto.svg",
  },
  {
    itemName: "Activity Log",
    itemLink: "/log",
    navId: "5",
    imgLink: "/sidebar/Log.svg",
  },
  {
    itemName: "Setting",
    itemLink: "/setting",
    navId: "6",
    imgLink: "/sidebar/setting.svg",
  },
];

const CurrentNavItemContext = createContext<string>(navList[0].navId)
const SetNavItemContext = createContext<React.Dispatch<React.SetStateAction<string>>>(()=>null)

export {navList, CurrentNavItemContext, SetNavItemContext}
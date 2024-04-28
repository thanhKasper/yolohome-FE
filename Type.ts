import { BinaryOp, IfStmt, NotOp, Sensor, Threshold } from "./utils/AST";

interface NavItemType {
  itemName: string;
  itemLink: string;
  navId: string;
  imgLink: string;
}

interface FilterType {
  sensors?: string[],
  devices?: string[],
  rooms?: string[],
  searchKey?: string,
  dateFrom?: string,
  dateTo?: string
}

interface SensorInfoType {
  name: string,
  type: string, 
  location: string
}

type DeviceInfoType = SensorInfoType

type cmpType = "Time" | "Sensor" | "Choosing"

type AstType = IfStmt | BinaryOp | NotOp | Sensor | Threshold

export type { NavItemType, FilterType, SensorInfoType, cmpType, AstType, DeviceInfoType}
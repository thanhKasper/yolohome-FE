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

export type { NavItemType, FilterType, SensorInfoType}
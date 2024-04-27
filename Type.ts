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

export type { NavItemType, FilterType }
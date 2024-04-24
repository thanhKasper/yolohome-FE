"use client";

import React, { useContext, useState } from "react";
import NavItem from "./NavItem";
import { v4 as uuid } from "uuid";
import { NavItemType } from "../../TypeList";
import { CurrentNavItemContext, SetNavItemContext, navList } from "@/context";

const NavList = () => {
  const currNav = useContext(CurrentNavItemContext)
  const setCurrNav = useContext(SetNavItemContext)
  console.log(currNav);
  return (
    <ol className="mt-20">
      {navList.map((ele: NavItemType) => (
        <NavItem
          key={ele.navId}
          navItem={ele}
          currentActive={currNav}
          setActive={setCurrNav}
        />
      ))}
    </ol>
  );
};

export default NavList;

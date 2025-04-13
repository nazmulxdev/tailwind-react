import React, { use, useState } from "react";
import NavLink from "./NavLink";
import { Menu, X } from "lucide-react";

const CustomizedNavBar = ({ navData }) => {
  const [open, setOpen] = useState(false);
  const navigationData = use(navData);

  const links = navigationData.map((nav) => (
    <NavLink key={nav.id} nav={nav}></NavLink>
  ));
  return (
    <nav className="flex justify-between items-center mx-6">
      <span className="flex ">
        <button className="btn md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X className="md:hidden" /> : <Menu className="md:hidden" />}
        </button>
        <ul
          className={`md:hidden bg-amber-100 p-4 rounded-lg absolute duration-1000 ${
            open ? "top-10 left-14" : "-top-64 left-14"
          }`}
        >
          {links}
        </ul>
        <h1>My NavBar</h1>
      </span>
      <ul className="md:flex hidden gap-2">{links}</ul>
      <button>Sign In</button>
    </nav>
  );
};

export default CustomizedNavBar;

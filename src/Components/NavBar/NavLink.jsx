import React from "react";

const NavLink = ({ nav }) => {
  return (
    <li className="hover:bg-amber-500">
      <a href={nav.url}>{nav.title}</a>
    </li>
  );
};

export default NavLink;

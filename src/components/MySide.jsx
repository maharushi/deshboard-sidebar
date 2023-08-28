import React, { useState } from "react";
import {
  FaTh,
  FaBars,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaThList,
  FaUserAlt,
} from "react-icons/fa";

import { NavLink } from "react-router-dom";

const MySide = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/",
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      path: "/about",
      name: "About",
      icon: <FaUserAlt />,
    },
  ];

  return (
    <div className="container">
      <div className="sidebar" style={{ width: isOpen ? "200px" : "50px" }}>
        <div className="top_section">
          <h1 className="logo" style={{ display: isOpen ? "block" : "none" }}>
            KMR
          </h1>
          <div className="bars" style={{ marginLeft: isOpen ? "50px" : "0px" }}>
            <FaBars onClick={toggle} style={{ cursor: "pointer" }} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeClassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div
              className="link_text"
              style={{ display: isOpen ? "block" : "none" }}
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default MySide;

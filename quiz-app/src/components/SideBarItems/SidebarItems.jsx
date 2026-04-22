import React from "react";
import "./SidebarItems.css";
import Context from "../context/context";

const SidebarItems = ({ items }) => {
  const { title, icon } = items;
  return (
    <Context.Consumer>
      {(value) => {
        const { onClickNav, isActiveNav } = value;
        const onClickNavItem = () => {
          onClickNav(title);
        };
        const isActive = isActiveNav === title
        const isActiveNavStyle = isActive ? 'active-nav' : 'not-active-nav'
        return (
          <li className="sidebar-item" onClick={onClickNavItem}>
            <p className={`sidebar-icon ${isActiveNavStyle}`}>{icon}</p>
            <p className={`sidebar-title ${isActiveNavStyle}`}>{title}</p>
          </li>
        );
      }}
    </Context.Consumer>
  );
};

export default SidebarItems;

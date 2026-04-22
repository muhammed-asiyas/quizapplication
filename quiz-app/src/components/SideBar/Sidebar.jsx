import React from 'react'
import { GoHome } from "react-icons/go";
import { GrHistory } from "react-icons/gr";
import { MdPersonOutline } from "react-icons/md";
import './Sidebar.css'
import SidebarItems from '../SideBarItems/SidebarItems';

const sideBarItems = [
  {id: 1, title: 'Home', icon: <GoHome />},
  {id: 2, title: 'History', icon: <GrHistory />},
  {id: 3, title: 'Profile', icon: <MdPersonOutline />},
]

const Sidebar = () => {
  return (
    <div className='sidebar-container'>
      <h1 className='sidebar-scholar-text'>The Scholar</h1>
      <p className='level-12-collector'>LEVEL 12 COLLECTOR</p>
      <ul className='sidebar-items-container'>
        {sideBarItems.map(each => (
          <SidebarItems key={each.id} items={each} />
        ))}
      </ul>
    </div>
  )
}

export default Sidebar

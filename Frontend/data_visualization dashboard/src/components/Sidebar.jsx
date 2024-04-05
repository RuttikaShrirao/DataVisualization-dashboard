import "../index.css";
import dummyLogo from "../assets/sidebar_icons/dummyLogo.svg";
import Group1 from '../assets/sidebar_icons/Graph 1.svg' ;
import Group from '../assets/sidebar_icons/Group.svg' ;
import shoppingcart from '../assets/sidebar_icons/shopping-cart.svg' ;
import shopping from '../assets/sidebar_icons/shopping.svg'
import Chart_Line from '../assets/sidebar_icons/Chart_Line.svg'
import message from "../assets/sidebar_icons/message.svg";
import setting from "../assets/sidebar_icons/setting.svg";
import SignOutIcon from "../assets/sidebar_icons/SignOutIcon.svg";
import MenuIcon from "@mui/icons-material/Menu";
import { useEffect, useState } from "react";
import styled from "@emotion/styled";
// autodropdown
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

function Sidebar() {
 const [isOpen, setisOpen]=useState(true)
const toggle=()=>{
    setisOpen(!isOpen)
    
}


  const menuIcons = [
    {
        id:1,
      icon: Group1,
      name: "Dashboard",
    },
    {
        id:2,
      icon: Group,
      name: "Leaderboard",
    },
    {
        id:3,
      icon: shoppingcart,
      name: "order",
    },
    {
        id:4,
      icon: message,
      name: "Dashboard",
    },
    {
        id:5,
      icon: shopping,
      name: "Products",
    },
    {
        id:6,
      icon: Chart_Line,
      name: "Sales Report",
    },
    {
        id:7,
      icon: message,
      name: "Messages",
    },
    {
        id:8,
      icon: setting,
      name: "Setting",
    },
    {
        id:9,
      icon: SignOutIcon,
      name: "Sign Out",
    },
  ];
  return (
    <div className={isOpen ? "sidebar": 'sidebar-small'}>
      <div className="header-sidebar">
       
          <img src={dummyLogo} alt="Logo" className="logo-img" onClick={toggle}/>
        
        <p className={isOpen ? "brandName" :'displayToggle'} style={{fontWeight:'600',fontFamily:'poppins'}}>Vuexy</p>
        {/* <div  className={isOpen ? "menuIcons": 'displayToggle'}>
          <MenuIcon onClick={toggle}/>
        </div> */}

      </div>


      {/* ---------------*/}

      {/* ---------------- */}
    
        {menuIcons.map((e) => (
          <div className="sidebarMenu" key={e.id}>
            <img src={e.icon} alt='Logo' className={isOpen?'':'menuIconSmallSize'}  />
            <p className={isOpen?'sidebarName':'displayToggle'}>{e.name}</p>
          </div>
        ))}
     
    </div>
  );
}
export default Sidebar;

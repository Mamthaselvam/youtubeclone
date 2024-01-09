import React from 'react'
import {  Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Topbar.css'
import { FaBars } from "react-icons/fa";
import { IoMdMic } from "react-icons/io";
import google from '../images/google.jpeg'
import { BsYoutube } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { MdNotifications } from "react-icons/md";
import { useState,useEffect } from 'react';
import Loginpage from '../Pages/Loginpage.jsx'


const Topbar = ({title,toggleSidebar}) => {
  
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  function handleclick() {
    alert("You have 10+ notifications");
}
const loginpage = '/login';
  
  
  return (
    <>
    <Navbar className='topbar' >
    
        <div className='left-part'>
        <span  >
          <FaBars onClick={toggleSidebar} className='ham' />
        </span>
            < BsYoutube className='logo'/>Youtube
        </div>
        <form className='center-part'>
            <input type="search" placeholder='Search' className='type'/>
            <span className='search-logo'><IoIosSearch/></span>
             <span className='mic'><IoMdMic/></span> 
        </form>
        <div className='right-part'>
        <RiVideoAddLine  className='video' style={{marginRight:"1rem",marginTop:"9px"}}/>
        <MdNotifications onClick={handleclick} className='video' style={{marginRight:"1rem",marginTop:"9px"}}/>
        <Link to={loginpage}>
        <img src={google} />
        </Link>
        

        </div>
        
    </Navbar>
    
    </>
    
  )
}

export default Topbar
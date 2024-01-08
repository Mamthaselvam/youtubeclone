import React from 'react'
import { Link } from "react-router-dom";
import './Topbar.css'
import { IoMdMic } from "react-icons/io";
import google from '../images/google.jpeg'
import { BsYoutube } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { MdNotifications } from "react-icons/md";
import Loginpage from '../Pages/Loginpage.jsx'


const Topbar = () => {
  function handleclick() {
    alert("You have 10+ notifications");
}
const loginpage = '/login';
  
  
  return (
    <>
    <navbar className='topbar' >
        <div className='left-part'>
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
        
    </navbar>
    
    </>
    
  )
}

export default Topbar
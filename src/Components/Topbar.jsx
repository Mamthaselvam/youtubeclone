import React from 'react'

import google from '../images/google.jpeg'
import { BsYoutube } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { MdNotifications } from "react-icons/md";

const Topbar = () => {
  return (
    <>
    <navbar className='topbar' >
        <div className='left-part'>
            < BsYoutube className='logo'/>Youtube
        </div>
        <form className='center-part'>
            <input type="search" placeholder='Search' className='type'/>
            <span className='search-logo'><IoIosSearch/></span>
        </form>
        <div className='right-part'>
        <RiVideoAddLine/>
        <MdNotifications/>
        <img src={google}/>

        </div>
        
    </navbar>
    
    </>
    
  )
}

export default Topbar
import React, { useState } from 'react'

import v from '../images/v.jpg'
import fl from '../images/fl.jpg'
import rishi from '../images/rishi.jpg'
import pic from '../images/pic.jpg'
import sha from '../images/sha.jpg'
import {FaAngleRight} from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { GoHistory,GoVideo,GoTrophy,GoLightBulb } from "react-icons/go";
import { MdHistoryToggleOff,MdOutlinePodcasts } from "react-icons/md";
import { AiOutlineShopping } from "react-icons/ai"
import { RiMusicFill,RiMovie2Line,RiNewspaperLine } from "react-icons/ri";
import { TbLivePhoto } from "react-icons/tb";

import { SiYoutubegaming } from "react-icons/si";

import { LiaDownloadSolid, LiaFireAltSolid } from "react-icons/lia";
import '../Components/Sidebar.css'
import { sidecontent } from '../Data/data'


const Sidebar = () => {

    const [data ,setData]=useState(sidecontent)
  return (
    <>
    <div  className='sidebar' >  
     {data.map((text)=>(
      <>
      
      <div key={text.id}> 
      <div className='firstbar'>
        <span className='icon'>{text.icon}</span> 
        <span >{text.text}</span> 
      </div>
      </div>
      
      </>
      
     ))}
     <div className='middlebar'>
         <span className='font'>You</span>
      <span><FaAngleRight/></span>
     </div>

     <div className='middlebar'>
     <span className='icon'><CgProfile /></span>
     <span>Your Channel</span>
     </div>

     <div className='middlebar'>
     <span  className='icon'><GoHistory /></span>
     <span>History</span>
     </div>

     <div className='middlebar'>
     <span  className='icon'><GoVideo /></span>
     <span>Your Videos</span>
     </div>

     <div className='middlebar'>
     <span  className='icon'><MdHistoryToggleOff /></span>
     <span>Watch Later</span>
     </div>

     <div className='middlebar'>
     <span  className='icon'><LiaDownloadSolid /></span>
     <span>Downloads</span>
     </div>

     <div className='middlebar'>
         <span className='font'>Subscriptions</span>
     </div>

     <div className='middlebar'>
      <img src={v}/>
      <span className='pic'>Vj_Writings</span>
     </div>

     <div className='middlebar'>
     <img src={pic}/>
         <span className='pic'>Klick uh</span>
     </div>

     <div className='middlebar'>
     <img src={rishi}/>
         <span className='pic'>Rishipedia</span>
     </div>

     <div className='middlebar'>
     <img src={fl}/>
         <span className='pic'>EMC </span>
     </div>

     <div className='middlebar'>
     <img src={sha}/>
         <span className='pic'>Sha</span>
     </div>

     <div className='middlebar'>
         <span className='font'>Explore</span>
     </div>

     <div className='middlebar'>
     <span  className='icon'><LiaFireAltSolid /></span>
     <span>Trending</span>
     </div>

     <div className='middlebar'>
     <span  className='icon'><AiOutlineShopping /></span>
     <span>Shopping</span>
     </div>

     <div className='middlebar'>
     <span  className='icon'><RiMusicFill /></span>
     <span>Music</span>
     </div>

     <div className='middlebar'>
     <span  className='icon'><RiMovie2Line /></span>
     <span>Movies</span>
     </div>

     <div className='middlebar'>
     <span  className='icon'><TbLivePhoto /></span>
     <span>Live</span>
     </div>

     <div className='middlebar'>
     <span  className='icon'><SiYoutubegaming /></span>
     <span>Gaming</span>
     </div>

     <div className='middlebar'>
     <span  className='icon'>< RiNewspaperLine/></span>
     <span>News</span>
     </div>

     <div className='middlebar'>
     <span  className='icon'><GoTrophy /></span>
     <span>Sports</span>
     </div>

     <div className='middlebar'>
     <span  className='icon'><GoLightBulb /></span>
     <span>Learning</span>
     </div>

     <div className='middlebar'>
     <span  className='icon'><MdOutlinePodcasts /></span>
     <span>Podcasts</span>
     </div>
      </div>
      
    </>
  )
}

export default Sidebar
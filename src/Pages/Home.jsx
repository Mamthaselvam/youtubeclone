import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Topbar from '../Components/Topbar.jsx'
import Sidebar from '../Components/Sidebar.jsx'
import Content from "../Components/Content.jsx"
import { useState } from 'react'
import Charts from '../Components/Charts.jsx'



const Home = () => {
  const [sidebar,setSidebar]=useState(true)

  const toggleSidebar = () =>{
    setSidebar(!sidebar)
  }
  return (
    <>
    <Topbar toggleSidebar={toggleSidebar} />
    <div className='d-flex'>
     {sidebar &&  <Sidebar/> } 
   
    <Content/>
    </div>
    {/* <Charts/> */}
    </>
  )
}

export default Home
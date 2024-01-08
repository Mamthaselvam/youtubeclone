import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Topbar from '../Components/Topbar.jsx'
import Sidebar from '../Components/Sidebar.jsx'
import Content from "../Components/Content.jsx"



const Home = () => {
  return (
    <>
    <Topbar />
    <div className='d-flex'>
    <Sidebar/>
    <Content/>
    </div>
    
    </>
  )
}

export default Home
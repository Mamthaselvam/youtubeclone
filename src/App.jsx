import {Routes,Route} from 'react-router-dom'
import "@fontsource/poppins"
import Topbar from './Components/Topbar'
import '../src/Components/Topbar.css'
import Sidebar from './Components/Sidebar'
import './App.css'

import Home from "./Pages/Home"
import Content from './Components/Content'

function App() {
  

  return (
    <>
    <Topbar/>
    <Sidebar/>
    <Content/>
   
      
    </>
  )
}

export default App

import {Routes,Route} from 'react-router-dom'
import "@fontsource/poppins"
import './App.css'
import Sidebar from './Components/Sidebar'
import Home from "./Pages/Home"

function App() {
  

  return (
    <>
    {/* <Routes>
      <Route  exact path="/Home"element={<Home/>}/>
    </Routes> */}
    <Sidebar/>
      
    </>
  )
}

export default App

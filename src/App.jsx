import {Routes,Route} from 'react-router-dom'
import "@fontsource/poppins"
import './App.css'
import Home from "./Pages/Home"

function App() {
  

  return (
    <>
    <Routes>
      <Route  exact path="/Home"element={<Home/>}/>
    </Routes>

      
    </>
  )
}

export default App

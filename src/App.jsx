import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import '@fontsource/roboto'
import Home from './Pages/Home.jsx';
import Shorts from './Pages/Shorts.jsx'
import Subscription from './Pages/Subscription.jsx'
import { Routes, Route } from "react-router-dom";
import Link from './Components/Link/Links.jsx'
import Loginpage from './Pages/Loginpage.jsx';




function App() {
  

  return (

    <>
        {/* <Link/> */}
    <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/shorts" element={<Shorts />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/login" element={<Loginpage/>}/>
      </Routes>
    </>
    
    
    
  )
}

export default App

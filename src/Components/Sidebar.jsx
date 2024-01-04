import React, { useState } from 'react'
import { sidecontent } from '../Data/data'


const Sidebar = () => {

    const [data ,setData]=useState(sidecontent)
  return (
    <>
     {data.map((text)=>
      <div>
        {text.icon}
        
            {text.text}
        

      </div>
     
     
     )}

    </>
  )
}

export default Sidebar
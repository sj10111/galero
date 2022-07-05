import React, { useState } from 'react'
import axios from 'axios'

function Urls(props) {
   
   
   function sayHello() {
    console.log("hi")
    
   }
  return (
    <div>

<div className="flex   z-50 hover:scale-110 transition-all ">
            
            <button onClick={()=>{sayHello()}} className="bg-black text-white px-2 py-1 text-2xl rounded-md">zip all</button>
          </div>

    </div>
  )
}

export default Urls
import React, { useState } from "react";
import {XIcon} from '@heroicons/react/outline'
import { motion } from "framer-motion";

function ShowData(props) {
  const [show, setShow] = useState(true)
  const closePopup=()=>{
    setShow(false)

  }
  return (
    
    <motion.div>
    {show &&
   <motion.div
 
   className=" fixed top-0 left:0 justify-center items-center w-screen h-screen flex  z-10">
      <motion.div className=" fixed left-[12.5%] flex justify-center items-center bg-white w-3/4 h-3/4 rounded-3xl shadow-2xl">
        <motion.img
          src={props.queryString}
          className="relative left-[-24%]  w-[50%] h-[95%] object-cover rounded-3xl"
        />
        <motion.div className="absolute text-3xl left-[55%] top-[10%]">{props.desc}</motion.div>
      </motion.div>
     
    </motion.div>
  }
    </motion.div>
  );
}

export default ShowData;

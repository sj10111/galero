import React, { useState } from "react";
import { motion } from "framer-motion";
import DropDown from "./components/DropDown";

function ShowData(props) {
  const [show, setShow] = useState(true);
  const closePopup = () => {
    setShow(false);
  };
  return (
    <div>
      {show && (
        <div className=" fixed top-0 left:0 justify-center items-center w-screen h-screen flex  z-10">
          <div className=" fixed left-[12.5%] flex justify-center items-center bg-white w-3/4 h-3/4 rounded-3xl shadow-2xl">
            <motion.img
              src={props.queryString}
              className="relative left-[-24%]  w-[50%] h-[95%] object-cover rounded-3xl"
            />
            <div className="absolute text-3xl left-[55%] top-[10%]">
              {props.desc}
              <div className="relative">
              <DropDown urls={props.allURL.urls}  />
              </div>
            </div>
          </div>
        </div>
      )} 
    </div>
  );
}

export default ShowData;

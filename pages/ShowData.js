import React, { useState } from "react";
import { motion } from "framer-motion";
import DropDown from "./components/DropDown";
import { HeartIcon } from "@heroicons/react/solid";
import moment from "moment";

function ShowData(props) {
  const [show, setShow] = useState(true);
  const closePopup = () => {
    setShow(!setShow);
  };

  return (
    <div>
      {show && (
        <div className=" fixed top-0 left-0 justify-center items-center w-screen h-screen flex  z-10">
          <div className=" fixed  flex justify-center items-center bg-white w-3/4 h-3/4 rounded-lg shadow-2xl">
            <motion.img
              src={props.queryString}
              className=" flex absolute  w-[50%] p-5   h-full scale-85 object-contain rounded-3xl"
            />
            <div className="relative flex w-full justify-end  h-full top-[5%]  ">
              <div className=" absolute flex-row left-10">
                <div className="flex items-center">
                  <img
                    src={props.profileImage}
                    className="w-10 h-10 rounded-full mr-2"
                  />
                  <div className=" flex-row ">
                    {props.desc}
                    <div className="text-sm text-gray-400">
                      {"@" + props.instagramID}
                      <div className=" text-sm text-gray-400">
                        {moment((props.created.split("T",1)),"YYYYMMDD").fromNow() }
                        </div>
                     
                    </div>
                  </div>
                </div>
              </div>

              <div className="mr-16">
                <DropDown url={props} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShowData;

import React, { useState } from "react";
import { motion } from "framer-motion";
import ShowData from "./ShowData";
import { XIcon } from "@heroicons/react/outline";
import Masonry from "react-masonry-css";
import Urls from "./components/Urls";
import { HeartIcon } from "@heroicons/react/solid";

function Results(props) {
  const queryString = props.imageURL;
  const description = props.desc;
  const allURL = props.allURL;
  const [show, setShow] = useState(false);
  const [showAll,setShowAll]=useState(false)

  const onClickHandler = () => {
    setShow(!show);
    console.log("clicked");
  };
  if(queryString){
    setShowAll(true)
  }



  return (
<div>
    { 
      <>
      
    <motion.div className="shadow-sm flex-col p-2 rounded-lg">
     
        <motion.img
          src={queryString}
          whileHover={{ scale: 0.98, zIndex:-50 }}
          className="flex object-cover rounded-lg"
          onClick={() => {
            onClickHandler();
          }}
        />
        <div className="flex mt-2 items-center justify-between  ">

          <div className="flex items-center">
          <motion.img src={props.profileImage} className="rounded-full" />
          <div className="ml-2 text-sm">{props.userName}</div>
          </div>
          <motion.div whileHover={} className="text-dm text-gray-400 flex items-center">
         
          <HeartIcon className="text-red-300 w-5 h-5 " />
        
          {props.likes}
          </motion.div>
              

        </div>
   

      <motion.div>
        {show && (
          <motion.div className="fixed top-[15%] right-[15%] j">
            <ShowData
              queryString={queryString}
              desc={props.userName}
              allURL={allURL}
              instagramID={props.instagramID}
              profileImage={props.profileImage}
              
              created={props.created}
            />

            <div
              onClick={() => {
                onClickHandler();
              }}
              className="absolute z-30 mr-10"
            >
              <XIcon className="w-5 h-5" />
            </div>
          </motion.div>
        )}
      </motion.div>
     </motion.div>
    </>
  }
  </div>
  );
}

export default Results;

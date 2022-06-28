import React, {useState } from "react";
import { motion } from "framer-motion";
import ShowData from "./ShowData";
import { XIcon } from "@heroicons/react/outline";

function Results(props) {
  const queryString = props.imageURL;
  const description = props.desc;
  const allURL = props.allURL
  const [show, setShow] = useState(false);

  const onClickHandler = () => {
    setShow(!show);
    console.log("clicked");
  };

  return (
    <motion.div className="shadow-md flex  ">
      <motion.img
        src={queryString}
        className="flex object-cover"
        whileHover={{ scale: 1.03 }}
        onClick={() => {
          onClickHandler();
        }}
      />
      <motion.div>
        {show && (
          <motion.div
      

          className="fixed top-[15%] right-[15%]">
            <ShowData queryString={queryString} desc={description} allURL={allURL} />
            <div
              onClick={() => {
                onClickHandler();
              }}
              className="absolute z-30"
            >
              <XIcon className="w-5 h-5" />
            </div>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}

export default Results;

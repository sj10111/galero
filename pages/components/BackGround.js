import axios from "axios";
import React, { useEffect, useState } from "react";

function BackGround() {
  const [imageUrl, setImageUrl] = useState("");
  const access_key = "R6NFh3UB79dFPx7l8GRgdsrbNS2jXzR6qUSGRE8_f6Q";

  useEffect(() => {
    const fetchImages = async () => {
      const imageData = await axios
        .get("https://api.unsplash.com/photos/random/?client_id=" + access_key)
        .then((res) => {
          return res.data.urls.regular;
        })
        .catch((err) => {
          console.log(err.code);
        });
      setImageUrl(imageData);
    };

    fetchImages();
   
  }, []);

  return (
    <div
      className="w-screen h-screen bg-cover overflow-hidden top-0 fixed -z-30"
      style={{
        backgroundImage: `url(${imageUrl})`,
        // backgroundImage: `url('https://images.unsplash.com/photo-1655915382353-8f89f9bbdb03?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzNDA5ODB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTYyMTQwMjY&ixlib=rb-1.2.1&q=80')`,
      }}
    ></div>
  );
}

export default BackGround;

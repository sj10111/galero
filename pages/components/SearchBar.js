import React, { useState } from "react";
import { SearchIcon } from "@heroicons/react/outline";
import Results from "../Results";
import axios from "axios";
import Masonry from "react-masonry-css";
import Urls from "./Urls";

function SearchBar() {
  const [query, setQuery] = useState("");
  const [pass, setPass] = useState(false);
  const access_key = "R6NFh3UB79dFPx7l8GRgdsrbNS2jXzR6qUSGRE8_f6Q";
  const [images, setImages] = useState([]);

  const handleOnSubmit = (event) => {
    if (event.keyCode == 13 || event == 13) {
      getImages();
      setPass(true);
    }
  };

  const getImages = async () => {
    const imageData = await axios
      .get("https://api.unsplash.com/search/photos?per_page=18&query=" +query +"&client_id=" +access_key)
      .then((res) => {
        return res;
      });



    setImages(imageData.data.results);
  };



  return (
    <div className=" flex flex-col w-full h-full justify-center items-center">
      <div className="flex  text-white w-screen justify-center">
        <input
          className="bg-white outline-none text-black rounded-l-md rou mt-20 w-96 h-10 shadow-md pl-5 "
          placeholder="Search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onKeyDown={(e) => {
            handleOnSubmit(e);
          }}
        />
         
        <div
          onClick={() => handleOnSubmit(13)}
          className="flex bg-white mt-20 hover:text-white transition-all hover:bg-gray-200 relative w-20 h-10 items-center justify-center shadow-md rounded-r-md"
        >
          <SearchIcon className="w-7 h-7 text-black  " />
        </div>
      </div>
      {pass && (
        <div className=" w-screen  bg-white mt-20 justify-center rounded-md">
          {pass && (
            <div className=" flex justify-between w-screen absolute my-7 px-10  text-3xl">
              Photos of {query}
              <div className="">
          <Urls  />
          </div>
            </div>
          )}
          <div className="flex mt-20 justify-center">
           
          <Masonry breakpointCols={3} className="flex  w-auto">
            {images.map((value) => {
              return (
                <div className="m-2">
                  <Results
                    allURL={value}
                    imageURL={value.urls.small}
                    desc={value.alt_description} 
                    allurls={value}
                  />
                </div>
              );
            })}
          </Masonry>
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchBar;

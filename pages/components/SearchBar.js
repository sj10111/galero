import React, { useState } from "react";
import { SearchIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import Results from "../Results";
import axios from "axios";
import { motion } from "framer-motion";

function SearchBar() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [pass, setPass] = useState(false);
  const access_key = "R6NFh3UB79dFPx7l8GRgdsrbNS2jXzR6qUSGRE8_f6Q";
  const [images, setImages] = useState([]);
  const [info, setInfo] = useState([])

  const handleOnSubmit = (event) => {
    if (event.keyCode == 13 || event == 13) {
      getImages();
      setPass(true);
    }
  };

  const getImages = async () => {
    const imageData = await axios
      .get(
        "https://api.unsplash.com/search/photos?per_page=18&query=" +
          query +
          "&client_id=" +
          access_key
      )
      .then((res) => {
        return res;
      });
    console.log(imageData.data.results);
    setImages(imageData.data.results);
  };

  return (
    <div className=" flex flex-col w-full h-full justify-center items-center">
      <div className="flex  text-white w-screen justify-center">
        <input
          className="bg-white text-black rounded-l-md rou mt-20 w-96 h-10 shadow-md pl-5 "
          placeholder="Search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onKeyDown={(e) => {
            handleOnSubmit(e);
          }}
        />
        <div
          onClick={() => handleOnSubmit(13)}
          className="flex bg-white mt-20 relative w-20 h-10 items-center justify-center shadow-md rounded-r-md"
        >
          <SearchIcon className="w-7 h-7 text-black " />
        </div>
      </div>
      {pass && (
        <div className="flex w-screen bg-white mt-20 justify-center rounded-md">
          {pass && (
            <div className="absolute m-7 left-20 text-3xl">
              Photos of {query}
            </div>
          )}
          <div className="grid grid-cols-3  h-full  bg-white rounded-md mt-20">
            {images.map((value) => {
              return (
                <div className=" m-2 flex object-contain ">
                  <Results imageURL={value.urls.small} desc={value.alt_description} />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchBar;

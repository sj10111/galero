/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import PostUrls from '../../PostUrls'
import { BarLoader } from "react-spinners";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Urls(props) {
  const sizedImages=[]
  const urls=[]
  var imageSize;
  const [showButton,setShowButton]=useState(true)


  function handleZip(){
    
  }
  function sendUrls(size) {
     props.imageurls.map((value) => {
      if (size === "raw") {
        
        urls.push(value.links.download)
        setShowButton(false)
        
      }
      if (size === "full") {
        urls.push(value.links.download)
        imageSize="%26w=1080"
        setShowButton(false)

      }
      if (size === "small") {
        urls.push(value.links.download)
        imageSize="%26w=480"
        setShowButton(false)

      }
      if (size === "regular") {
        urls.push(value.links.download)
        imageSize="%26w=720"
        setShowButton(false)

      }
    })
    urls.map(value=>{
      sizedImages.push(value+imageSize)
    })
   
    PostUrls(sizedImages).then(()=>{
      setShowButton(true)
      while(urls.length >0){
        urls.pop()
        sizedImages.pop()
      }
    })
   
  }

  return (
    <>
    {!showButton && <BarLoader />}
    {showButton &&
    <Menu as="div" className="relative flex  text-left">
     
      <div>
      
        <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
          Download
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  onClick={() => {
                    sendUrls("raw");
                  }}
                  target="_blank"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Raw
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  onClick={() => {
                    sendUrls("full");
                  }}
                  target="_blank"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Full
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  onClick={() => {
                    sendUrls("regular");
                  }}
                  target="_blank"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Regular
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  onClick={() => {
                    sendUrls("small");
                  }}
                  target="_blank"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Small
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
      <div>
      </div>
    </Menu>
    }
    </>
  );
}

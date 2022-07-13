import BackGround from "./components/BackGround";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Results from "./Results";
import { zoomLevel } from "zoom-level";

export default function Home() {
function levels(){
  if (typeof window !== 'undefined') {
    console.log("hi")
  }
}

console.log(levels())
  return (
    
    <div>
      <Navbar />
      <SearchBar />
      <Results />
      <BackGround />
    </div>
  );
}

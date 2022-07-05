import BackGround from "./components/BackGround";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Results from "./Results";

export default function Home() {
  return (
    <div>
      <Navbar />
      <SearchBar />
      <Results />
      <BackGround />
    </div>
  );
}

import React from "react";
import Navbar from "./components/navbar";
import HeroContainer from "./containers/hero";
import SearchContainer from "./containers/search";

function App() {
  return (
    <>
      <Navbar />
      <HeroContainer />
      <SearchContainer />
    </>
  );
}

export default App;

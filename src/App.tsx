import React from "react";
import Navbar from "./components/navbar";
import HeroContainer from "./containers/hero";
import IconsContainer from "./containers/icons";
import SearchContainer from "./containers/search";

function App() {
  return (
    <>
      <Navbar />
      <HeroContainer />
      <SearchContainer />
      <IconsContainer />
    </>
  );
}

export default App;

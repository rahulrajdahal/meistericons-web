import React, { useEffect, useState } from "react";
import { getIcons } from "./api/fetchIcons";
import Navbar from "./components/navbar";
import HeroContainer from "./containers/hero";
import IconsContainer from "./containers/icons";
import SearchContainer from "./containers/search";
import useSearch, { Icon } from "./hooks/useSearch";

function App() {
  const [query, setQuery] = useState<string>("");
  const [icons, setIcons] = useState<Icon[]>([]);
  const [tags, setTags] = useState({});

  const getLatestIcons = async () => {
    const meisterIcons = await getIcons();

    setIcons(Object.entries(meisterIcons.iconNodes));
    setTags(meisterIcons.tags);
  };

  useEffect(() => {
    getLatestIcons();
  }, []);

  if (!icons.length) {
    return null;
  }

  return (
    <>
      <Navbar />
      <HeroContainer />
      <SearchContainer
        value={query}
        onChange={(e: any) => setQuery(e.target.value)}
      />
      <IconsContainer icons={icons} tags={tags} query={query} />
    </>
  );
}

export default App;

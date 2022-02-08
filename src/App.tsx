import React, { useEffect, useState } from "react";
import { getIcons } from "./api/fetchIcons";
import Navbar from "./components/navbar";
import HeroContainer from "./containers/hero";
import IconsContainer from "./containers/icons";
import SearchContainer from "./containers/search";
import useSearch, { Icon } from "./hooks/useSearch";
import styled from "styled-components";

function App() {
  const [query, setQuery] = useState<string>("");
  const [version, setVersion] = useState<string>("");
  const [icons, setIcons] = useState<Icon[]>([]);
  const [tags, setTags] = useState({});

  const getLatestIcons = async () => {
    const meisterIcons = await getIcons();

    setIcons(Object.entries(meisterIcons.iconNodes));
    setTags(meisterIcons.tags);
    setVersion(meisterIcons.version);
  };

  useEffect(() => {
    getLatestIcons();
  }, []);

  if (!icons.length) {
    return null;
  }
  return (
    <>
      <Navbar version={version} />
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

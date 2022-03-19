import React, { useEffect, useState } from "react";
import { getIcons } from "./api/fetchIcons";
import Navbar from "./components/navbar";
import HeroContainer from "./containers/hero";
import IconsContainer from "./containers/icons";
import SearchContainer from "./containers/search";
import useSearch, { Icon } from "./hooks/useSearch";
import styled from "styled-components";
import { FooterContainer, SponsorContainer } from "./containers";

function App() {
  const [query, setQuery] = useState<string>("");
  const [version, setVersion] = useState<string>("");
  const [icons, setIcons] = useState<Icon[]>([]);
  const [tags, setTags] = useState({});
  const [categories, setCategories] = useState({});
  const [category, setCategory] = useState<string>("All Icons");

  const getLatestIcons = async () => {
    const meisterIcons = await getIcons();

    setIcons(Object.entries(meisterIcons.iconNodes));
    setTags(meisterIcons.tags);
    setCategories(meisterIcons.categories);
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
        setQuery={setQuery}
        setCategory={setCategory}
        category={category}
        onChange={(e: any) => setQuery(e.target.value)}
      />
      <IconsContainer
        icons={icons}
        categories={categories}
        tags={tags}
        category={category}
        query={query}
      />
      <SponsorContainer />
      <FooterContainer />
    </>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import Navbar from "components/navbar";
import HeroContainer from "containers/hero";
import IconsContainer from "containers/icons";
import SearchContainer from "containers/search";
import { getIcons } from "api/fetchIcons";
import { Icon } from "hooks/useSearch";
import { SponsorContainer } from "containers";

function HomePage() {
  const [query, setQuery] = useState<string>("");
  const [icons, setIcons] = useState<Icon[]>([]);
  const [tags, setTags] = useState({});
  const [categories, setCategories] = useState({});
  const [category, setCategory] = useState<string>("All Icons");

  const getLatestIcons = async () => {
    const meisterIcons = await getIcons();

    setIcons(Object.entries(meisterIcons.iconNodes));
    setTags(meisterIcons.tags);
    setCategories(meisterIcons.categories);
  };

  useEffect(() => {
    getLatestIcons();
  }, []);

  if (!icons.length) {
    return null;
  }

  return (
    <>
      <HeroContainer />
      {/* <SearchContainer
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
      <SponsorContainer /> */}
    </>
  );
}

export default HomePage;

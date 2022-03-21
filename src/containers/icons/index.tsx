import React, { useEffect, useState } from "react";
import styled from "styled-components";
import * as icons from "meistericons/react/esm";
import IconButton from "../../components/buttons/icon";
import useSearch from "../../hooks/useSearch";
import createReactComponent from "../../helpers/createReactComponent";
import Modal from "../../components/modal";
import useCategory from "../../hooks/useCategory";

export const Container = styled.section`
  width: 100%;
  margin: 4.3rem auto;
  display: grid;
  grid-template-columns: repeat(4, minmax(1.6rem, 1fr));
  gap: 4.1rem;

  justify-items: center;

  @media (min-width: 768px) {
    width: 60%;
    margin: 4.3rem auto;
    grid-template-columns: repeat(6, minmax(1.6rem, 1fr));
  }

  @media (min-width: 1368px) {
    width: 72%;
    margin: 4.3rem auto;
    grid-template-columns: repeat(11, minmax(1.6rem, 1fr));
  }

  @media (min-width: 1440px) {
    width: auto;
    margin: 4.3rem 17.75rem;
  }
`;

type IIconsContainerProps = {
  icons: any;
  tags: any;
  categories: any;
  query: any;
  category: any;
};

function IconsContainer({
  icons,
  tags,
  categories,
  query,
  category = "developer",
}: IIconsContainerProps) {
  const searchResults = useSearch(icons, tags, query);
  const categoriesResults = useCategory(icons, categories, category);

  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <Container>
      {query.length > 0
        ? searchResults.map(([name, iconNode]: any) => (
            <IconButton
              key={name}
              name={name}
              component={createReactComponent(name, iconNode)}
              // onClick={() => setShowModal(true)}
            />
          ))
        : categoriesResults.map(([name, iconNode]: any) => (
            <IconButton
              key={name}
              name={name}
              component={createReactComponent(name, iconNode)}
              // onClick={() => setShowModal(true)}
            />
          ))}

      {/* <Modal showModal={showModal} handleClose={() => setShowModal(false)} /> */}
    </Container>
  );
}

export default IconsContainer;

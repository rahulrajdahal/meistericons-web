import React from "react";
import styled from "styled-components";
import * as icons from "meistericons/react/esm";
import IconButton from "../../components/buttons/icon";
import useSearch from "../../hooks/useSearch";
import createReactComponent from "../../helpers/createReactComponent";

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
    width: 60%;
    margin: 4.3rem auto;
    grid-template-columns: repeat(8, minmax(1.6rem, 1fr));
  }

  @media (min-width: 1440px) {
    width: 50%;
    margin: 4.3rem auto;
  }
`;

type IIconsContainerProps = { icons: any; tags: any; query: any };

function IconsContainer({ icons, tags, query }: IIconsContainerProps) {
  const searchResults = useSearch(icons, tags, query);

  return (
    <Container>
      {searchResults.map(([name, iconNode]: any) => (
        <IconButton
          key={name}
          name={name}
          component={createReactComponent(name, iconNode)}
        />
      ))}
    </Container>
  );
}

export default IconsContainer;
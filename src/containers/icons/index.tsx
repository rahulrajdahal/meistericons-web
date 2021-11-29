import React from "react";
import styled from "styled-components";
import * as icons from "meistericons";

export const Container = styled.section`
  width: 100%;
  margin: 4.3rem auto;

  display: grid;
  grid-template-columns: repeat(8, minmax(1.6rem, 1fr));
  gap: 4.1rem;

  @media (min-width: 1368px) {
    width: 30%;
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 26px;
  height: auto;

  cursor: pointer;
`;

function IconsContainer() {
  const values = Object.values(icons);

  return (
    <Container>
      {values.map((item, i) => (
        <IconContainer key={i}> {React.createElement(item)}</IconContainer>
      ))}
    </Container>
  );
}

export default IconsContainer;

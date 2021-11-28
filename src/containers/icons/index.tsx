import React from "react";
import styled from "styled-components";
import * as icons from "meistericons";

export const Container = styled.section`
  width: 80%;
  margin: 0 auto;
`;

function IconsContainer() {
  const keys = Object.keys(icons);
  const values = Object.values(icons);

  return (
    <Container>
      <icons.ArchiveIcon />
    </Container>
  );
}

export default IconsContainer;

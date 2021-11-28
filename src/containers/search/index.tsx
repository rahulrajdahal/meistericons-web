import React from "react";
import styled from "styled-components";
import Search from "../../components/search";

const Container = styled.div`
  width: 60%;
  margin: 0 auto;
  background: #f0f5f9;
  border-radius: 8px;
  padding: 1.75rem 2rem;
`;

function SearchContainer() {
  return (
    <Container>
      <Search />
    </Container>
  );
}

export default SearchContainer;

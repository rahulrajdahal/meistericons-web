import React from "react";
import styled from "styled-components";
import Search from "../../components/search";

const Container = styled.div`
  margin: 0 auto;
  background: #f0f5f9;
  border-radius: 8px;
  padding: 1.75rem 2rem;

  @media (min-width: 768px) {
    width: 80%;
  }
`;

function SearchContainer() {
  return (
    <Container>
      <Search />
    </Container>
  );
}

export default SearchContainer;

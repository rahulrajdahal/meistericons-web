import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";
import Search from "../../components/search";

const Container = styled.div`
  margin: 0 auto;
  background: #f0f5f9;
  border-radius: 8px;
  padding: 1.75rem 2rem;
  position: sticky;
  top: 0;
  z-index: 99;

  @media (min-width: 768px) {
    width: 80%;
  }
`;

type ISearchContainerProps = {
  value: string;
  setCategory: any;
  category: string;
  setQuery: any;
  onChange: (e: ChangeEvent) => void;
};
function SearchContainer({
  value,
  onChange,
  category,
  setCategory,
  setQuery,
}: ISearchContainerProps) {
  return (
    <Container>
      <Search
        setQuery={setQuery}
        value={value}
        category={category}
        onChange={onChange}
        setCategory={setCategory}
      />
    </Container>
  );
}

export default SearchContainer;

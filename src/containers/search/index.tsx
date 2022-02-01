import React, { ChangeEvent } from "react";
import styled from "styled-components";
import Search from "../../components/search";

const Container = styled.div`
  margin: 0 auto;
  background: #f0f5f9;
  border-radius: 8px;
  padding: 1.75rem 2rem;
  position: sticky;
  top: 1rem;
  z-index: 99;

  @media (min-width: 768px) {
    width: 80%;
  }
`;

type ISearchContainerProps = {
  value: string;
  onChange: (e: ChangeEvent) => void;
};
function SearchContainer({ value, onChange }: ISearchContainerProps) {
  return (
    <Container>
      <Search value={value} onChange={onChange} />
    </Container>
  );
}

export default SearchContainer;

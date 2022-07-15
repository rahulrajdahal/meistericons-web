import { ChangeEvent } from "react";
import styled from "styled-components";
import Search from "../../components/search";

const Container = styled.div`
  position: sticky;
  top: 6.25rem;
  background: #fff;
  z-index: 1;
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

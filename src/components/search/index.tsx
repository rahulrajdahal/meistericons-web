import { ChangeEvent } from "react";
import { SearchIcon } from "meistericons";
import styled from "styled-components";
import CustomDropdown from "../customDropdown";

const Container = styled.div`
  display: inline-flex;
  width: 100%;
  justify-content: center;
  max-height: 3.75rem;

  border: 1px solid #cad5e0;
  border-radius: 8px;
`;

const SearchInputContainer = styled.div`
  display: inline-flex;
  align-items: center;
  width: 100%;
  margin: 0 15.1875rem;
  background: #ffffff;
  padding: 0.8rem 1rem;
  border-left: 1px solid #cad5e0;
  border-right: 1px solid #cad5e0;
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  margin-left: 0.75rem;
`;

type ISearchProps = {
  value: string;
  category: string;
  setCategory: any;
  setQuery: any;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

function Search({
  value,
  setCategory,
  setQuery,
  onChange,
  category,
}: ISearchProps) {
  const options = [
    { id: 1, option: "All Icons" },
    { id: 2, option: "Arrows" },
    { id: 3, option: "Business" },
    { id: 4, option: "Charts" },
    { id: 5, option: "Children" },
    { id: 6, option: "Code" },
    { id: 7, option: "Communication" },
    { id: 8, option: "Date&Time" },
    { id: 9, option: "Design" },
    { id: 10, option: "Ecommerce" },
    { id: 11, option: "Education" },
    { id: 12, option: "Email" },
    { id: 13, option: "Files&Folder" },
    { id: 14, option: "Food&Drinks" },
    { id: 15, option: "Images" },
    { id: 16, option: "Layouts" },
    { id: 17, option: "Maps&Navigation" },
    { id: 18, option: "Mediacontrols" },
    { id: 19, option: "Medical" },
    { id: 20, option: "Menu" },
    { id: 21, option: "Nature" },
    { id: 22, option: "Security" },
    { id: 23, option: "Sports" },
    { id: 24, option: "Technology" },
    { id: 25, option: "Text" },
    { id: 26, option: "Transportation" },
    { id: 27, option: "Uiessentials" },
    { id: 28, option: "Useractions" },
    { id: 29, option: "Users" },
    { id: 30, option: "Weather" },
  ];

  return (
    <Container>
      <SearchInputContainer>
        <SearchIcon />
        <Input
          type="text"
          placeholder="Search for..."
          value={value}
          onChange={onChange}
        />

        <CustomDropdown
          options={options}
          category={category}
          setQuery={setQuery}
          setCategory={setCategory}
        />
      </SearchInputContainer>
    </Container>
  );
}

export default Search;

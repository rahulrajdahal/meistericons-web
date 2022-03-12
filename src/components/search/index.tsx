import { ArrowBreakLeftIcon } from "meistericons/react/esm";
import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";
import Dropdown from "../dropdown";
import { Body2, Body3 } from "../texts";

const Container = styled.div`
  display: inline-flex;
  width: 100%;
  justify-content: center;
`;

const SearchInputContainer = styled.div`
  display: inline-flex;
  align-items: center;
  width: 60%;
  background: #ffffff;
  border-radius: 8px;
  padding: 0.8rem 1rem;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  margin-left: 0.75rem;
`;

const SearchOptions = styled.option`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 14px;

  letter-spacing: 0.01em;

  color: #ffffff;

  width: 210px;

  background: #212121;
  box-shadow: 0px 5px 17px rgba(0, 0, 0, 0.2), 0px 2px 7px rgba(0, 0, 0, 0.15);
`;

type ISearchProps = {
  value: string;
  setCategory: any;
  setQuery: any;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

function Search({ value, onChange, setCategory, setQuery }: ISearchProps) {
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
        <ArrowBreakLeftIcon />
        <Input
          type="text"
          placeholder="Search for..."
          value={value}
          onChange={onChange}
        />
        <Dropdown
          onChange={(e: any) => {
            setQuery("");
            setCategory(e.target.value);
          }}
        >
          {options.map((item) => (
            <SearchOptions key={item.id}>{item.option}</SearchOptions>
          ))}
        </Dropdown>
      </SearchInputContainer>
    </Container>
  );
}

export default Search;

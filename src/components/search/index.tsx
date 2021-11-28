import { BugIcon } from "meistericons";
import React from "react";
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
  font-family: Gellix;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  color: #445668;
`;

function Search() {
  const options = [
    { id: 1, option: "All Icons" },
    { id: 1, option: "Office" },
    { id: 1, option: "Developer" },
    { id: 1, option: "Pack" },
    { id: 1, option: "Icon Pack" },
  ];

  return (
    <Container>
      <SearchInputContainer>
        <BugIcon />
        <Input type="text" placeholder="Search for..." />
        <Dropdown>
          {options.map((item) => (
            <SearchOptions key={item.id}>{item.option}</SearchOptions>
          ))}
        </Dropdown>
      </SearchInputContainer>
    </Container>
  );
}

export default Search;

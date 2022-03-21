import { ChevronDownIcon } from "meistericons";
import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";

const MDropdown = styled("div")`
  position: absolute;
  right: 0;

  border-left: 1px solid #cad5e0;
  padding: 0 1.3125rem;
  height: 100%;
  z-index: 33;
  ${tw`
    flex
    items-center
  `}
`;
const MDropdownBtn = styled("div")`
  font-weight: 500;
  font-family: Gellix;
  color: #4f4f4f;
  cursor: pointer;
  user-select: none;
  width: 100%;
  white-space: nowrap;

  display: flex;
  align-items: center;
  gap: 0.625rem;
`;

const MDropdownTitle = styled("div")`
  font-family: Gellix;
  font-size: 14px;
  line-height: 14px;
  color: #fff;
  opacity: 0.4;
  text-transform: uppercase;
  margin-bottom: 8px;
`;

const MDropdownContent = styled("div")`
  position: absolute;

  top: 3.5rem;

  right: 0;
  padding: 1rem;

  width: 210px;
  border-radius: 4px;

  background: #212121;
`;

const MDropdownUl = styled("ul")`
  margin: 0;
  padding: 0;
  height: 255px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 4px;
    background-color: trasparent;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 8px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #434343;
  }
`;

const MDropdownItem = styled("li")`
  cursor: pointer;
  color: #fff;
  margin: 0;
  padding-bottom: 5px;
  list-style: none;
  font-family: Gellix;
  font-size: 14px;
`;

type ICustomDropdownProps = {
  options: any;
  setCategory: any;
  setQuery: any;
  category: string;
};

function CustomDropdown({
  options,
  category,
  setCategory,
  setQuery,
}: ICustomDropdownProps) {
  const [isActive, setIsActive] = useState(false);

  return (
    <MDropdown>
      <MDropdownBtn onClick={() => setIsActive((prev) => !prev)}>
        {category}

        <ChevronDownIcon />
      </MDropdownBtn>

      {isActive && (
        <MDropdownContent>
          <MDropdownTitle>ICONS</MDropdownTitle>
          <MDropdownUl>
            {options.map((item: any) => (
              <MDropdownItem
                key={item.id}
                onClick={() => {
                  setQuery("");
                  setCategory(item.option);
                  setIsActive(false);
                }}
              >
                {item.option}
              </MDropdownItem>
            ))}
          </MDropdownUl>
        </MDropdownContent>
      )}
    </MDropdown>
  );
}

export default CustomDropdown;

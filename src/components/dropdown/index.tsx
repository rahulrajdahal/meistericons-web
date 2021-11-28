import React from "react";
import styled from "styled-components";

const Container = styled.select`
  border: none;
  outline: none;
  cursor: pointer;

  font-family: Gellix;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  color: #445668;
`;

type IDropdownProps = { children: any };

function Dropdown(props: IDropdownProps) {
  const { children } = props;

  return <Container>{children}</Container>;
}

export default Dropdown;

import React from "react";
import styled from "styled-components";

const Container = styled.select`
  border: none;
  outline: none;
  cursor: pointer;
<<<<<<< HEAD
  background: transparent;

=======
>>>>>>> frontend
  font-family: Gellix;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  color: #445668;
  paddingLeft:1rem;
`;

type IDropdownProps = { children: any; onChange?(e: any): any };

function Dropdown(props: IDropdownProps) {
  const { children, onChange } = props;

  return <Container onChange={onChange}>{children}</Container>;
}

export default Dropdown;

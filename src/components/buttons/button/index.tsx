import React from "react";
import styled from "styled-components";

export const Container = styled.button`
  padding: 0.5rem 1rem;
  outline: none;
  border: none;
  background: #0d1829;
  border-radius: 8px;

  font-family: Gellix;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  color: #f0f5f9;

  display: inline-flex;
  align-items: center;
  cursor: pointer;
`;

type IButtonProps = { text: string; icon: JSX.Element };
function Button(props: IButtonProps) {
  const { text, icon } = props;

  return (
    <Container>
      {icon}&nbsp; {text}
    </Container>
  );
}

export default Button;

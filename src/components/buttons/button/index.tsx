import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

interface IContainerProps {
  bg: string;
}
const Container = styled.button<IContainerProps>`
  padding: 0.5rem 1rem;
  outline: none;
  border: none;
  background: ${(p) => p.bg};
  border-radius: 8px;

  font-family: Gellix;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  color: ${(p) => p.color};

  ${tw`
  flex
  items-center
  justify-center
`}
  cursor: pointer;
`;

type IButtonProps = {
  text: string;
  icon?: JSX.Element;
  onClick?(): any;
  rest?: any;
  bg?: string;
  color?: string;
};
function Button(props: IButtonProps) {
  const {
    text,
    icon,
    onClick,
    bg = "#0d1829",
    color = "#f0f5f9",
    ...rest
  } = props;

  return (
    <Container bg={bg} color={color} onClick={onClick} {...rest}>
      {icon}&nbsp; {text}
    </Container>
  );
}

export default Button;

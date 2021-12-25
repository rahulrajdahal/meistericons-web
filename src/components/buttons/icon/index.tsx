import React from "react";
import { renderToString } from "react-dom/server";
import styled from "styled-components";

const Container = styled.button`
  border: none;
  outline: none;
  background: transparent;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border-radius: 12px;

  &:hover {
    background: #f2f2f2;
    cursor: pointer;
  }
`;

type IconButtonProps = { name: string; component: React.FC };

function IconButton({ name, component: IconComponent }: IconButtonProps) {
  const handleOnclick = () => {
    const svg = renderToString(<IconComponent key={name} />);

    navigator.clipboard.writeText(svg);
  };

  return (
    <Container key={name} aria-label={name} onClick={handleOnclick}>
      <IconComponent key={name} />
    </Container>
  );
}

export default IconButton;

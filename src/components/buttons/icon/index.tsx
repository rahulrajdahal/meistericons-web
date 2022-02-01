import React, { useState } from "react";
import { renderToString } from "react-dom/server";
import styled from "styled-components";
import Modal from "../../modal";

const Container = styled.div`
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

const Tooltip = styled.span`
  background-color: #000;
  color: #fff;
  text-align: center;
  border-radius: 4px;
  padding: 0.375rem 0.75rem;

  white-space: nowrap;

  position: absolute;
  bottom: 125%;
  left: 50%;
  margin-left: -3rem;

  &::after {
    content: " ";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -1rem;
    border-width: 5px;
    border-style: solid;
    border-color: black transparent transparent transparent;
  }
`;

type IconButtonProps = {
  name: string;
  component: React.FC;
  onClick?(): any;
  // showModal: boolean;
  // setShowModal: any;
};

function IconButton({
  name,
  component: IconComponent,
  onClick,
}: // showModal,
// setShowModal,
IconButtonProps) {
  const [showTooltip, setShowTooltip] = React.useState<boolean>(false);

  // const handleOnClick = () => {
  //   const svg = renderToString(<IconComponent key={name} />);

  //   navigator.clipboard.writeText(svg);
  // };

  // const handleonClick = () => setShowModal((prev: boolean) => !prev);

  return (
    <>
      <Container
        key={name}
        aria-label={name}
        onClick={onClick}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {showTooltip && <Tooltip>{name}</Tooltip>}

        <IconComponent key={name} />
      </Container>
    </>
  );
}

export default IconButton;

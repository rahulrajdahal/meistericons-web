import React, { useState } from "react";
import styled, { css } from "styled-components";
import Button from "../buttons/button";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: block;

  z-index: 99;
`;

const ContentContainer = styled.section`
  position: fixed;
  background: white;
  width: 80%;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 2rem;

  display: flex;
  z-index: 999;
`;

const IconContainer = styled.div`
  border: 1px solid $cdcdcd;
`;

interface IModalProps {
  showModal: boolean;
  handleClose?(): any;
}
function Modal({ showModal, handleClose }: IModalProps) {
  return (
    <>
      {showModal && (
        <Container>
          <ContentContainer>
            <IconContainer></IconContainer>
            <Button text="x" onClick={handleClose} />
          </ContentContainer>
        </Container>
      )}
    </>
  );
}

export default Modal;

import React from "react";
import styled, { keyframes } from "styled-components";

const zoom = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`;

export const Backdrop = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: ${(p) => (p.show ? "block" : "none")};
  /* background: rgba(0, 0, 0, 0.3); */
`;

export const ModalWrapper = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;

  max-width: 100%;
  height: auto;
  display: ${(p) => (p.show ? "block" : "none")};
  animation: ${zoom} 0.2s;
`;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Modal = ({ modal, show, onClose, children }) => {
  return (
    <>
      <Backdrop show={show} onClick={onClose} />
      <ModalWrapper show={show}>{children}</ModalWrapper>
    </>
  );
};

export default Modal;

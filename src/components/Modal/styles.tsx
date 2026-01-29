import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(16, 24, 40, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 24px;
`;

export const Dialog = styled.div`
  width: min(760px, 100%);
  max-height: 90vh;
  overflow: auto;
  background: #ffffff;
  border-radius: 16px;
  border: 1px solid #e9eaeb;
  box-shadow: 0 20px 48px rgba(16, 24, 40, 0.16);
`;

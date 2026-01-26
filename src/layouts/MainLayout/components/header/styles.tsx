import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  box-sizing: border-box;
  padding: 14px 16px;
  background-color: #010c1a;
  width: calc(100% - 300px);
  position: fixed;
  top: 0;
  left: 300px;
  z-index: 30;
`;

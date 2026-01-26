import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  --main-header-height: 64px;

  background-color: #FFFFFF;
  overflow: hidden;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  min-width: 0;
  overflow: hidden;
  margin-left: 300px;
  padding-top: var(--main-header-height);
`;

export const OutletContainer = styled.div`
  padding: 32px;
  padding-bottom: 32px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  flex: 1;
  min-height: 0;
  overflow: auto;
`;

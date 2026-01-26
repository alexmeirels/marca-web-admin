import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #ffffff;
  border: 1px solid #e9eaeb;
  border-radius: 12px;
  box-shadow: 0 1px 2px 0 var(--Colors-Effects-Shadows-shadow-xs, rgba(10, 13, 18, 0.05));
`;

export const IconBox = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background-color: #fdb022;
  color: #ffffff;
  margin-bottom: 24px;
`;

export const Title = styled.span`
  color: #535862;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 4px;
`;

export const Value = styled.span`
  color: #181d27;
  font-size: 24px;
  font-weight: 600;
  font-family: "Bricolage Grotesque";
`;

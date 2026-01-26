import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  width: 100%;
  background-color: #ffffff;
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 16px;
`;

export const DashboardGrid = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  width: 100%;
`;

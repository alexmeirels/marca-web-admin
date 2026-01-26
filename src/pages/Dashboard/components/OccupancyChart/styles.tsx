import styled from "styled-components";

export const Card = styled.section`
  flex: 1;
  background-color: #ffffff;
  border: 1px solid #e9eaeb;
  border-radius: 12px;
  box-shadow: 0 1px 2px 0
    var(--Colors-Effects-Shadows-shadow-xs, rgba(10, 13, 18, 0.05));
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Header = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
`;

export const Title = styled.h3`
  margin: 0;
  color: #181d27;
  font-size: 18px;
  font-weight: 600;
`;

export const ToggleGroup = styled.div`
  display: flex;
  gap: 12px;
  font-size: 12px;
`;

export const ToggleItem = styled.span<{ $active?: boolean }>`
  color: #535862;
  font-weight: 400;
  font-size: 14px;
`;

export const ChartLayout = styled.div`
  display: grid;
  grid-template-columns: 32px 1fr;
  grid-template-rows: 1fr auto;
  column-gap: 12px;
  row-gap: 8px;
  align-items: stretch;
  flex: 1;
  min-height: 0;
`;

export const YAxis = styled.div`
  position: relative;
  height: 100%;
  grid-row: 1;
  color: #667085;
  font-size: 12px;
`;

export const AxisLabel = styled.span<{ $position: number; $align: "start" | "middle" | "end" }>`
  position: absolute;
  top: ${({ $position }) => $position}%;
  left: 0;
  transform: translateY(
    ${({ $align }) => ($align === "start" ? "0" : $align === "end" ? "-100%" : "-50%")}
  );
  line-height: 1;
`;

export const ChartArea = styled.div`
  position: relative;
  flex: 1;
  min-height: 180px;
  grid-row: 1;
  border-top: 1px solid #eaecf0;
  border-bottom: 1px solid #eaecf0;
  background-image:
    linear-gradient(#f2f4f7 1px, transparent 1px),
    linear-gradient(#f2f4f7 1px, transparent 1px),
    linear-gradient(#f2f4f7 1px, transparent 1px),
    linear-gradient(#f2f4f7 1px, transparent 1px);
  background-size: 100% 1px;
  background-position: 0 20%, 0 40%, 0 60%, 0 80%;
  background-repeat: no-repeat;
`;

export const BarsRow = styled.div`
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 0;
  padding: 0 6px;
`;

export const BarColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  min-width: 0;
  flex: 1;
`;

export const Bar = styled.div`
  width: clamp(12px, 60%, 26px);
  height: var(--bar-height, 0%);
  background-color: #b54708;
  border-radius: 4px 4px 0 0;
  transition: height 0.3s ease;
`;

export const XAxis = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0;
  grid-column: 2;
  grid-row: 2;
  padding: 8px 6px 0;
`;

export const TimeLabel = styled.span`
  color: #667085;
  font-size: 11px;
  white-space: nowrap;
  flex: 1;
  text-align: center;
  min-width: 0;
`;

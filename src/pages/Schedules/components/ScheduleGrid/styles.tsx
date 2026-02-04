import styled from "styled-components";

export const Card = styled.section`
  background-color: #ffffff;
  border: 1px solid #e9eaeb;
  border-radius: 12px;
  box-shadow: 0 1px 2px 0
    var(--Colors-Effects-Shadows-shadow-xs, rgba(10, 13, 18, 0.05));
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h3`
  margin: 0;
  color: #181D27;
  font-size: 18px;
  font-weight: 600;
`;

export const Grid = styled.div<{ $rows: number }>`
  display: grid;
  grid-template-columns: 72px repeat(4, minmax(0, 1fr));
  grid-template-rows: 36px repeat(${({ $rows }) => $rows}, 28px);
  column-gap: 8px;
  row-gap: 4px;
  position: relative;
`;


export const HeaderCell = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #181D27;
  display: flex;
  align-items: center;
`;

export const CourtHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #F5F5F5;
  border-radius: 4px;
  padding: 6px 10px;
  font-size: 14px;
  font-weight: 600;
  color: #181D27;
  box-shadow: 0 1px 2px 0 rgba(10, 13, 18, 0.05);
`;
export const TimeCell = styled.div`
  font-size: 14px;
  color: #535862;
  font-weight: 400;
  display: flex;
  align-items: center;
`;

export const SlotCell = styled.button<{ $occupied?: boolean }>`
  border: 0;
  border: 1px dashed
    ${({ $occupied }) => ($occupied ? "transparent" : "#D5D7DA")};
  border-radius: 4px;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0;
  line-height: 1;
  position: relative;
  pointer-events: ${({ $occupied }) => ($occupied ? "none" : "auto")};

  &:focus-visible {
    outline: 2px solid rgba(253, 176, 34, 0.4);
    outline-offset: -1px;
  }

  > span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: inline-flex;
  }
`;

export const SlotDot = styled.span`
  display: inline-flex;
  width: 18px;
  height: 18px;
  border-radius: 999px;
  align-items: center;
  justify-content: center;
  border: 1px dashed #eaecf0;
  color: #c0c4cc;
  font-weight: 600;
  line-height: 1;
`;

export const BookingCard = styled.div`
  border-radius: 8px;
  background-color: #f79009;
  color: #ffffff;
  padding: 8px 10px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-self: stretch;
  justify-self: stretch;
  margin: 2px 0;
  z-index: 2;
`;

export const BookingTitle = styled.span`
  font-size: 11px;
  font-weight: 600;
`;

export const BookingMeta = styled.span`
  font-size: 10px;
  opacity: 0.9;
`;

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
  gap: 20px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h3`
  margin: 0;
  color: #181d27;
  font-size: 16px;
  font-weight: 600;
`;

export const RankingList = styled.div`
  border: 1px solid #f2f4f7;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const RankingItem = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 16px;
  align-items: center;
  padding: 12px 16px;
  border-bottom: 1px solid #f2f4f7;

  &:last-child {
    border-bottom: none;
  }
`;

export const RankBadge = styled.span`
  width: 40px;
  height: 40px;
  border-radius: 999px;
  background-color: #FDB022;
  box-shadow: 0 0 0 1px var(--Colors-Effects-Shadows-shadow-skeumorphic-inner-border, rgba(10, 13, 18, 0.18)) inset, 0 -2px 0 0 var(--Colors-Effects-Shadows-shadow-skeumorphic-inner, rgba(10, 13, 18, 0.05)) inset, 0 1px 2px 0 var(--Colors-Effects-Shadows-shadow-xs, rgba(10, 13, 18, 0.05));
  color: #ffffff;
  font-size: 24px;
  font-weight: 600;
  font-family: "Bricolage Grotesque", "Manrope", system-ui, -apple-system,
    "Segoe UI", sans-serif;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export const CourtInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const CourtName = styled.span`
  color: #181D27;
  font-size: 14px;
  font-weight: 500;
`;

export const CourtMeta = styled.span`
  color: #535862;
  font-size: 14px;
  font-weight: 400;
`;

export const Revenue = styled.span`
  color: #181D27;
  font-size: 16px;
  font-weight: 600;
  white-space: nowrap;
`;

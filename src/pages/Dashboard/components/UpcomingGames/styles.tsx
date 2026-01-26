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

export const GamesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const GameRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 52px;
  padding-bottom: 12px;
  border-bottom: 1px solid #E9EAEB;

  &:last-of-type {
    border-bottom: none;
    padding-bottom: 0;
  }
`;

export const GameInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const GameName = styled.span`
  color: #181D27;
  font-size: 14px;
  font-weight: 500;
`;

export const GameMeta = styled.span`
  color: #535862;
  font-size: 14px;
  font-weight: 400;
`;

export const TimeBadge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 4px 10px;
  border-radius: 8px;
  background-color: #F5F5F5;
  color: #414651;
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
`;

export const ShowMore = styled.button`
  border: none;
  background: none;
  color: #B54708;
  font-size: 14px;
  font-weight: 600;
  align-self: flex-end;
  cursor: pointer;
  padding: 0;
`;

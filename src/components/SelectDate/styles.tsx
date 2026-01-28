import styled from "styled-components";

export const Root = styled.div<{ $fullWidth?: boolean }>`
  display: flex;
  width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "auto")};
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;

export const DateButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  border: 1px solid #D5D7DA;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 10px 14px;
  box-shadow: 0 1px 2px 0 rgba(10, 13, 18, 0.05);
  cursor: pointer;

  &:focus,
  &:focus-visible,
  &:active {
    outline: none;
    box-shadow: 0 0 0 2px rgba(253, 176, 34, 0.2);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

export const NavButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: 1px solid #D5D7DA;
  background-color: #ffffff;
  padding: 10px
  box-shadow: 0 1px 2px 0 rgba(10, 13, 18, 0.05);
  color: #101828;
  padding: 10px;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
  /* remove realces de foco/hover padrão */
  &:focus,
  &:focus-visible,
  &:active {
    outline: none !important;
    box-shadow: none !important;
  }
  &.Mui-focusVisible {
    outline: none !important;
    box-shadow: none !important;
  }
  &::-moz-focus-inner {
    border: 0 !important;
  }
  &:-moz-focusring {
    outline: none !important;
  }
`;

export const DateIconWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #475467;
`;

export const DateText = styled.span`
  font-weight: 600;
  font-size: 14px;
  color: #414651;
  white-space: nowrap;
  line-height: var(--Line-height-text-sm, 20px);
`;

import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 200px;
`;

export const Container = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
  background-color: #13161b;
  border: 1px solid #22262f;
  border-radius: 8px;
  padding: 6px 12px;

  cursor: pointer;
  transition:
    transform 120ms ease,
    box-shadow 120ms ease;

  /* REMOVE BORDA DE FOCO */
  outline: none;

  &:focus {
    outline: none;
    box-shadow: none;
  }

  &:focus-visible {
    outline: none;
    box-shadow: none;
  }

  &:active {
    outline: none;
    box-shadow: none;
    transform: scale(0.98);
  }
`;

export const BoxIcon = styled.div<{ $open: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 32px;
  width: 32px;
  border-radius: 6px;
  background-color: ${({ $open }) => ($open ? "#22262f" : "#13161b")};
`;

export const Dropdown = styled.div`
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  width: 264px;
  border-radius: 10px;
  background-color: #13161b;
  border: 1px solid #22262f;
  padding: 8px;
  z-index: 10;
`;

export const DropdownTitle = styled.span`
  display: block;
  color: #8a8f96;
  font-size: 11px;
  letter-spacing: 0.6px;
  margin: 2px 6px 8px;
`;

export const DropdownItem = styled.button<{ $isSelected?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: ${({ $isSelected }) =>
    $isSelected ? "#22262f" : "#13161b"};
  border-radius: 10px;
  padding: 8px 10px;
  color: #f7f7f7;
  cursor: pointer;

  & + & {
    margin-top: 8px;
  }
`;

export const ItemText = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  flex: 1 1 auto;
  min-width: 0;
`;

export const ItemName = styled.span`
  color: #f7f7f7;
  font-size: 14px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ItemNeighborhood = styled.span`
  color: #94979c;
  font-size: 12px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ItemDot = styled.span<{ $active?: boolean }>`
  height: 10px;
  width: 10px;
  flex: 0 0 auto;
  position: relative;
  border-radius: 999px;
  border: 2px solid #3b4048;
  background-color: ${({ $active }) => ($active ? "#f07f1a" : "transparent")};
  border-color: ${({ $active }) => ($active ? "#f07f1a" : "#3b4048")};

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 4px;
    height: 4px;
    border-radius: 999px;
    background-color: ${({ $active }) => ($active ? "#ffffff" : "transparent")};
    transform: translate(-50%, -50%);
  }
`;

export const NewCompanyButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  width: 100%;
  margin-top: 10px;
  padding: 8px 10px;
  border-radius: 10px;
  border: 1px solid #2a2f37;
  background-color: #161a21;
  color: #cecfd2;
  font-family: var(--Font-family-font-family-body, Manrope);
  font-size: var(--Font-size-text-sm, 14px);
  font-style: normal;
  font-weight: 600;
  line-height: var(--Line-height-text-sm, 20px);
  cursor: pointer;
`;

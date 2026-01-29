import styled from "styled-components";

export const Card = styled.section`
  background: #ffffff;
  border: 1px solid #e9eaeb;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 1px 2px 0 rgba(10, 13, 18, 0.05);
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const SearchField = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 12px;
  border-radius: 10px;
  background: #f9fafb;
  border: 1px solid #f2f4f7;
`;

export const SearchIcon = styled.span`
  color: #667085;
  display: inline-flex;
  align-items: center;
`;

export const Input = styled.input`
  border: none;
  background: transparent;
  font-size: 14px;
  color: #101828;
  width: 100%;

  &::placeholder {
    color: #667085;
  }

  &:focus {
    outline: none;
  }
`;

export const SelectField = styled.div`
  position: relative;
  min-width: 200px;
`;

export const Select = styled.select`
  width: 100%;
  border: 1px solid #e9eaeb;
  background: #ffffff;
  border-radius: 10px;
  padding: 10px 36px 10px 12px;
  font-size: 14px;
  color: #101828;
  appearance: none;

  &:focus {
    outline: 2px solid rgba(253, 176, 34, 0.25);
    outline-offset: 0;
  }
`;

export const SelectIcon = styled.span`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%) rotate(180deg);
  pointer-events: none;
`;

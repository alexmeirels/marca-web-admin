import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  gap: 4px;
  align-items: start;
  margin-top: 24px;
  margin-bottom: 12px;
  padding: 0px 24px;
  justify-content: space-between;
`;

export const HeaderGrid = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
  margin: 0;
  color: #101828;
  font-size: 20px;
  font-weight: 600;
`;

export const Subtitle = styled.p`
  margin: 6px 0 0;
  color: #667085;
  font-size: 14px;
`;

export const CloseButton = styled.button`
  border: none;
  background: none;
  font-size: 24px;
  color: #98a2b3;
  cursor: pointer;
  line-height: 1;
  padding: 4px;
  width: 32px;
  height: 32px;
  border-radius: 8px;

  &:focus-visible {
    outline: 2px solid rgba(253, 176, 34, 0.4);
    outline-offset: 2px;
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 8px 24px 24px;
`;

export const GridTwo = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
`;

export const GridThree = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
`;

export const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: #344054;
  display: inline-flex;
  align-items: center;
  gap: 8px;
`;

export const Input = styled.input`
  border: 1px solid #d0d5dd;
  border-radius: 10px;
  padding: 10px 12px;
  font-size: 14px;
  color: #101828;
  background: #ffffff;

  &::placeholder {
    color: #98a2b3;
  }

  &:focus {
    outline: 2px solid rgba(253, 176, 34, 0.25);
    outline-offset: 0;
  }
`;

export const Select = styled.select`
  border: 1px solid #d0d5dd;
  border-radius: 10px;
  padding: 10px 36px 10px 12px;
  font-size: 14px;
  color: #101828;
  background: #ffffff;
  appearance: none;

  &:focus {
    outline: 2px solid rgba(253, 176, 34, 0.25);
    outline-offset: 0;
  }
`;

export const SelectIcon = styled.span`
  position: absolute;
  right: 12px;
  top: 38px;
  pointer-events: none;
  transform: rotate(180deg);
`;

export const TextArea = styled.textarea`
  border: 1px solid #d0d5dd;
  border-radius: 12px;
  padding: 12px;
  font-size: 14px;
  color: #101828;
  background: #ffffff;
  resize: vertical;

  &::placeholder {
    color: #98a2b3;
  }

  &:focus {
    outline: 2px solid rgba(253, 176, 34, 0.25);
    outline-offset: 0;
  }
`;

export const HelpBadge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  border-radius: 999px;
  border: 1px solid #d0d5dd;
  color: #98a2b3;
  font-size: 11px;
  font-weight: 600;
`;

export const Footer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-top: 8px;
`;

export const GhostButton = styled.button`
  border: 1px solid #d0d5dd;
  border-radius: 12px;
  padding: 12px 16px;
  font-size: 15px;
  font-weight: 600;
  background: #ffffff;
  color: #344054;
  cursor: pointer;
`;

export const PrimaryButton = styled.button`
  border: 1px solid #fdb022;
  border-radius: 12px;
  padding: 12px 16px;
  font-size: 15px;
  font-weight: 600;
  background: #fdb022;
  color: #101828;
  cursor: pointer;
  box-shadow: 0 1px 2px 0 rgba(16, 24, 40, 0.08);
`;

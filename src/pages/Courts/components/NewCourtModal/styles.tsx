import styled from "styled-components";

export const ModalContent = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Header = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 20px;
  color: #101828;
`;

export const Subtitle = styled.p`
  margin: 6px 0 0;
  color: #667085;
  font-size: 14px;
`;

export const CloseButton = styled.button`
  border: none;
  background: transparent;
  font-size: 22px;
  cursor: pointer;
  color: #667085;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: #344054;
`;

export const TextInput = styled.input`
  height: 44px;
  border-radius: 10px;
  border: 1px solid #e4e7ec;
  padding: 0 12px;
  font-size: 14px;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 14px 16px;
  border-radius: 12px;
  border: 1px solid #eef2f6;
  background: #f9fafb;
`;

export const SectionTitle = styled.h3`
  margin: 0;
  font-size: 14px;
  color: #101828;
`;

export const CheckboxList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px 18px;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #101828;
`;

export const Checkbox = styled.input`
  width: 16px;
  height: 16px;
`;

export const OtherField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 8px;
`;

export const OtherInput = styled.input`
  height: 40px;
  border-radius: 10px;
  border: 1px solid #e4e7ec;
  padding: 0 12px;
  font-size: 14px;
  background: #ffffff;
`;

export const ToggleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`;

export const Toggle = styled.input`
  width: 38px;
  height: 22px;
  appearance: none;
  background: #d0d5dd;
  border-radius: 999px;
  position: relative;
  cursor: pointer;
  transition: background 0.2s ease;

  &::after {
    content: "";
    position: absolute;
    width: 18px;
    height: 18px;
    background: #ffffff;
    border-radius: 50%;
    top: 2px;
    left: 2px;
    transition: transform 0.2s ease;
  }

  &:checked {
    background: #f97316;
  }

  &:checked::after {
    transform: translateX(16px);
  }
`;

export const UploadInput = styled.input`
  font-size: 14px;
`;

export const HelperText = styled.p`
  margin: 0;
  font-size: 12px;
  color: #667085;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Actions = styled.div`
  display: flex;
  gap: 12px;

  button {
    height: 38px;
    padding: 0 16px;
    border-radius: 10px;
    border: 1px solid #e4e7ec;
    background: #ffffff;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
  }

  button:last-child {
    background: #f97316;
    color: #ffffff;
    border-color: #f97316;
  }
`;

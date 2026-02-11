import styled from "styled-components";

export const Container = styled.main`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: linear-gradient(135deg, #f5f7fb 0%, #eef1f7 100%);
`;

export const Card = styled.section`
  width: 100%;
  max-width: 420px;
  padding: 32px;
  border-radius: 16px;
  background: #ffffff;
  box-shadow: 0 24px 40px rgba(15, 23, 42, 0.12);
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 24px;
  color: #0f172a;
`;

export const Subtitle = styled.p`
  margin: 0;
  font-size: 14px;
  color: #64748b;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  font-size: 13px;
  font-weight: 600;
  color: #1f2937;
`;

export const Input = styled.input`
  height: 44px;
  border-radius: 10px;
  border: 1px solid #e2e8f0;
  padding: 0 14px;
  font-size: 14px;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:focus {
    outline: none;
    border-color: #1f2937;
    box-shadow: 0 0 0 3px rgba(15, 23, 42, 0.12);
  }
`;

export const Button = styled.button`
  height: 46px;
  border: none;
  border-radius: 12px;
  background: #0f172a;
  color: #ffffff;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 12px 20px rgba(15, 23, 42, 0.18);
  }
`;

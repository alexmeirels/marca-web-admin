import styled from "styled-components";

export const Card = styled.article`
  border-radius: 16px;
  overflow: hidden;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  display: flex;
  flex-direction: column;
  box-shadow: 0 12px 24px rgba(15, 23, 42, 0.08);
`;

export const ImageWrapper = styled.div`
  position: relative;
  height: 160px;
  background: #e2e8f0;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

export const StatusBadge = styled.span<{ $statusColor: string }>`
  position: absolute;
  top: 12px;
  right: 12px;
  background: ${(props) => props.$statusColor};
  color: #ffffff;
  font-size: 12px;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 999px;
`;

export const Content = styled.div`
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 18px;
  color: #111827;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  font-size: 14px;
  color: #6b7280;
`;

export const Value = styled.span`
  color: #111827;
  font-weight: 600;
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const Tag = styled.span`
  padding: 4px 10px;
  border-radius: 999px;
  background: #0f172a;
  color: #ffffff;
  font-size: 12px;
  font-weight: 600;
`;

export const ActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 38px;
  border-radius: 10px;
  border: 1px solid #e5e7eb;
  background: #ffffff;
  color: #111827;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: box-shadow 0.2s ease, transform 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 8px 16px rgba(15, 23, 42, 0.12);
  }
`;

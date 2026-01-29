import styled from "styled-components";

export const Card = styled.section`
  background: #ffffff;
  border: 1px solid #e9eaeb;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 1px 2px 0 rgba(10, 13, 18, 0.05);
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 4px 12px;
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: #101828;
`;

export const ExportButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border: 1px solid #e9eaeb;
  border-radius: 10px;
  background: #ffffff;
  color: #101828;
  padding: 8px 12px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Thead = styled.thead`
  text-align: left;
`;

export const Tr = styled.tr`
  border-bottom: 1px solid #eaecf0;

  &:last-child {
    border-bottom: none;
  }
`;

export const Th = styled.th<{ $align?: "left" | "right" }>`
  padding: 12px 8px;
  font-size: 12px;
  font-weight: 600;
  color: #667085;
  text-align: ${({ $align }) => $align ?? "left"};
`;

export const Td = styled.td`
  padding: 12px 8px;
  font-size: 13px;
  color: #101828;
  vertical-align: middle;
`;

export const DateText = styled.div`
  font-weight: 600;
`;

export const TimeText = styled.div`
  color: #667085;
  font-size: 12px;
  margin-top: 2px;
`;

export const Pill = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 4px 8px;
  border-radius: 8px;
  border: 1px solid #e4e7ec;
  font-size: 12px;
  color: #101828;
  background: #ffffff;
`;

export const StatusPill = styled(Pill)<{
  $variant: "confirmed" | "pending" | "completed" | "cancelled";
}>`
  border: none;
  color: #ffffff;
  background: ${({ $variant }) => {
    switch ($variant) {
      case "confirmed":
        return "#F97316";
      case "pending":
        return "#111827";
      case "cancelled":
        return "#EF4444";
      default:
        return "#ffffff";
    }
  }};
  ${({ $variant }) =>
    $variant === "completed"
      ? `
    border: 1px solid #e4e7ec;
    color: #101828;
    background: #ffffff;
  `
      : ""}
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
`;

export const IconButton = styled.button`
  border: none;
  background: none;
  padding: 0;
  color: #101828;
  cursor: pointer;
`;

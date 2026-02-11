import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  background-color: #010c1a;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  overflow: auto;
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
`;

export const FooterActions = styled.div`
  position: relative;
`;

export const ProfileCard = styled.button<{ $active?: boolean }>`
  display: flex;
  align-items: center;
  border: none;
  background: #101828;
  border-radius: 12px;
  padding: 12px;
  width: 100%;
  color: #ffffff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:focus,
  &:focus-visible {
    outline: none;
    box-shadow: none;
  }
`;

export const Avatar = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #e2e8f0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  color: #0f172a;
  font-weight: 700;
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 2px;
`;

export const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  text-align: left;
  gap: 8px;
`;

export const ProfileName = styled.span`
  font-size: 14px;
  font-weight: 600;
`;

export const ProfileEmail = styled.span`
  font-size: 12px;
  color: #98a2b3;
`;

export const MenuTrigger = styled.button<{ $active?: boolean }>`
  border: none;
  padding: 1px 10px;
  background: ${(props) => (props.$active ? "#22262F" : "transparent")};
  color: #98a2b3;
  font-size: 20px;
  cursor: pointer;
  border-radius: 8px;

  &:focus,
  &:focus-visible {
    outline: none;
    box-shadow: none;
  }
`;

export const FooterMenu = styled.div<{ $open: boolean }>`
  position: absolute;
  left: calc(100% + 8px);
  bottom: 0;
  background: #0b1220;
  border-radius: 14px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 220px;
  box-shadow: 0 16px 32px rgba(15, 23, 42, 0.35);
  opacity: ${(props) => (props.$open ? 1 : 0)};
  pointer-events: ${(props) => (props.$open ? "auto" : "none")};
  transform: ${(props) => (props.$open ? "translateY(0)" : "translateY(6px)")};
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
`;

export const FooterItem = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  border-radius: 10px;
  border: none;
  background: transparent;
  color: #e4e7ec;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.06);
  }
`;

export const FooterItemDanger = styled(FooterItem)`
  color: #f97066;
`;

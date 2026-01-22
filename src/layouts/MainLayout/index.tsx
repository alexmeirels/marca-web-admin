import { Outlet } from "react-router-dom";
import { Container, Content, OutletContainer } from "./styles";
import Sidebar from "../../components/Sidebar";
import HeaderMainLayout from "./components/header";

export default function MainLayout() {
  return (
    <Container>
      <Sidebar />
      <Content>
        <HeaderMainLayout />
        <OutletContainer>
          <Outlet />
        </OutletContainer>
      </Content>
    </Container>
  );
}

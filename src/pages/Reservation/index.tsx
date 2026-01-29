import styled from "styled-components";
import HeaderPage from "../../components/HeaderPage";
import ReservationFilters from "./components/ReservationFilters";
import ReservationList from "./components/ReservationList";

export default function Reservation() {
  return (
    <Container>
      <HeaderPage
        title="Reservas"
        subTitle="Auditoria e histórico de todas as reservas"
      />
      <ReservationFilters />
      <ReservationList />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

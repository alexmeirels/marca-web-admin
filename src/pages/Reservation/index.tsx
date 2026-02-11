import HeaderPage from "../../components/HeaderPage";
import ReservationFilters from "./components/ReservationFilters";
import ReservationList from "./components/ReservationList";
import { Container } from "./styles";

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

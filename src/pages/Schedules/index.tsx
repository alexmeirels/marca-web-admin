import * as React from "react";

import { getSchedules } from "../../api/schedulesService";
import SelectedDate from "../../components/SelectDate";
import { Container, HeaderContainer } from "./styles";
import HeaderPage from "../../components/HeaderPage";
import ScheduleGrid from "./components/ScheduleGrid";

export default function Schedules() {
  const [date, setDate] = React.useState<Date>(new Date());
  const requestGetSchedules = async () => {
    const data = await getSchedules();
    console.log(data);
  };

  React.useEffect(() => {
    requestGetSchedules();
  }, []);

  return (
    <Container>
      <HeaderContainer>
        <HeaderPage
          title="Agenda"
          subTitle="Gerenciamento de reservas em tempo real"
        />

        <SelectedDate
          value={date}
          onChange={(d) => setDate(d)}
          onPrev={() =>
            setDate(
              (d) => new Date(d.getFullYear(), d.getMonth(), d.getDate() - 1),
            )
          }
          onNext={() =>
            setDate(
              (d) => new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1),
            )
          }
          size="medium"
        />
      </HeaderContainer>
      <ScheduleGrid />
    </Container>
  );
}

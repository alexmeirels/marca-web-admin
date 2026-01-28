import * as React from "react";

import { getSchedules } from "../../api/schedulesService";
import SelectedDate from "../../components/SelectDate";
import { Container, HeaderContainer } from "./styles";
import HeaderPage from "../../components/HeaderPage";
import ScheduleGrid from "./components/ScheduleGrid";

type SlotStatus = "available" | "paid" | "pending";

type Slot = {
  time: string; // "08:00"
  status: SlotStatus;
};

const hours: string[] = [
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
];

function generateSlots(sampleBusy: Record<string, SlotStatus>): Slot[] {
  return hours.map((h) => ({
    time: h,
    status: sampleBusy[h] ?? "available",
  }));
}

export default function Schedules() {
  const [date, setDate] = React.useState<Date>(new Date());
  const [courtFilter, setCourtFilter] = React.useState<string>("all");
  const [openDialog, setOpenDialog] = React.useState(false);

  const newBooking = () => setOpenDialog(true);

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

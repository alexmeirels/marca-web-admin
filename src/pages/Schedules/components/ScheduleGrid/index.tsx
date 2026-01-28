import Icon from "../../../../components/Icon";
import {
  Card,
  Header,
  Title,
  Grid,
  TimeCell,
  HeaderCell,
  CourtHeader,
  SlotCell,
  SlotDot,
  BookingCard,
  BookingTitle,
  BookingMeta,
} from "./styles";

const courts = [
  "Quadra 1 - Society",
  "Quadra 2 - Beach Tennis",
  "Quadra 3 - Volei",
  "Quadra 4 - Futevolei",
];

const buildTimes = (startHour: number, endHour: number) => {
  const times: string[] = [];
  for (let hour = startHour; hour <= endHour; hour += 1) {
    times.push(`${String(hour).padStart(2, "0")}:00`);
    if (hour !== endHour) {
      times.push(`${String(hour).padStart(2, "0")}:30`);
    }
  }
  return times;
};

const times = buildTimes(6, 23);

type Booking = {
  title: string;
  meta: string;
  courtIndex: number;
  start: string;
  durationMinutes: number;
};

const bookings: Booking[] = [
  {
    title: "Carlos Souza",
    meta: "Society • 12:00 - 13:00",
    courtIndex: 2,
    start: "12:00",
    durationMinutes: 60,
  },
  {
    title: "Maria Santos",
    meta: "Beach Tennis • 13:00 - 14:00",
    courtIndex: 1,
    start: "13:00",
    durationMinutes: 60,
  },
  {
    title: "João Silva",
    meta: "Society • 14:00 - 15:30",
    courtIndex: 0,
    start: "14:00",
    durationMinutes: 90,
  },
  {
    title: "Ana Lima",
    meta: "Beach Tennis • 15:30 - 16:30",
    courtIndex: 1,
    start: "15:30",
    durationMinutes: 60,
  },
  {
    title: "Pedro Costa",
    meta: "Society • 16:00 - 17:00",
    courtIndex: 0,
    start: "16:00",
    durationMinutes: 60,
  },
  {
    title: "Juliana Alves",
    meta: "Futevolei • 14:00 - 15:00",
    courtIndex: 3,
    start: "14:00",
    durationMinutes: 60,
  },
];

const timeToMinutes = (time: string) => {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
};

const isSlotOccupied = (time: string, courtIndex: number) => {
  const slotStart = timeToMinutes(time);
  return bookings.some((booking) => {
    if (booking.courtIndex !== courtIndex) return false;
    const bookingStart = timeToMinutes(booking.start);
    const bookingEnd = bookingStart + booking.durationMinutes;
    return slotStart >= bookingStart && slotStart < bookingEnd;
  });
};

const getRowForTime = (time: string) => {
  const index = times.indexOf(time);
  return index === -1 ? 2 : index + 2;
};

export default function ScheduleGrid() {
  return (
    <Card>
      <Header>
        <Title>Grade de Horários</Title>
      </Header>
      <Grid $rows={times.length}>
        <HeaderCell>Horário</HeaderCell>
        {courts.map((court) => (
          <CourtHeader key={court}>{court}</CourtHeader>
        ))}

        {times.map((time) => (
          <TimeCell key={time}>{time}</TimeCell>
        ))}

        {times.map((time) =>
          courts.map((_court, courtIndex) => (
            <SlotCell
              key={`${time}-${courtIndex}`}
              type="button"
              $occupied={isSlotOccupied(time, courtIndex)}
              style={{
                gridRow: getRowForTime(time),
                gridColumn: courtIndex + 2,
              }}
            >
              <Icon size={12} name="plus" fill="#535862"></Icon>
            </SlotCell>
          )),
        )}

        {bookings.map((booking) => (
          <BookingCard
            key={`${booking.title}-${booking.start}-${booking.courtIndex}`}
            style={{
              gridRow: `${getRowForTime(booking.start)} / span ${
                booking.durationMinutes / 30
              }`,
              gridColumn: booking.courtIndex + 2,
            }}
          >
            <BookingTitle>{booking.title}</BookingTitle>
            <BookingMeta>{booking.meta}</BookingMeta>
          </BookingCard>
        ))}
      </Grid>
    </Card>
  );
}

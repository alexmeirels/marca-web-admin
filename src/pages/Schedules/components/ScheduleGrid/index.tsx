import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Icon from "../../../../components/Icon";
import NewBookingModal from "../NewBookingModal";
import { NewBookingSchema, type NewBookingFormValues } from "../../schema";
import type { ScheduleResponse } from "../../../../api/schedulesService";
import {
  Card,
  Header,
  Title,
  Grid,
  TimeCell,
  HeaderCell,
  CourtHeader,
  SlotCell,
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

const timeToMinutes = (time: string) => {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
};

const getRowForTime = (time: string) => {
  const index = times.indexOf(time);
  return index === -1 ? 2 : index + 2;
};

type ScheduleGridProps = {
  selectedDate: Date;
  isCreating?: boolean;
  onCreateSchedule: (values: NewBookingFormValues) => Promise<unknown>;
  onRefreshSchedules: () => Promise<unknown>;
  schedules: ScheduleResponse[] | null;
};

const buildDateTimeFromSlot = (date: Date, time: string) => {
  const [hours, minutes] = time.split(":").map(Number);
  return new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    hours,
    minutes,
    0,
    0,
  );
};

export default function ScheduleGrid({
  selectedDate,
  isCreating = false,
  onCreateSchedule,
  onRefreshSchedules,
  schedules,
}: ScheduleGridProps) {
  const [openModal, setOpenModal] = React.useState(false);
  const form = useForm<NewBookingFormValues>({
    resolver: zodResolver(NewBookingSchema),
    defaultValues: {
      title: "",
      rentalDuration: 60,
      scheduleType: "SINGLE",
      startedAt: new Date(),
      endedAt: new Date(),
      status: "PENDING",
      peopleAmount: undefined,
      totalValue: 0,
      paymentStatus: "PENDING",
    },
  });
  const handleOpenModalAtTime = React.useCallback(
    (time: string) => {
      const startDateTime = buildDateTimeFromSlot(selectedDate, time);
      form.setValue("startedAt", startDateTime, { shouldValidate: true });
      form.setValue("endedAt", startDateTime, { shouldValidate: true });
      setOpenModal(true);
    },
    [form, selectedDate],
  );

  console.log("form", form.formState.errors);

  const handleCreateSchedule = React.useCallback(
    async (values: NewBookingFormValues) => {
      const payload = {
        ...values,
        rentalDuration:
          typeof values.rentalDuration === "number"
            ? values.rentalDuration
            : undefined,
        totalValue:
          typeof values.totalValue === "number" ? values.totalValue : 0,
      };
      await onCreateSchedule(payload);
      const refreshed = await onRefreshSchedules();
      return Boolean(refreshed);
    },
    [onCreateSchedule, onRefreshSchedules],
  );

  const bookings = React.useMemo<Booking[]>(() => {
    if (!schedules) return [];
    return schedules.map((schedule) => {
      const startedAt = new Date(schedule.startedAt);
      const endedAt = new Date(schedule.endedAt);
      const start = `${String(startedAt.getHours()).padStart(2, "0")}:${String(
        startedAt.getMinutes(),
      ).padStart(2, "0")}`;
      const durationMinutes = Number.isFinite(
        endedAt.getTime() - startedAt.getTime(),
      )
        ? Math.max(
            0,
            Math.round((endedAt.getTime() - startedAt.getTime()) / 60000),
          )
        : (schedule.rentalDuration ?? 0);
      const rawIndex =
        typeof schedule.courtId === "number" ? schedule.courtId - 1 : 0;
      const courtIndex = Math.min(Math.max(rawIndex, 0), courts.length - 1);
      return {
        title: schedule.title || "Reserva",
        meta: schedule.status,
        courtIndex,
        start,
        durationMinutes,
      };
    });
  }, [schedules]);

  const isSlotOccupied = React.useCallback(
    (time: string, courtIndex: number) => {
      const slotStart = timeToMinutes(time);
      return bookings.some((booking) => {
        if (booking.courtIndex !== courtIndex) return false;
        const bookingStart = timeToMinutes(booking.start);
        const bookingEnd = bookingStart + booking.durationMinutes;
        return slotStart >= bookingStart && slotStart < bookingEnd;
      });
    },
    [bookings],
  );

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

        {times.map((time: string) => (
          <TimeCell key={time}>{time}</TimeCell>
        ))}

        {times.map((time: string) =>
          courts.map((_court, courtIndex) => (
            <SlotCell
              key={`${time}-${courtIndex}`}
              type="button"
              $occupied={isSlotOccupied(time, courtIndex)}
              onClick={() => handleOpenModalAtTime(time)}
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
      <NewBookingModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        form={form}
        onSubmit={handleCreateSchedule}
        isLoading={isCreating}
      />
    </Card>
  );
}

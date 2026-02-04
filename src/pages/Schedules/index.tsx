import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import SelectedDate from "../../components/SelectDate";
import { Container, HeaderContainer } from "./styles";
import HeaderPage from "../../components/HeaderPage";
import ScheduleGrid from "./components/ScheduleGrid";
import { formatDateYMD, parseDateYMD } from "../../utils";
import useSchedules from "../../hooks/useSchedules";
import LoadingOverlay from "../../components/LoadingOverlay";

export default function Schedules() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialDate = parseDateYMD(searchParams.get("date") ?? "") ?? new Date();
  const [date, setDate] = useState<Date>(initialDate);
  const { loading, getSchedules, createSchedule, schedules } = useSchedules();

  useEffect(() => {
    getSchedules({ date: formatDateYMD(date) });
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      next.set("date", formatDateYMD(date));
      return next;
    });
  }, [date, getSchedules, setSearchParams]);

  return (
    <Container>
      <LoadingOverlay
        loading={loading.getSchedules}
        heightRatio={0.2}
        size={48}
        centerWithin="container"
      />
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
      <ScheduleGrid
        selectedDate={date}
        onCreateSchedule={createSchedule}
        schedules={schedules}
        isCreating={loading.createSchedule}
        onRefreshSchedules={() => getSchedules({ date: formatDateYMD(date) })}
      />
    </Container>
  );
}

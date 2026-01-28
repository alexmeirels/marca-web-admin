import * as React from "react";
import {
  ChevronLeftRounded as ChevronLeftRoundedIcon,
  ChevronRightRounded as ChevronRightRoundedIcon,
  CalendarTodayRounded as CalendarTodayRoundedIcon,
} from "@mui/icons-material";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { Popover, Paper } from "@mui/material";
import {
  Root,
  Row,
  DateButton,
  NavButton,
  DateIconWrapper,
  DateText,
} from "./styles";
import type { ISelectedDateProps } from "./types";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import Icon from "../Icon";

const defaultFormat = (date: Date) =>
  new Intl.DateTimeFormat("pt-BR", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  })
    .format(date)
    .replace(/^\w/, (c) => c.toUpperCase());

export default function SelectedDate({
  value,
  onChange,
  onPrev,
  onNext,
  formatLabel = defaultFormat,
  minDate,
  maxDate,
  disabled,
  size = "medium",
  fullWidth,
  className,
}: ISelectedDateProps) {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const openCalendar = (e: React.MouseEvent<HTMLElement>) => {
    if (disabled) return;
    setAnchorEl(e.currentTarget);
  };

  const closeCalendar = () => setAnchorEl(null);
  const open = Boolean(anchorEl);

  const handleSelectDate = (nextValue: Dayjs | null) => {
    if (!nextValue) return;

    const dateObj = nextValue.toDate();
    if (dateObj instanceof Date && !isNaN(dateObj.getTime())) {
      onChange(dateObj);
      closeCalendar();
    }
  };

  return (
    <Root className={className} $fullWidth={fullWidth}>
      <Row>
        <DateButton
          type="button"
          onClick={openCalendar}
          disabled={disabled}
          aria-label="Abrir calendário"
        >
          <DateIconWrapper>
            <Icon name="calendarDs" size={20} stroke="#414651" />
          </DateIconWrapper>
          <DateText>{formatLabel(value)}</DateText>
        </DateButton>

        <NavButton onClick={onPrev} disabled={disabled}>
          <Icon name="chevronLeftDs" size={20} stroke="#414651" />
        </NavButton>

        <NavButton onClick={onNext} disabled={disabled}>
          <Icon name="chevronRightDs" size={20} stroke="#414651" />
        </NavButton>

        <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={closeCalendar}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Paper elevation={4} sx={{ p: 1, borderRadius: 3 }}>
            <DateCalendar
              value={value ? dayjs(value) : null}
              onChange={handleSelectDate}
              minDate={minDate ? dayjs(minDate) : undefined}
              maxDate={maxDate ? dayjs(maxDate) : undefined}
              disabled={disabled}
              slotProps={{ day: { disableRipple: true } }}
            />
          </Paper>
        </Popover>
      </Row>
    </Root>
  );
}

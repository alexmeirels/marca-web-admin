export function addDays(date: Date, delta: number) {
  const d = new Date(date);
  d.setDate(d.getDate() + delta);
  return d;
}

export function formatLongPtBR(date: Date) {
  // "Sábado, 11 de Outubro"
  const weekday = new Intl.DateTimeFormat("pt-BR", { weekday: "long" }).format(
    date
  );
  const day = date.getDate().toString().padStart(2, "0");
  const month = new Intl.DateTimeFormat("pt-BR", { month: "long" }).format(
    date
  );
  return `${capitalize(weekday)}, ${day} de ${capitalize(month)}`;
}
export function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}


export function dateTimeToISO(baseDate: Date, hhmm: string) {
  const [h, m] = hhmm.split(":").map(Number);
  const d = new Date(
    baseDate.getFullYear(),
    baseDate.getMonth(),
    baseDate.getDate(),
    h,
    m,
    0,
    0
  );
  return d.toISOString();
}

export function addMinutesISO(isoStart: string, minutes: number) {
  const d = new Date(isoStart);
  d.setMinutes(d.getMinutes() + minutes);
  return d.toISOString();
}

export function formatDateYMD(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function parseDateYMD(value: string) {
  const [year, month, day] = value.split("-").map(Number);
  if (!year || !month || !day) return null;
  const date = new Date(year, month - 1, day);
  if (
    Number.isNaN(date.getTime()) ||
    date.getFullYear() !== year ||
    date.getMonth() !== month - 1 ||
    date.getDate() !== day
  ) {
    return null;
  }
  return date;
}

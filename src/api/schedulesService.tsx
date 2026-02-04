// src/api/services/userService.ts
import api from "./index";

export const schedules = "/schedules";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface ScheduleResponse {
  canceledAt: string | null;
  courtId: number | null;
  createdAt: string;
  deletedAt: string | null;
  endedAt: string;
  id: number;
  paymentStatus: "PAID" | "PENDING" | "CANCELLED";
  peopleAmount: number | null;
  rentalDuration: number | null;
  scheduleType: "SINGLE" | "RECURRING";
  startedAt: string;
  status: "CONFIRMED" | "PENDING" | "CANCELLED";
  title: string;
  totalValue: number;
  updatedAt: string;
  userId: number | null;
  uuid: string;
}

export const getSchedules = async (
  params?: Record<string, unknown>,
): Promise<ScheduleResponse[]> => {
  const { data } = await api.get(schedules, params ? { params } : undefined);
  console.log(data);
  return data as ScheduleResponse[];
};

// 🧩 Tipo para os parâmetros
export interface CreateScheduleParams {
  title?: string;
  rentalDuration?: number; 
  scheduleType: "SINGLE" | "RECURRING";
  startedAt: Date; 
  endedAt: Date;
  status: "CONFIRMED" | "PENDING" | "CANCELLED";
  peopleAmount?: number;
  totalValue: number;
  paymentStatus: "PAID" | "PENDING" | "CANCELLED";
}

// 🧠 Função usando o tipo
export const createSchedule = async (
  params: CreateScheduleParams
): Promise<CreateScheduleParams> => {
  const { data } = await api.post("/schedules", params);
  return data;
};

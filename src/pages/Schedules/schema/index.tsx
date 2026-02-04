import { z } from "zod";

export const NewBookingSchema = z.object({
  title: z.string().min(1, "Título obrigatório"),
  rentalDuration: z.number().optional(),
  scheduleType: z.enum(["SINGLE", "RECURRING"]),
  startedAt: z.date(),
  endedAt: z.date(),
  status: z.enum(["PENDING", "CONFIRMED", "CANCELLED"]),
  peopleAmount: z.number().min(1, "Mínimo de 1 pessoa"),
  totalValue: z.number().int().min(1, "Valor total obrigatório"),
  paymentStatus: z.enum(["PENDING", "PAID", "CANCELLED"]),
});

export type NewBookingFormValues = z.infer<typeof NewBookingSchema>;

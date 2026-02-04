import { useCallback, useMemo, useState } from "react";
import useCallbackApi from "../useCallbackApi";
import { createSchedule, getSchedules } from "../../api/schedulesService";
import type { CreateScheduleParams, ScheduleResponse } from "../../api/schedulesService";

type GetSchedulesParams = Record<string, unknown> | undefined;

export default function useSchedules() {
  const [schedules, setSchedules] = useState<ScheduleResponse[] | null>(null);
  const [getLoading, getSchedulesCallback, getError] = useCallbackApi(
    (params?: GetSchedulesParams) => getSchedules(params),
    [],
  );

  const [createLoading, createScheduleCallback, createError] = useCallbackApi(
    (params: CreateScheduleParams) => createSchedule(params),
    [],
  );

  const loading = useMemo(
    () => ({ getSchedules: getLoading, createSchedule: createLoading }),
    [createLoading, getLoading],
  );

  const error = useMemo(
    () => ({ getSchedules: getError, createSchedule: createError }),
    [createError, getError],
  );

  const getSchedulesWithState = useCallback(
    async (params?: GetSchedulesParams) => {
      const data = await getSchedulesCallback(params);
      setSchedules(data);
      return data;
    },
    [getSchedulesCallback],
  );

  return {
    loading,
    error,
    schedules,
    getSchedules: getSchedulesWithState,
    createSchedule: createScheduleCallback,
  };
}

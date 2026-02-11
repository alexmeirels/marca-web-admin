import { publicApi } from "./index";

export type LoginParams = {
  email: string;
  password: string;
};

export const login = async (
  email: string,
  password: string,
): Promise<unknown> => {
  const { data } = await publicApi.post("api/auth/login", { email, password });
  return data;
};

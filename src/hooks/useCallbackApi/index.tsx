import { useState, useCallback } from "react";

type AsyncFunction<TArgs extends unknown[], TResult> = (
  ...args: TArgs
) => Promise<TResult>;

function useCallbackApi<TArgs extends unknown[], TResult>(
  callback: AsyncFunction<TArgs, TResult>,
  deps: unknown[] = [],
): [boolean, (...args: TArgs) => Promise<TResult>, boolean] {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const funcCallback = useCallback(async (...args: TArgs): Promise<TResult> => {
    setLoading(true);
    setError(false);
    try {
      const result = await callback(...args);
      return result;
    } catch (err) {
      console.error("Error in useCallbackApi:", err);
      setError(true);
      throw err;
    } finally {
      setLoading(false);
    }
  }, deps);

  return [loading, funcCallback, error];
}

export default useCallbackApi;

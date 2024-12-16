import { useEffect, useState } from "react";

export function useDebounce<T>(value: T, delay: number = 250) {
  const [debounceValue, setDebounceValue] = useState<T>(value);

  useEffect(() => {
    const timeOutHandler = setTimeout(() => setDebounceValue(value), delay);
    return () => clearTimeout(timeOutHandler);
  }, [value, delay]);
  return debounceValue;
}

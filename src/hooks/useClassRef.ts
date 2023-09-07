import { useEffect, useRef } from 'react';

// interface RefObject<T> {
//   readonly current: T | null | undefined;
// }
const useClassRef = (value: string) => {
  const elementRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    elementRef.current = document.querySelector(value);
  }, [value]);

  return elementRef;
};

export default useClassRef;

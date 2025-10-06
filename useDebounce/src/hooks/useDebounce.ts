import { useCallback, useEffect, useRef } from "react";

export default function useDebounce<T extends (...args: any[]) => any>(fn: T, delay: number) {

    const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null);

    useEffect(() => {
        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        }
    }, [])

    const debounceFn = useCallback((...args: Parameters<T>) => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => fn(...args), delay);
    }, [fn, delay])

    return debounceFn;
}
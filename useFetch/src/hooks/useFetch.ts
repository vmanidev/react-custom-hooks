import { useEffect, useState } from "react";
import type { ErrorPayload } from "../types/fetch";

export default function useFetch<T = any>(url: string) {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<ErrorPayload>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            try {
                setError(null);

                const response = await fetch(url);

                if (!response.ok) {
                    setError({ message: "Network Error." });
                    return;
                }

                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                setData(null);
                setError({ message: "Failed to fetch data." });
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, error, loading };
}

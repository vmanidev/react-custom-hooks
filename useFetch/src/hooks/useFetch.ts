import { useEffect, useState } from "react";
import type { ErrorPayload } from "../types/fetch";


export default function useFetch(url: string) {

    const [data, setData] = useState(null);
    const [error, setError] = useState<ErrorPayload>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(url)
            .then(async (response) => {
                if (!response.ok) {
                    setError({ message: "Network error." });
                }
                setData((await response.json()))
            })
            .catch(() => {
                setData(null);
                setError({ message: "Failed to fetch data." });
            })
            .finally(() => setLoading(false));
    }, [url]);

    return { data, error, loading };
}
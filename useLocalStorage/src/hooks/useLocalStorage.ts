import { useEffect, useState } from "react";

export default function useLocalStorage(key: string) {

    const [storage, setStorage] = useState<string | null>(localStorage.getItem(key));

    useEffect(() => {
        //Sync localStorage whenever the key or storage state updates
        if (storage) localStorage.setItem(key, storage);
        else localStorage.removeItem(key);
    }, [storage, key]);

    const getItem = <T>(): T | null => {
        try {
            return storage ? JSON.parse(storage) : null;
        } catch {
            return null;
        }
    }

    const setItem = <T>(value: T) => {
        if (value !== undefined && value !== null) setStorage(JSON.stringify(value));
        else setStorage(null);
    }

    const removeItem = () => {
        setStorage(null);
    }

    return { getItem, setItem, removeItem };
}
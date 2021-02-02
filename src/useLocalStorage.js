import { useState, useEffect } from "react";

export const useLocalStorage = (keyName, initialValue) => {
    const getInitialState = () => {
        const localStorageState = localStorage.getItem(keyName);
        if (localStorageState === null) {
            return initialValue;
        }

        return JSON.parse(localStorageState);
    };

    const [state, setState] = useState(getInitialState)

    useEffect(() => {
        localStorage.setItem(keyName, JSON.stringify(state));
    }, [keyName, state]);

    return [
        state,
        setState,
    ];
};

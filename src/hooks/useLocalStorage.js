import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
    
    const [state, setState] = useState(() => {
        try {
            const persistedStateSerialized = localStorage.getItem(key);
            if (persistedStateSerialized) {
                return JSON.parse(persistedStateSerialized);
            }
            return initialValue;
        } catch (err) {
            return initialValue;
        }
    });

    
    const setLocalStorageState = (value) => {
        setState(value);
        
        
        const valueToStore = value instanceof Function ? value(state) : value; 

        localStorage.setItem(key, JSON.stringify(valueToStore));
    };

    return [
        state,
        setLocalStorageState
    ];
};
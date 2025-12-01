import { useState } from 'react';

export const useForm = (initialValues, onSubmitHandler) => {
    const [values, setValues] = useState(initialValues);

    const changeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        
        console.log("Form submitted!"); 
        console.log("Current values:", values);     

        if (onSubmitHandler) {
            onSubmitHandler(values);
        } else {
            console.error("No submit handler provided!");
        }
    };

    return {
        values,
        changeHandler,
        onSubmit,
    };
};
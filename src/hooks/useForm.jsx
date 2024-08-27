import { useState } from "react";

const useForm = (initialValues) => {
    const [values, setValue] = useState(initialValues);

    const resetForm = () => {
        setValue(initialValues);
    }
    

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValue(
            {
                ...values,
                [name]: value,
            }
        );
    }

    return [values, handleChange,resetForm];
}

export default useForm;
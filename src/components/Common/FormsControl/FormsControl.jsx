import { React } from "react";
import { Field } from "redux-form";
import style from "./FormsControl.module.css";

const FormControl = ({ meta: {touched, error}, children}) => {
    const hasError = touched && error;
    return (
        <div className={hasError ? style.error : ' '}>
            <div>
                {children}
            </div>
            { hasError && <span>{error}</span> }
        </div>
    ) 
}

export const Textarea = (props) => {
    const { input, meta, child, ...restProps} = props; 
    return <FormControl {...props}><textarea {...input} {...props} /></FormControl>
}
export const Input = (props) => {
    const { input, meta, child, ...restProps} = props; 
    return <FormControl {...props}><input {...input} {...props} /></FormControl>
}

export const createField = (name, component, validate, type, placeholder, text = '') => {
    return <div>
        <Field name={name} component={component} validate={validate} type={type} placeholder={placeholder} />
        {text}
    </div>
}
import { React } from "react";
import style from "./FormsControl.module.css";

const FormControl = ({input, meta, child, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={hasError ? style.error : ' '}>
            <div>
                {props.children}
            </div>
            { hasError && <span>{meta.error}</span> }
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
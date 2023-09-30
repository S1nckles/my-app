import React from "react";
import s from "./MessageItem.module.css";

export const MessageItem = (props) => {
    return (
        <div className={s.messageBlock}>
            <div className={s.message}>
                {props.message}
            </div>
        </div>
        
    )
}
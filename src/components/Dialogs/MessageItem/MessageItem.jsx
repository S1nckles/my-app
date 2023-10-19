import React from "react";
import s from "./MessageItem.module.css";

export const MessageItem = (props) => {
    return (
        <div className={s.messageBlock}>
            <div className={s.message}>
                <p>{props.message}</p>
            </div>
        </div>
        
    )
}
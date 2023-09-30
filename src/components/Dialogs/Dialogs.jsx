import React from "react";
import s from "./Dialogs.module.css";
import { DialogItem } from "./DialogItem/DialogItem";
import { MessageItem } from "./MessageItem/MessageItem";

export const Dialogs = (props) => {
    let dialogsElem = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElem = props.state.messages.map(m => <MessageItem message={m.message} />) 
    
    return (
        <div className={s.dialogs}>
            <h3 className={s.dialogs__title}>Dialogs</h3>
            <div className={s.dialogsMain}>
                <ul className={s.dialogs__items}>
                    {dialogsElem}
                </ul>
                <div className={s.dialogs__messages}>
                    <div className={s.messagesElements}>
                        {messagesElem}
                    </div>
                    <div className={s.dialogs__input}>
                        <input type="text" placeholder="Write..."/> <button>send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
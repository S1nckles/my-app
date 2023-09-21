import React from "react";
import s from "./Dialogs.module.css";
import { DialogItem } from "./DialogItem/DialogItem";
import { MessageItem } from "./MessageItem/MessageItem";

export const Dialogs = () => {
    
    let dialogs = [
        {id: 1, name: 'Andrew'},
        {id: 2, name: 'Eda'},
        {id: 3, name: 'Mike'},
        {id: 4, name: 'Siri'},
        {id: 5, name: 'Alduin'}
    ]
    let messages = [
        {id: 1, message: 'Wellcome'},
        {id: 2, message: 'Nice to see you'},
        {id: 3, message: 'You too'}
    ]

    let dialogsElem = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElem = messages.map(m => <MessageItem message={m.message} />) 
    
    return (
        <div className={s.dialogs}>
            <h3 className={s.dialogs__title}>Dialogs</h3>
            <div className={s.dialogsMain}>
                <ul className={s.dialogs__items}>
                    {dialogsElem}
                </ul>
                <div className={s.dialogs__messages}>
                    {messagesElem}
                </div>
            </div>
        </div>
    );
}
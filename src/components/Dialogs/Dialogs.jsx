import React from "react";
import s from "./Dialogs.module.css";
import { DialogItem } from "./DialogItem/DialogItem";
import { MessageItem } from "./MessageItem/MessageItem";
import AddMessageForm from "./addMessageForm/addMessageForm";

export const Dialogs = (props) => {

    let dialogsElem = props.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let messagesElem = props.messages.map(m => <MessageItem message={m.message} key={m.id} />) 

    let addNewMessage = (values) => {
        props.addMessage(values.newMessageBody)
    }

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
                    <AddMessageForm onSubmit={addNewMessage} />
                </div>
            </div>
        </div>
    );
}
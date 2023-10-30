import React from "react";
import s from "./Dialogs.module.css";
import { DialogItem } from "./DialogItem/DialogItem";
import { MessageItem } from "./MessageItem/MessageItem";

export const Dialogs = (props) => {

    let dialogsElem = props.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let messagesElem = props.messages.map(m => <MessageItem message={m.message} key={m.id} />) 
 
    let newMessageElement = React.createRef();

    let addMessage = () => {
    if (newMessageElement.current.value === '' || newMessageElement.current.value === ' ')  return alert('Need write something');
        props.addMessage();
    }

    let onMessageText = () => {
        let text  = newMessageElement.current.value;
        props.onMessageText(text);
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
                    <div className={s.dialogs__input}>
                        <input ref={newMessageElement} onChange={onMessageText} value={props.newMessageText} type="text" placeholder="Write..."/> <button onClick={addMessage}>send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
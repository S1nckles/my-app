import React from "react";
import s from "./Dialogs.module.css";
import { DialogItem } from "./DialogItem/DialogItem";
import { MessageItem } from "./MessageItem/MessageItem";
import { Navigate } from "react-router-dom";

export const Dialogs = (props) => {

    let dialogsElem = props.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let messagesElem = props.messages.map(m => <MessageItem message={m.message} key={m.id} />) 
 
    let newMessageElement = React.createRef();

    let addMessage = () => {
    if (newMessageElement.current.value === '' || newMessageElement.current.value === ' ')  return alert('Need write something');
        props.addMessage();
    }
    let updateNewMessageText = () => {
        let text  = newMessageElement.current.value;
        props.updateNewMessageText(text);
    }
    
    // замість <Redirect /> використовуємо <Navigate />
    if(props.isAuth === false) return <Navigate to={"/login"} />

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
                        <input ref={newMessageElement} onChange={updateNewMessageText} value={props.newMessageText} type="text" placeholder="Write..."/> <button onClick={addMessage}>send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
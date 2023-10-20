import React from "react";
import { Dialogs } from "./Dialogs";
import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/reducers/dialogs-reducer";

const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;

    let onAddMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }
    
    let onMessageUpdateText = (text) => {
        props.store.dispatch(updateNewMessageTextActionCreator(text));
    }

    return (
        <Dialogs addMessage={onAddMessage} onMessageText={onMessageUpdateText} dialogs={state.dialogs} messages={state.messages} newMessageText={state.newMessageText}/>
    );
}

export default DialogsContainer;
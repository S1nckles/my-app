import React from "react";
import { Dialogs } from "./Dialogs";
import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/reducers/dialogs-reducer";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {
    return (
        <StoreContext.Consumer> 
            {
                (store) => {
                    let state = store.getState().dialogsPage;

                    let onAddMessage = () => {
                        store.dispatch(addMessageActionCreator());
                    }
                    
                    let onMessageUpdateText = (text) => {
                        store.dispatch(updateNewMessageTextActionCreator(text));
                    }

                    return <Dialogs addMessage={onAddMessage} onMessageText={onMessageUpdateText} dialogs={state.dialogs} messages={state.messages} newMessageText={state.newMessageText}/>
                }
            }  
        </StoreContext.Consumer>
    );
}

export default DialogsContainer;
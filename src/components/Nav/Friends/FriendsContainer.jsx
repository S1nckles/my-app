import React from "react";
import StoreContext from "../../../StoreContext";
import { Friends } from "./Friends";

export const FriendsContainer = () => {
    debugger;
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const state = store.getState();
                    return <Friends friendsData={state.sidebar.friendsData}/>
                }
            }
            
        </StoreContext.Consumer>
    );
}
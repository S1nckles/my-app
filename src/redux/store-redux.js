import {combineReducers, legacy_createStore} from "redux"
import ProfileReducer from "./reducers/profile-reducer";
import DialogsReducer from "./reducers/dialogs-reducer";
import SidebarReducer from "./reducers/sidebar-reducer";

let reducers = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer,
    sidebar: SidebarReducer
})

let store = legacy_createStore(reducers);

export default store;
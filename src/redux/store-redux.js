import {combineReducers, legacy_createStore} from "redux"
import ProfileReducer from "./reducers/profile-reducer";
import DialogsReducer from "./reducers/dialogs-reducer";
import SidebarReducer from "./reducers/sidebar-reducer";
import UsersReducer from "./reducers/users-reducer";

let reducers = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer,
    usersPage: UsersReducer,
    sidebar: SidebarReducer,
})

let store = legacy_createStore(reducers);

window.store = store
export default store;
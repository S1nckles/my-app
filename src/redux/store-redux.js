import {combineReducers, legacy_createStore} from "redux"
import ProfileReducer from "./reducers/profile-reducer";
import DialogsReducer from "./reducers/dialogs-reducer";
import SidebarReducer from "./reducers/sidebar-reducer";
import UsersReducer from "./reducers/users-reducer";
import AuthReducer from "./reducers/auth-reducer";

let reducers = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer,
    usersPage: UsersReducer,
    sidebar: SidebarReducer,
    auth: AuthReducer,
})

let store = legacy_createStore(reducers);

window.store = store
export default store;
import {applyMiddleware, combineReducers, legacy_createStore} from "redux"
import ProfileReducer from "./reducers/profile-reducer";
import DialogsReducer from "./reducers/dialogs-reducer";
import SidebarReducer from "./reducers/sidebar-reducer";
import UsersReducer from "./reducers/users-reducer";
import AuthReducer from "./reducers/auth-reducer";
import {thunk} from "redux-thunk";
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer,
    usersPage: UsersReducer,
    sidebar: SidebarReducer,
    auth: AuthReducer,
    // важливо щоб ім'я свойства було form
    form: formReducer,
})

// Створювання MiddleWare
let store = legacy_createStore(reducers, applyMiddleware(thunk));

window.store = store
export default store;
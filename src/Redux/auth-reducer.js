import { stopSubmit } from "redux-form";
import { AuthAPI } from "../api/api";

let SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case SET_USER_DATA:

            return {
                ...state,
                ...action.payload
            }

        default:
            return state;
    }
}

export const setAuthUserData = (id, email, login, isAuth) => ({ type: SET_USER_DATA, payload: {id, email, login, isAuth} })
export const getAuthUserData = () => (dispatch) => {
    AuthAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let { id, login, email } = response.data.data;
                dispatch(setAuthUserData(id, login, email, true))
            }
        });
}

export const login = (email, password, rememberMe) => (dispatch) => {
    AuthAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
               dispatch(getAuthUserData())
            } else {
                let message = response.data.message.length > 0 ? response.data.message[0] : "Some error";
                dispatch(stopSubmit("login", {_error: message}));
            }
        });
}

export const logOut = () => (dispatch) => {
    AuthAPI.loginOut()
        .then(response => {
            if (response.data.resultCode === 0) {
               dispatch(getAuthUserData(null, null, null, false));
            }
        });
}

export default authReducer;
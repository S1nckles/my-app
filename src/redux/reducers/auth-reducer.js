import { Navigate } from "react-router-dom";
import { stopSubmit } from "redux-form";
import { AuthAPI } from "../../api/api";

// Для того щоб redusers між собою не комфліктувала через назви перемінних 
    // ми пишемо більш важкішу конструкцію, тобто samurai-network/auth/ і ...  
const SET_USER_DATA = 'samurai-network/auth/SET_USER_DATA'; 
const IS_TOGGLE_FETCHING = 'samurai-network/auth/TOOGLE_IS_FETCHING';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: null
}

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        case IS_TOGGLE_FETCHING:
            return { ...state, isFetching: action.isFetching }
        default:
            return state;
    }   
}

export let setUserData = (id, email, login, isAuth) => ({type: SET_USER_DATA, payload: {id, email, login, isAuth}})
export const getUserData = (isAuth) => async (dispatch) => {
    let response = await AuthAPI.me();
    dispatch(toggleIsFetching(true));
    if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data;
        dispatch(setUserData(id, email, login, true));
    }
    if (isAuth === true) {
        <Navigate to={'/profile'}/>
    }
    dispatch(toggleIsFetching(false));
}
export let logIn = (email, password, rememberMe) => async (dispatch) => {
    let response = await AuthAPI.logIn(email, password, rememberMe);
    dispatch(toggleIsFetching(true));
    if (response.data.resultCode === 0) {
        dispatch(getUserData());
    } else {
        // Якщо сервер повернув нам message з значеннями, то тоді ми виводимо ці значення (строку), Якщо ж ні тоді буде прописано Some error
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
        // Якщо сервер не вертає response.data.resultCode === 0 (тобто помилка) тоді ми зупиняємо сабмітинг і висвічуємо помилку
        dispatch(stopSubmit('login', {_error: message}));
    }
    dispatch(toggleIsFetching(false));

}
export let logOut = () => async (dispatch) => {
    let response = await AuthAPI.logOut();
    dispatch(toggleIsFetching(true));
    if (response.data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false));
        dispatch(toggleIsFetching(false));
    }
}
export let toggleIsFetching = (isFetching) => ({type: IS_TOGGLE_FETCHING, isFetching})

export default AuthReducer;
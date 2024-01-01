import { Navigate } from "react-router-dom";
import { AuthAPI } from "../../api/api";

const SET_USER_DATA = 'SET_USER_DATA'; 
const IS_TOGGLE_FETCHING = 'TOOGLE_IS_FETCHING';

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
// payload === data
export let setUserData = (id, email, login, isAuth) => ({type: SET_USER_DATA, payload: {id, email, login, isAuth}})
export const getUserData = (isAuth) => (dispatch) => {
    AuthAPI.me().then(response => {
        dispatch(toggleIsFetching(true));
        if (response.data.resultCode === 0) {
            let { id, email, login } = response.data.data;
            dispatch(setUserData(id, email, login, true));
        }
        if (isAuth === true) {
            <Navigate to={'/profile'}/>
        }
        dispatch(toggleIsFetching(false));
    })
}
export let logIn = (email, password, rememberMe) => (dispatch) => {
    AuthAPI.logIn(email, password, rememberMe).then(response => {
        dispatch(toggleIsFetching(true));
        if (response.data.resultCode === 0) {
            dispatch(getUserData());
            dispatch(toggleIsFetching(false));
        }

    });
}
export let logOut = () => (dispatch) => {
    AuthAPI.logOut().then(response => {
        dispatch(toggleIsFetching(true));
        if (response.data.resultCode === 0) {
            dispatch(setUserData(null, null, null, false));
            dispatch(toggleIsFetching(false));
        }
    });
}
export let toggleIsFetching = (isFetching) => ({type: IS_TOGGLE_FETCHING, isFetching})

export default AuthReducer;
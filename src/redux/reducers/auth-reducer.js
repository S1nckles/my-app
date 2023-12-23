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
                ...action.data,
                isAuth: true
            }
        case IS_TOGGLE_FETCHING:
            return { ...state, isFetching: action.isFetching }
        default:
            return state;
    }   
}

export let setUserData = (id, email, login) => ({type: SET_USER_DATA, data: {id, email, login}})
export const getUserData = () => (dispatch) => {
    AuthAPI.me().then(response => {
        dispatch(toggleIsFetching(true));
        if (response.data.resultCode === 0) {
            let { id, email, login } = response.data.data;
            dispatch(setUserData(id, email, login));
        }
        dispatch(toggleIsFetching(false));
    })
}
export let toggleIsFetching = (isFetching) => ({type: IS_TOGGLE_FETCHING, isFetching})

export default AuthReducer;
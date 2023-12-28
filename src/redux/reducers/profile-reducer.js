import { AuthAPI, ProfileAPI } from "../../api/api";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likeCount: 13},
        {id: 2, message: 'Nice, and you', likeCount: 20},
        {id: 3, message: 'React is very good', likeCount: 39},
        {id: 4, message: 'Look at me', likeCount: -1}
    ],
    newPostText: 'bobb',
    profile: null,
    status: '',
};

const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newId = state.posts.length + 1;
            let newPost = {
                id: newId,
                message: state.newPostText,
                likeCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };
        case SET_USER_PROFILE:
            return { ...state, profile: action.profile };
        case SET_STATUS:
            return {...state, status: action.status};
        default:
            return state;
    }   
};

export let addPost = () => ({ type: ADD_POST });
export let updateNewPostText = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });
export let setStatus = (status) => ({ type: SET_STATUS, status });
export let setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });

export const getUserProfile = (profileId) => (dispatch) => {
    AuthAPI.getProfile(profileId).then(response => {
        if (response.data) {
          dispatch(setUserProfile(response.data));
        }
    })
};

export const getStatus = (profileId) => (dispatch) => {
    ProfileAPI.getStatus(profileId).then(response => {
        dispatch(setStatus(response.data));
    })
};
export const updateStatus = (status) => (dispatch) => {
    ProfileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode === 0) {
          dispatch(setStatus(status));
        }
    })
};

export default ProfileReducer;

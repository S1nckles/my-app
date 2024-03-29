import { stopSubmit } from "redux-form";
import { AuthAPI, ProfileAPI } from "../../api/api";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO = 'SAVE_PHOTO';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likeCount: 13},
        {id: 2, message: 'Nice, and you', likeCount: 20},
        {id: 3, message: 'React is very good', likeCount: 39},
        {id: 4, message: 'Look at me', likeCount: -1}
    ],
    profile: null,
    status: '',
};

const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newId = state.posts.length + 1;
            let newPost = {
                id: newId,
                message: action.newPostBody,
                likeCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost]
            };
        case SET_USER_PROFILE:
            return { ...state, profile: action.profile };
        case SET_STATUS:
            return {...state, status: action.status};
        case DELETE_POST:
            return {...state, posts: state.posts.filter(p => p.id !== action.postId)}
        case SAVE_PHOTO:
            return {...state, profile: {...state.profile, photos: action.photos}}
        default:
            return state;
    }   
};

export const addPost= (newPostBody) => ({ type: ADD_POST, newPostBody });
export let setStatus = (status) => ({ type: SET_STATUS, status });
export let setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export let deletePost = (postId) => ({ type: DELETE_POST, postId });
export let savePhotoSuccess = (photos) => ({type: SAVE_PHOTO, photos});


export const getUserProfile = (profileId) => async (dispatch) => {
    let response = await AuthAPI.getProfile(profileId);
    if (response.data) {
      dispatch(setUserProfile(response.data));
    }
};
export const getStatus = (profileId) => async (dispatch) => {
    let response = await ProfileAPI.getStatus(profileId);
    dispatch(setStatus(response.data));
};
export const updateStatus = (status) => async (dispatch) => {
    let response = await ProfileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
};
export const savePhoto = (file) => async (dispatch) => {
    let response = await ProfileAPI.savePhoto(file);
    if (response.data.resultCode === 0) {
      dispatch(savePhotoSuccess(response.data.data.photos));
    }
};
export const saveProfile = (profile) => async (dispatch, getState) => {
    const profileId = getState().auth.id 
    const response = await ProfileAPI.saveProfile(profile);
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(profileId));
    } else {
        dispatch(stopSubmit('edit-profile', {_error: response.data.messages[0]}));       
    }
};

export default ProfileReducer;

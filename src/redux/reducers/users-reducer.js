import { UserAPI } from "../../api/api";
import { updateObjInArray } from "../../utils/helpersObj";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'; 
const IS_TOGGLE_FETCHING = 'IS-TOGGLE-FETCHING'; 
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS'; 

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: null,
    followingInProgress: []
}

const UsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjInArray(state.users, action.userId, 'id', {followed: true})
            } 
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjInArray(state.users, action.userId, 'id', {followed: false})
            }
        case SET_USERS:
            // Копіюємо стейт і добавляємо до масиву users нових юзерів з серверу (склеюємо два массиви, ті що були і які прийшли)
            return { ...state, users: action.users}
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return { ...state, totalUsersCount: action.count} 
        case IS_TOGGLE_FETCHING:
            return { ...state, isFetching: action.isFetching}           
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return { 
                ...state, 
                followingInProgress: action.isFetching 
                ? [...state.followingInProgress, action.userId] 
                : state.followingInProgress.filter(id => id !== action.userId)
            }           
            default:
            return state;
    }   
}

export let followSuccess = (userId) => ({type: FOLLOW, userId})
export let unfollowSuccess = (userId) => ({type: UNFOLLOW, userId})
// Приводить user'ів із сервака
export let setUsers = (users) => ({type: SET_USERS, users})
export let setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export let setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount})
export let toggleIsFetching = (isFetching) => ({type: IS_TOGGLE_FETCHING, isFetching})
export let toggleFollowingProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId})

export const requestUsers = (page, pageSize) => async (dispatch) => {
    // пишемо dispatch(...) тому що він у тому ж самому файлі
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(page));
    // Для currentPage & pageSize передаємо через параметр, як на сторінці 42 в конспекті по реакту
    let response = await UserAPI.getUsers(page, pageSize) ;       
    // Коли ми зробили функ. if ми очистили компоненту і вона стала чистою 
    if (response.items) {
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(response.items));
        dispatch(setTotalUsersCount(response.totalCount));
    }
}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleFollowingProgress(true, userId));
    let response = await apiMethod(userId);
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleFollowingProgress(false, userId));

}
export const follow = (userId) => async (dispatch) => {
    followUnfollowFlow(dispatch, userId, UserAPI.follow.bind(UserAPI), followSuccess)
}
export const unfollow = (userId) => async (dispatch) => {
    followUnfollowFlow(dispatch, userId, UserAPI.unfollow.bind(UserAPI), unfollowSuccess)
}

export default UsersReducer;
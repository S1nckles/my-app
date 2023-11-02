const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'; 

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1
}

const UsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            } 
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS:
            // Копіюємо стейт і добавляємо до масиву users нових юзерів з серверу (склеюємо два массиви, ті що були і які прийшли)
            return { ...state, users: action.users}
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return { ...state, totalUsersCount: action.count}    
        default:
            return state;
    }   
}

export let FollowAC = (userId) => ({type: FOLLOW, userId})
export let UnFollowAC = (userId) => ({type: UNFOLLOW, userId})
// Приводить user'ів із сервака
export let SetUsersAC = (users) => ({type: SET_USERS, users})
export let SetCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export let SetTotalUsersCountAC = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount})

export default UsersReducer;
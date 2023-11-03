const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'; 
const IS_TOGGLE_FETCHING = 'IS-TOGGLE-FETCHING'; 

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: null
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
        case IS_TOGGLE_FETCHING:
            return { ...state, isFetching: action.isFetching}           
        default:
            return state;
    }   
}

export let follow = (userId) => ({type: FOLLOW, userId})
export let unfollow = (userId) => ({type: UNFOLLOW, userId})
// Приводить user'ів із сервака
export let setUsers = (users) => ({type: SET_USERS, users})
export let setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export let setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount})
export let toggleIsFetching = (isFetching) => ({type: IS_TOGGLE_FETCHING, isFetching})

export default UsersReducer;
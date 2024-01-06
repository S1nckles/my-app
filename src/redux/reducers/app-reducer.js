import { getUserData } from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'; 

let initialState = {
    initialized: false
}

const AppReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }   
}
// payload === data
export let initializedSuccess = () => ({type: INITIALIZED_SUCCESS})
export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getUserData());
    // Коли всі проміси виповняться, тоді запускаємо initializedSuccess
    Promise.all([promise]).then(() => {
        dispatch(initializedSuccess());
    });
    
}

export default AppReducer;
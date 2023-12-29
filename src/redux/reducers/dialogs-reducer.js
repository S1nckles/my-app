const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Andrew'},
        {id: 2, name: 'Eda'},
        {id: 3, name: 'Mike'},
        {id: 4, name: 'Siri'},
        {id: 5, name: 'Alduin'}
    ],
    messages: [
        {id: 1, message: 'Wellcome'},
        {id: 2, message: 'Nice to see you'},
        {id: 3, message: 'You too'}
    ]
}   

export const DialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newText = action.newMessageText;
            return {
                ...state,
                messages: [...state.messages, {id: 4, message: newText}]
            };
        default:
            return state;
    }
}

export let addMessage = (newMessageText) => ({type: ADD_MESSAGE, newMessageText})

export default DialogsReducer;
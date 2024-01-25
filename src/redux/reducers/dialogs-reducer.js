const ADD_MESSAGE = 'ADD-MESSAGE';
const DELETE_MESSAGE = 'DELETE_MESSAGE';

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
console.log(initialState.messages.length);


export const DialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newText = action.newMessageText;
            return {
                ...state,
                messages: [...state.messages, {id: 4, message: newText}]
            };
        case DELETE_MESSAGE:
            return {...state, messages: state.messages.filter(m => m.id !== action.messageId)}
        default:
            return state;
    }
}

export let addMessage = (newMessageText) => ({type: ADD_MESSAGE, newMessageText})
export let deleteMessage = (messageId) => ({type: DELETE_MESSAGE, messageId})
export default DialogsReducer;
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

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
    ],
    newMessageText: 'hooho'
}   

export const DialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            // міняємо старе value на новий
            return {
                ...state,
                newMessageText: action.newText
            };
        case ADD_MESSAGE:
            let newText = state.newMessageText;
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, {id: 4, message: newText}]
            };
        default:
            return state;
    }
}

export let addMessageActionCreator = () => ({type: ADD_MESSAGE})
export let updateNewMessageTextActionCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text
})

export default DialogsReducer;
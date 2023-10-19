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
        case ADD_MESSAGE:
            let newMessage = {
                id: 4,
                message: state.newMessageText
            }
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            // міняємо старе value на новий
            state.newMessageText = action.newText;
            return state;
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
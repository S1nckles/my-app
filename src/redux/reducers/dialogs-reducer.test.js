import DialogsReducer, { addMessage, deleteMessage } from "./dialogs-reducer";

let state = {
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
it('Message should be added', () => {
    let action = addMessage('omg');
    let newState = DialogsReducer(state, action);
    expect(newState.messages.length).toBe(4);
});
it('Message should be deleted', () => {
    let action = deleteMessage(1000);
    let newState = DialogsReducer(state, action);
    expect(newState.messages.length).toBe(3)
})
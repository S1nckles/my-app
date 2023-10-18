

let store = {    
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likeCount: 13},
                {id: 2, message: 'Nice, and you', likeCount: 20},
                {id: 3, message: 'React is very good', likeCount: 39},
                {id: 4, message: 'Look at me', likeCount: -1}
            ],
            newPostText: 'bobb'
        },
        dialogsPage: {
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
        },
        sidebar: {
            friendsData: [
                {id: 1, friend: 'Mike'},
                {id: 2, friend: 'John'},
                {id: 3, friend: 'Nik'}
            ]
        }
    },
    _callSubscriber() {
        console.log('state changed');
    },
    // нам не можна витягувати state тому що він є приватний, тому ми використаємо getState
    getState() {
        return this._state;
    },
    addPost () {
        debugger;
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likeCount: 0
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    addMessage() {
        let newMessage = {
            id: 4,
            message: this._state.dialogsPage.newMessageText
        }
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessageText = '';
        this._callSubscriber(this._state)
    },   
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    updateNewMessageText(newText) {
        // міняємо старе value на новий
        this._state.dialogsPage.newMessageText = newText;
        // перемальовування state
        this._callSubscriber(this._state);
    },
    
    subscribe(observer) {
        this._callSubscriber = observer;
    } 
}

window.store = store
export default store;
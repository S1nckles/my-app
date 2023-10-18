const ADD_POST = 'ADD-POST';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

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
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likeCount: 0
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);

        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
           
        } else if (action.type === ADD_MESSAGE) {
            let newMessage = {
                id: 4,
                message: this._state.dialogsPage.newMessageText
            }
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state)

        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            // міняємо старе value на новий
            this._state.dialogsPage.newMessageText = action.newText;
            // перемальовування state
            this._callSubscriber(this._state);
        }
    }

}

export let addPostActionCreator = () => {
    return {
      type: ADD_POST
    }
}
export let updateNewPostTextActionCreator = (text) => {
    return {
      type: UPDATE_NEW_POST_TEXT,
      newText: text
    }
}
export let addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE
    }
}
export let updateNewMessageTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: text
    }
}

window.store = store
export default store;
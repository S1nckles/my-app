import { renderEntareTree } from "../render";

export let state = {
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
}

window.state = state;

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likeCount: 0
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    renderEntareTree(state);
}

export let addMessage = () => {
    let newMessage = {
        id: 4,
        message: state.dialogsPage.newMessageText
    }
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = '';
    renderEntareTree(state)
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    renderEntareTree(state);
}
export let updateNewMessageText = (newText) => {
    // міняємо старе value на новий
    state.dialogsPage.newMessageText = newText;
    // перемальовування state
    renderEntareTree(state);
}

export default state;
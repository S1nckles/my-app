let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likeCount: 13},
            {id: 2, message: 'Nice, and you', likeCount: 20},
            {id: 3, message: 'React is very good', likeCount: 39},
            {id: 4, message: 'Look at me', likeCount: -1}
        ]
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
        ]
    }
}

export default state;
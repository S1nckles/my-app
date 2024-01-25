import ProfileReducer, { addPost } from "./profile-reducer"
let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likeCount: 13},
        {id: 2, message: 'Nice, and you', likeCount: 20},
        {id: 3, message: 'React is very good', likeCount: 39},
        {id: 4, message: 'Look at me', likeCount: -1}
    ]
}
// State вивели в глобальну видимість, щоби наш код не дублювався в тестах

// Ліпше робити багато окремих тестів, чим одного великого теста

it('New post should be added', () => {
    let action = addPost("sd");
    let newState = ProfileReducer(state, action);
    expect(newState.posts.length).toBe(5);
});
it('message of new post should be correct', () => {
    // 1. test data
    let action = addPost('Hola');
    // 2. Action
    let newState = ProfileReducer(state, action);
    // 3. Expectation
    expect(newState.posts[4].message).toBe('Hola');
});

// TDD
it('after deleting length of messages should be decrement', () => {
    // 1. test data
    let action = deletePost(1000);
    // 2. Action
    let newState = ProfileReducer(state, action);
    // 3. Expectation
    expect(newState.posts.length).toBe(4);
});
// Спочатку для TDD ми пишемо логіку якої немає, у нас це (deletePost), потім ми починаємо писати код(логіку), яка буде задовільняти тест
// Тобто ми записуємо в файлі profile.reducer ми створюємо actionCreator (deletePost)
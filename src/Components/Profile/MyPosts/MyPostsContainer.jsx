import MyPosts from "./MyPosts";
import { addPostActionCreator } from '../../../Redux/profile-reducer.js'
import { connect } from "react-redux";

// let MyPostsContainer = (props) => {
 
//     return <StoreContext.Consumer> 
//         {
//             (store) => {

//                 let state = store.getState();

//                 let addPost = () => {
//                     store.dispatch(addPostActionCreator());
//                 }
            
//                 let onPostChange = (text) => {
//                     let action = updateNewPostTextActionCreator(text);
//                     store.dispatch(action);
//                 }
                
//                 return <MyPosts updateNewPostText={onPostChange} addPost={addPost}
//                     posts={state.profilePage.posts}
//                     newPostText={state.profilePage.newPostText} />
//             }
//         }
//         </StoreContext.Consumer>        
// }

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostText) => {
            dispatch(addPostActionCreator(newPostText));
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
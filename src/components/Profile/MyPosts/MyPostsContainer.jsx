import { MyPosts } from "./MyPosts";
import { addPost, updateNewPostText } from "../../../redux/reducers/profile-reducer";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    newPostText: state.profilePage.newPostText,
    posts: state.profilePage.posts
  }
}
// let mapDispatchToProps = (dispatch) => {
//   return {
//     addPost: () => {
//       dispatch(addPost());
//     },
//     updateNewPostText: (text) => {
//       dispatch(updateNewPostText(text));          
//     }
//   }
// }

let MyPostsContainer = connect(mapStateToProps, {addPost, updateNewPostText})(MyPosts);

export default MyPostsContainer;
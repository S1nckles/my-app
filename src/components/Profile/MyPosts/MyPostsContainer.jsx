import { MyPosts } from "./MyPosts";
import { addPost } from "../../../redux/reducers/profile-reducer";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    newPostBody: state.profilePage.newPostBody,
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

let MyPostsContainer = connect(mapStateToProps, {addPost})(MyPosts);

export default MyPostsContainer;
import React from "react";
import { MyPosts } from "./MyPosts";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/reducers/profile-reducer";

export const MyPostsContainer = (props) => {

  const state = props.store.getState();

  let onAddPost = () => {
    props.store.dispatch(addPostActionCreator());
  } 

  let onPostChange = (text) => {
    props.store.dispatch(updateNewPostTextActionCreator(text));    
  }

  return (
    <MyPosts addPost={onAddPost} updateNewPostText={onPostChange} newPostText={state.profilePage.newPostText} posts={state.profilePage.posts} />
  );
}

export default MyPostsContainer;
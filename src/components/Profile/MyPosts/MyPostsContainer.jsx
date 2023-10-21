import React from "react";
import { MyPosts } from "./MyPosts";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/reducers/profile-reducer";
import StoreContext from "../../../StoreContext";

export const MyPostsContainer = () => {
  return (
    <StoreContext.Consumer>
      {
        (store) => {

          const state = store.getState();

          let onAddPost = () => {
            store.dispatch(addPostActionCreator());
          } 
        
          let onPostChange = (text) => {
            store.dispatch(updateNewPostTextActionCreator(text));    
          }

          return <MyPosts addPost={onAddPost} updateNewPostText={onPostChange} newPostText={state.profilePage.newPostText} posts={state.profilePage.posts} />
        }
      }
    </StoreContext.Consumer>
  );
}

export default MyPostsContainer;
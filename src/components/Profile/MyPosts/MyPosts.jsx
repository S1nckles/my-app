import React from "react";
import s from './MyPosts.module.css';
import { Post } from "./Post/Post";

export const MyPosts = (props) => {

  let messagesElem = props.profilePage.posts.map((p) => <Post massage={p.message} likeCount={p.likeCount}/> )

  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPost();
  } 

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return (
      <div className={s.content__mypost}>
        <h3>My post</h3>
        <div className={s.mypostWrapper}>
          <textarea type="text" ref={newPostElement} className={s.mypostWrapper__input} onChange={onPostChange} value={props.profilePage.newPostText}/>
          <button onClick={addPost} className={s.mypostWrapper__btn}>Send</button>
        </div>
        <div className={s.posts}>
          {messagesElem}
        </div>
      </div>
  );
}
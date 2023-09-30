import React from "react";
import s from './MyPosts.module.css';
import { Post } from "./Post/Post";

export const MyPosts = (props) => {

  let messagesElem = props.post.map((p) => <Post massage={p.message} likeCount={p.likeCount}/> )
  
  return (
      <div className={s.content__mypost}>
        <h3>My post</h3>
        <div className={s.mypostWrapper}>
          <textarea className={s.mypostWrapper__input} type="text" placeholder="Write your text.."/>
          <button className={s.mypostWrapper__btn}>Send</button>
        </div>
        <div className={s.posts}>
          {messagesElem}
        </div>
      </div>
  );
}
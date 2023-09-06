import React from "react";
import s from './MyPosts.module.css';
import { Post } from "./Post/Post";

export const MyPosts = () => {
  return (
      <div className={s.content__mypost}>
        <h3>My post</h3>
        <div className={s.mypostWrapper}>
          <textarea className={s.mypostWrapper__input} type="text" placeholder="Write your text.."/>
          <button className={s.mypostWrapper__btn}>Send</button>
        </div>
        <div className={s.posts}>
          <Post massage="Hi, how are you?" likeCount='13'/>
          <Post massage="Nice, and you"likeCount='20'/>
          <Post massage="Normal" likeCount='0'/>
          <Post massage="React is very good" likeCount='4'/>
          <Post massage="Look at me" likeCount='-1'/>
        </div>
      </div>
  );
}
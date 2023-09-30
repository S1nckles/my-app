import React from "react";
import { MyPosts } from "./MyPosts/MyPosts";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import s from './Profile.module.css';

export const Profile = (props) => {
  return (
    <main className={s.content}>
      <ProfileInfo />
      <MyPosts post={props.state.posts}/>
    </main>
  );
}
import React from "react";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import s from './Profile.module.css';

export const Profile = (props) => {
  return (
    <main className={s.content}>
      <ProfileInfo profile={props.profile} />
      <MyPostsContainer />
    </main>
  );
}

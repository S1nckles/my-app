import React from "react";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import s from './Profile.module.css';

export const Profile = (props) => {
  return (
    <main className={s.content}>
      <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} savePhoto={props.savePhoto} isOwner={props.isOwner} saveProfile={props.saveProfile}/>
      <MyPostsContainer />
    </main>
  );
}

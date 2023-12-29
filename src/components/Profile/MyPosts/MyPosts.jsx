import React from "react";
import { Field, reduxForm } from "redux-form";
import s from './MyPosts.module.css';
import { Post } from "./Post/Post";

let CreatePostForm = (props) => {
  return <form onSubmit={props.handleSubmit}>
    <div className={s.mypostWrapper}>
      <Field component={'textarea'} name={'newPostBody'} type="text" className={s.mypostWrapper__input}></Field>
      <button className={s.mypostWrapper__btn}>Send</button>
    </div>
  </form>
}

let CreatePostReduxForm = reduxForm({
  form: 'post'
})(CreatePostForm)

export const MyPosts = (props) => {
  let messagesElem = props.posts.map((p) => <Post massage={p.message} likeCount={p.likeCount} key={p.id}/> )

  let addNewPost = (values) => {
    props.addPost(values.newPostBody)
  } 

  return (
      <div className={s.content__mypost}>
        <h3>My post</h3>
        <CreatePostReduxForm onSubmit={addNewPost} />
        <div className={s.posts}>
          {messagesElem}
        </div>
      </div>
  );
}
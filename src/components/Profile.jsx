import React from "react";

export const Profile = () => {
    return (
        <main className='content'>
        <div className='content__background'>
          <img src='https://img.freepik.com/free-photo/medium-shot-man-wearing-vr-glasses_23-2150394443.jpg?w=996&t=st=1693906152~exp=1693906752~hmac=b5abefcd43bc2e6fa3ed09eab7c30dff6a863ef1804ab2247e21709404ca367c'/>
        </div>
        <div className='content__profile'>
          ava + desc
        </div>
        <div className='content__mypost'>
          My post
          <div className='mypost__post'>New post</div>
          <div className='posts'>
            <div>post 1</div>
            <div>post 2</div>
          </div>
        </div>
      </main>
    );
}
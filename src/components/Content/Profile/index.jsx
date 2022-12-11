import React from 'react';
import ProfileItem from './ProfileItem';
import style from './Profile.css';
import MyPostsContainer from './MyPosts/MyPostsContainer'

const Profile = (props) => {

    return (
            <div className={style.main}>
                <ProfileItem/>
                <MyPostsContainer  />
            </div>

    )
};

export default Profile;
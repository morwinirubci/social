import React from 'react';
import ProfileItem from './ProfileItem';
import style from './Profile.css';
import MyPostsContainer from './MyPosts/MyPostsContainer'

const Profile = (props) => {

    return (
            <div className={style.main}>
                <ProfileItem profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
                <MyPostsContainer  />
            </div>

    )
};

export default Profile;
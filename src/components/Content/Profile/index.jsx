import React from 'react';
import MyPosts from './MyPosts';
import ProfileItem from './ProfileItem';
import style from './Profile.css';


const Profile = (props) => {




    return (
            <div className={style.main}>
                <ProfileItem/>
                <MyPosts profilePage={props.profilePage} dispatch={props.dispatch} />
            </div>

    )
};

export default Profile;
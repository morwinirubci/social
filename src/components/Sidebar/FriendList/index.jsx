import React from 'react';

import style from './FriendList.module.css';


const FriendList = (props) => {



    return (
            <div className={style.profileFriend}>

                <img id={props.id} src={props.icon} alt="avatar"/>
                <a href="/">{props.name}</a>

          </div>

            )
};

export default FriendList;
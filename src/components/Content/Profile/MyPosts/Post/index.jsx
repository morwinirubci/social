import React from 'react';
import style from './Post.module.css';


const Post = (props) => {
    return (
            <div id={props.id} className={style.post}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg1MndL-Xp1JcnqaB0YOqTp6zDjrwYyGKsPA&usqp=CAU" alt="Avatar"/>
                {props.message}
                <div>like {props.likeCount}</div>

            </div>

    )
};

export default Post;
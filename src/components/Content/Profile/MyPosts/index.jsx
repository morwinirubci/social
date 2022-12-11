import React from 'react';
import Post from './Post';
import {addPostActionCreator, updateTextFieldActionCreator} from '../../../../redux/profile-reducer';




const MyPosts = (props) => {



    let postElement = props.profilePage.postData.map(postNew =>  <Post id={postNew.id} message={postNew.message} likeCount={postNew.like}/>);

    let linkElementArea = React.createRef();

    let addPostBtn = () => {
        props.dispatch(addPostActionCreator());
    };

    let onChangeNewText = () => {
        let text = linkElementArea.current.value;
        props.dispatch(updateTextFieldActionCreator(text));

    }


    return (
            <div className="posts">
                <div>
                    <textarea ref = {linkElementArea} onChange = { onChangeNewText } value={props.profilePage.newTextChange} placeholder="New post..."></textarea>
                    <button onClick={addPostBtn}>Add post </button>
                </div>
                <div>
                    {postElement}
                </div>
            </div>
    )
};

export default MyPosts;
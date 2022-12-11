import React from 'react';
import Post from './Post';





const MyPosts = (props) => {



    let postElement = props.profilePage.postData.map(postNew =>  <Post id={postNew.id} message={postNew.message} likeCount={postNew.like}/>);

    let linkElementArea = React.createRef();

    let addPostBtn = () => {
        props.addPost();
//        props.dispatch(addPostActionCreator());
    };

    let onChangeNewText = () => {
        let text = linkElementArea.current.value;
        props.updateTextField(text);

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
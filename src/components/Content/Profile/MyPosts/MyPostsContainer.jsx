import MyPosts from "./index";
import {addPostActionCreator, updateTextFieldActionCreator} from '../../../../redux/profile-reducer';
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        profilePage:state.profilePage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        updateTextField: (text) => {
            dispatch(updateTextFieldActionCreator(text));
        }
    }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
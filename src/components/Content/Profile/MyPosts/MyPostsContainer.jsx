import MyPosts from "./index";
import {addPostActionCreator} from '../../../../redux/profile-reducer';
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        profilePage:state.profilePage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newMesage) => {
            dispatch(addPostActionCreator(newMesage));
        },

    }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
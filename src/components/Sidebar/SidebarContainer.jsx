import React from 'react';
import {connect} from "react-redux";
import Sidebar from "./index";


let mapStateToProps = (state) => {
    return {
        friendsPage:state.friendsPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {

    }
}

const SidebarContainer = connect(mapStateToProps,mapDispatchToProps)(Sidebar);

export default SidebarContainer;
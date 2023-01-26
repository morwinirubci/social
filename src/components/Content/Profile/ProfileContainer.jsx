import React from "react";
import Profile from "./";
import { connect } from "react-redux";
import { getStatus, updateStatus, userProfileThunkCreator } from "../../../redux/profile-reducer";
import {  useParams } from "react-router-dom";
import { useEffect } from "react";
import { compose } from "redux";
import {withNavigate} from '../../../hoc/withNavigate';
import {initializeApp} from '../../../redux/app-reducer'

const ProfileContainer = (props) => {
  let params = useParams();
  if (!params.userId) {
    params.userId = props.authorizedId;
  }

  useEffect(() => {
    props.userProfileThunkCreator(params);
    
  });
  useEffect(() => {
    props.getStatus(params);
  });
  
  useEffect(() => {
    if (!params.userId) { 
      props.navigate('/login'); 
   }
  });


  
  return <Profile profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>;
};


let mapStateToProps = (state) => {

  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedId: state.auth.id,
    isAuth: state.auth.isAuth,
  };
};

export default compose(
  connect(mapStateToProps, { initializeApp, userProfileThunkCreator, getStatus, updateStatus }),
  // withAithRedirect
  withNavigate
)(ProfileContainer);

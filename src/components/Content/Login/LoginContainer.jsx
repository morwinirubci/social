import React from "react";
import { connect } from "react-redux";
import {logoutThunkCreator, loginThunkCreator} from "../../../redux/auth-reducer"
import Login from "./login";

const LoginContainer = (props) => {

  return <Login {...props}/>
}


let mapStateToProps = (state) =>{

  return {
      isAuth:state.auth.isAuth
  }
}

export default connect(mapStateToProps, {loginThunkCreator, logoutThunkCreator})(LoginContainer);

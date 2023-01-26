import React from 'react';
import { Navigate } from 'react-router-dom';
import HookForm from './HookForm';


const Login = (props) => {

    if (props.isAuth){
        return <Navigate to={"/profile"} />
    }

    return (
        <>
            <h1>Login</h1>
            <HookForm {...props}/>
        </>
      );
}
 
export default Login;
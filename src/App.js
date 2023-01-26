import React, { useEffect } from 'react';
import HeaderContainer from './components/Header/HeaderContainer';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import style from './index.module.css';
import './components/Content/Profile/Profile.css';
import './components/Header/Header.scss';
import './components/Sidebar/Sidebar.module.css';
import { connect } from 'react-redux';
import {initializeApp} from './redux/app-reducer';
import Preloader from './components/Preloader/Preloader';




function App (props) {

  
  useEffect(()=>{
    props.initializeApp();
  });

  
  if (!props.initialized){
    
    return <Preloader/>
  }

  return (
          <div className={style.social_page}>
              <HeaderContainer/>
              <Sidebar state={props.store.getState()} />
              <Content />
          </div>

  );
}

let mapStateToProps = (state) => {
  return{
      initialized: state.app.initialized,
  }
}
export default connect(mapStateToProps,{initializeApp})(App);

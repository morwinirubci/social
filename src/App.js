import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import style from './index.module.css';
import './components/Content/Profile/Profile.css';
import './components/Header/Header.scss';
import './components/Sidebar/Sidebar.module.css';




function App (props) {

  return (
          <div className={style.social_page}>
              <Header/>
              <Sidebar state={props.state}/>
              <Content state={props.state} dispatch={props.dispatch} />
          </div>

  );
}

export default App;

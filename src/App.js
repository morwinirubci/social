import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import style from './index.module.css';
import './components/Content/Profile/Profile.css';
import './components/Header/Header.scss';
import './components/Sidebar/Sidebar.module.css';
import SidebarContainer from './components/Sidebar/SidebarContainer'



function App (props) {
console.log(props)
  return (
          <div className={style.social_page}>
              <Header/>
              <Sidebar state={props.store.getState()} />
              <Content />
          </div>

  );
}

export default App;

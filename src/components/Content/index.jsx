import React from 'react';
import Profile from './Profile';
import News from './News';
import Music from './Music';
import Settings from './Settings';
import Dialogs from './Dialogs';
import Friends from './Friends';
import {Routes, Route} from 'react-router-dom';
import style from '../../index.module.css';

function Content (props) {



    return (
            <div className={style.main}>
                <Routes>
                    <Route path='/dialogs' element={<Dialogs dialogPage={props.state.dialogPage} dispatch={props.dispatch}/>}/>
                    <Route path='/profile' element={<Profile profilePage={props.state.profilePage} dispatch={props.dispatch} />}/>
                    <Route path='/news' element={<News/>}/>
                    <Route path='/music' element={<Music/>}/>
                    <Route path='/settings' element={<Settings/>}/>
                    <Route path='/friends' element={<Friends/>}/>
                </Routes>
            </div>

            );
}

export default Content;

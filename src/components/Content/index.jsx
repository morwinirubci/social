import React from 'react';
import Profile from './Profile';
import News from './News';
import Music from './Music';
import Settings from './Settings';
import Friends from './Friends';
import {Routes, Route} from 'react-router-dom';
import style from '../../index.module.css';
import DialogsContainer from './Dialogs/DialogsContainer'
function Content (props) {



    return (
            <div className={style.main}>
                <Routes>
                    <Route path='/dialogs' element={<DialogsContainer />}/>
                    <Route path='/profile' element={<Profile />}/>
                    <Route path='/news' element={<News/>}/>
                    <Route path='/music' element={<Music/>}/>
                    <Route path='/settings' element={<Settings/>}/>
                    <Route path='/friends' element={<Friends/>}/>
                </Routes>
            </div>

            );
}

export default Content;

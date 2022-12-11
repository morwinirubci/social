import React from 'react';
import {NavLink} from 'react-router-dom';
import style from './Sidebar.module.css';
import FriendList from './FriendList';


const Sidebar = (props) => {
    let friendsListElem = props.state.friendsPage.friendsList.map(newFriendsList => <FriendList id={newFriendsList.id} icon={newFriendsList.icon} name={newFriendsList.name} />)

    return (
            <div className={style.sidebar}>
                <nav>
                    <ul className="sidebar__list">
                        <li><NavLink className={({ isActive }) =>(isActive ? style.active : "")} to="/profile">Profile</NavLink></li>
                        <li><NavLink className={({ isActive }) =>(isActive ? style.active : "")} to="/dialogs">Messages</NavLink></li>
                        <li><NavLink className={({ isActive }) =>(isActive ? style.active : "")} to="/news">News</NavLink></li>
                        <li><NavLink className={({ isActive }) =>(isActive ? style.active : "")} to="/music">Music</NavLink></li>
                        <li><NavLink className={({ isActive }) =>(isActive ? style.active : "")} to="/settings">Settings</NavLink></li>
                        <li className={style.friend}>
                            <NavLink className={({ isActive }) =>(isActive ? style.active : "")} to="/friends">Friends</NavLink>
                            {friendsListElem}
                        </li>
                    </ul>
                </nav>
            </div>
            )
};

export default Sidebar;
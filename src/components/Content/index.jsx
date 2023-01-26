import React from "react";
import ProfileContainer from "./Profile/ProfileContainer";
import News from "./News";
import Music from "./Music";
import Settings from "./Settings";
import Friends from "./Friends";
import { Routes, Route } from "react-router-dom";
import style from "../../index.module.css";
import DialogsContainer from "./Dialogs/DialogsContainer";
import FindUsersAPI from "./FindUsers/FindUsersContainer";
import LoginContainer from "./Login/LoginContainer";

function Content(props) {
  return (
    <div className={style.main}>
      <Routes>
        <Route path="/dialogs" element={<DialogsContainer />} />
        <Route path="/profile" element={<ProfileContainer />} />
        <Route path="profile/:userId" element={<ProfileContainer />} />
        <Route path="/news" element={<News />} />
        <Route path="/music" element={<Music />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/users" element={<FindUsersAPI />} />
        <Route path="/login" element={<LoginContainer />} />
      </Routes>
    </div>
  );
}

export default Content;

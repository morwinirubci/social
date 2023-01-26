import React from "react";
import Preloader from "../../../Preloader/Preloader";
import ProfileStatusHooks from "./ProfileStatusHooks";

const ProfileItem = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      <img src="https://i.redd.it/t0prkpqff6211.jpg" alt="content" />
      <div>
        <p>Пользователь по номером = {props.profile.userId}</p>
        <img src={props.profile.photos.large} alt="" />
          <span>{props.status}</span>
        <div>
          <ProfileStatusHooks
            updateStatus={props.updateStatus}
            status={props.status}
          />
          <p>{props.profile.aboutMe}</p>
          <br></br>
          <div>
            Контакты
            <p>{props.profile.contacts.facebook}</p>
            <p>{props.profile.contacts.vk}</p>
            <p>{props.profile.contacts.twitter}</p>
            <p>{props.profile.contacts.instagram}</p>
            <p>{props.profile.contacts.youtube}</p>
            <p>{props.profile.contacts.github}</p>
          </div>
          <br></br>
        </div>
      </div>
    </div>
  );
};

export default ProfileItem;

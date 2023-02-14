import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./FindUsers.module.css";
import Paginator from "./Paginator/Paginator";

const Users = (props) => {
  
  

  return (
    <div>

      <Paginator totalUsersCount={props.totalUsersCount} pageSize={props.pageSize} onPageChange={props.onPageChange} currentPage={props.currentPage}/>

      {props.usersPage.map((user) => (
        <div key={user.id}>
          <div className={styles.avatar}>
            <NavLink to={"/profile/" + user.id}>
              <img
                src={
                  user.photos.small != null
                    ? user.photos.small
                    : "https://cdn-icons-png.flaticon.com/512/147/147142.png"
                }
                alt=""
              />
            </NavLink>
          </div>
          <div>
            {user.followed ? (
              <button
                onClick={() => {
                  props.unfollow(user.id)
                }}
              >
                unFollow
              </button>
            ) : (
              <button
                onClick={() => {
                  props.follow(user.id)
                }}
              >
                Follow
              </button>
            )}
          </div>

          <div>
            <p>{user.name}</p>
            <p>{user.surName}</p>
            <p>{user.status}</p>
            <p>{"user.location.country"}</p>
            <p>{"user.location.city"}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;

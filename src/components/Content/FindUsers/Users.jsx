import React from 'react';
import styles from './FindUsers.module.css';
import FindUsersContainer from './FindUsersContainer'

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pagesNum = [];
    for (let i = 1; i <= pagesCount; i++) {
        pagesNum.push(i);
    }

    return (
        <div>
            <ul className={styles.list}>
                {pagesNum.map(p => {
                    return <li className={props.currentPage === p && styles.listItem} onClick={(e) => {
                        props.onPageChange(p)
                    }}>{p}</li>
                })}
            </ul>
            {props.usersPage.map(user => <div key={user.id}>
                <div className={styles.avatar}>
                    <img
                        src={user.photos.small != null ? user.photos.small : 'https://cdn-icons-png.flaticon.com/512/147/147142.png'}
                        alt=""/>
                </div>
                <div>
                    {user.followed
                        ? <button onClick={() => {
                            props.follow(user.id)
                        }}>unFollow</button>
                        : <button onClick={() => {
                            props.unfollow(user.id)
                        }}> Follow </button>}
                </div>


                <div>
                    <p>{user.name}</p>
                    <p>{user.surName}</p>
                    <p>{user.status}</p>
                    <p>{"user.location.country"}</p>
                    <p>{"user.location.city"}</p>
                </div>
            </div>)}
        </div>
    )
}

export default Users;

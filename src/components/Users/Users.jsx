import React from "react";
import styles from './users.module.css';
import userPhoto from '../../assets/images/60af1abf02c8c-bpfull.jpg';
import { NavLink } from "react-router-dom";
import axios from 'axios'; // Добавьте импорт axios

const Users = ({ totalUsersCount, pageSize, currentPage, onPageChanged, users, follow, unfollow }) => {
  const pagesCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];

  if (pagesCount <= 11) {
    pages = Array.from({ length: pagesCount }, (_, i) => i + 1);
  } else {
    if (currentPage <= 6) {
      pages = [...Array.from({ length: 11 }, (_, i) => i + 1)];
    } else if (currentPage > pagesCount - 6) {
      pages = [...Array.from({ length: 11 }, (_, i) => pagesCount - 10 + i)];
    } else {
      pages = [...Array.from({ length: 11 }, (_, i) => currentPage - 5 + i)];
    }
  }

  return (
    <div>
      <div>
        {currentPage > 1 && <span onClick={() => onPageChanged(currentPage - 1)}>Prev</span>}
        {pages.map(p => (
          <span
            key={p}
            className={currentPage === p ? styles.selectedPage : undefined}
            onClick={(e) => onPageChanged(p)}
          >
            {p}
          </span>
        ))}
        {currentPage < pagesCount && <span onClick={() => onPageChanged(currentPage + 1)}>Next</span>}
      </div>
      {users.map(u => (
        <div key={u.id}>
          <span>
            <div>
              <NavLink to={'/profile/' + u.id} >
                <img src={u.photos.small ? u.photos.small : userPhoto} className={styles.userPhoto} alt="user" />
              </NavLink>
            </div>
            <div>
              {u.followed ? (
                <button onClick={() => 
                  axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                    withCredentials: true,
                    headers:{
                      "API-KEY":"4f6b56f6-2e32-4b5d-9a97-7442ad977207"
                    }
                  })
                  .then(response => {
                    if (response.data.resultCode === 0) {
                      unfollow(u.id);
                    }
                  })
                }>Unfollow</button>
              ) : (
                <button onClick={() => {
                  axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                    withCredentials: true,
                    headers:{
                      "API-KEY":"4f6b56f6-2e32-4b5d-9a97-7442ad977207"
                    }
                  })
                  .then(response => {
                    if (response.data.resultCode === 0) {
                      follow(u.id);
                    }
                  });
                }}>Follow</button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              {u.location && (
                <React.Fragment>
                  <div>{u.location.country}</div>
                  <div>{u.location.city}</div>
                </React.Fragment>
              )}
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;

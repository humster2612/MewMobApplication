// Users.jsx

import React from 'react';
import styles from './users.module.css';
import userPhoto from '../../assets/images/60af1abf02c8c-bpfull.jpg';
import { NavLink } from 'react-router-dom';

const Users = ({
  totalUsersCount,
  pageSize,
  currentPage,
  onPageChanged,
  users,
  follow,
  unfollow,
  followingInProgress,
}) => {
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
        {currentPage > 1 && (
          <span onClick={() => onPageChanged(currentPage - 1)} className={styles.pageNav}>
            Prev
          </span>
        )}
        {pages.map((p) => (
          <span
            key={p}
            className={currentPage === p ? styles.selectedPage : styles.pageNumber}
            onClick={() => onPageChanged(p)}
          >
            {p}
          </span>
        ))}
        {currentPage < pagesCount && (
          <span onClick={() => onPageChanged(currentPage + 1)} className={styles.pageNav}>
            Next
          </span>
        )}
      </div>
      <div className={styles.usersContainer}>
        {users.map((u) => (
          <div key={u.id} className={styles.userCard}>
            <span>
              <div>
                <NavLink to={'/profile/' + u.id}>
                  <img
                    src={u.photos.small ? u.photos.small : userPhoto}
                    className={styles.userPhoto}
                    alt="user"
                  />
                </NavLink>
              </div>
              <div>
                {u.followed ? (
                  <button
                    disabled={followingInProgress.includes(u.id)} // Используем includes для проверки наличия id в массиве
                    onClick={() => unfollow(u.id)}
                    className={styles.buttonUnfollow}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    disabled={followingInProgress.includes(u.id)} // Используем includes для проверки наличия id в массиве
                    onClick={() => follow(u.id)}
                    className={styles.buttonFollow}
                  >
                    Follow
                  </button>
                )}
              </div>
            </span>
            <span className={styles.userInfo}>
              <span>
                <div className={styles.userName}>{u.name}</div>
                <div className={styles.userStatus}>{u.status}</div>
              </span>
              <span>
                {u.location && (
                  <div className={styles.userLocation}>
                    <div>{u.location.country}</div>
                    <div>{u.location.city}</div>
                  </div>
                )}
              </span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;

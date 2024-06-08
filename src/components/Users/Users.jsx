import React from "react";
import styles from './users.module.css';
import userPhoto from '../../assets/images/60af1abf02c8c-bpfull.jpg';
import { NavLink } from "react-router-dom";

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
      {users.map( u => (
        <div key={u.id}>
          <span>
            <div>
              <NavLink to={'/ '+u.id} >
              <img src={u.photos.small ? u.photos.small : userPhoto} className={styles.userPhoto} />
              </NavLink>
            </div>
            <div>
              {u.followed ? (
                <button onClick={() => unfollow(u.id)}>Unfollow</button>
              ) : (
                <button onClick={() => follow(u.id)}>Follow</button>
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


import React, { useEffect } from "react";
import styles from './users.module.css';

let Users = (props) => {
  useEffect(() => {
    if (props.users.length === 0) { // Проверяем, что пользователи еще не загружены
      props.setUsers([
        { id: 1, photoUrl: 'https://www.radiustheme.com/demo/wordpress/themes/cirkle/wp-content/uploads/avatars/1/60af1abf02c8c-bpfull.jpg', followed: false, fullName: 'Vika', status: 'I am a boss', location: { city: 'Kiev', country: 'Ukraine' } },
        { id: 2, photoUrl: 'https://www.radiustheme.com/demo/wordpress/themes/cirkle/wp-content/uploads/avatars/1/60af1abf02c8c-bpfull.jpg', followed: true, fullName: 'Olha', status: 'I am a boss too', location: { city: 'Kherson', country: 'Ukraine' } },
        { id: 3, photoUrl: 'https://www.radiustheme.com/demo/wordpress/themes/cirkle/wp-content/uploads/avatars/1/60af1abf02c8c-bpfull.jpg', followed: true, fullName: 'SAsha', status: 'I am a boss too', location: { city: 'Kherson', country: 'Ukraine' } },
      ]);
    }
  }, []); // Пустой массив зависимостей означает, что useEffect вызывается только при монтировании компонента

  return (
    <div>
      {props.users && props.users.map(u => (
        <div key={u.id}>
          <span>
            <div>
              <img src={u.photoUrl} className={styles.userPhoto} />
            </div>
            <div>
              {u.followed
                ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
            </div>
          </span>
          <span>
            <span>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;

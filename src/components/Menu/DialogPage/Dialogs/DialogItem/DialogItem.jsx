import React from 'react';
import s from './DialogItem.module.css';
import { Link } from 'react-router-dom';

const DialogItem = ({ id, name, avatarUrl }) => {
    return (
       
        <div className={s.dialog}>

            <img src={avatarUrl} alt={name} />
            <div className={s.name}>{name}</div>
            <Link to={`/dialogs/${id}`}>
           
            </Link>
        </div>
      
    );
};

export default DialogItem;

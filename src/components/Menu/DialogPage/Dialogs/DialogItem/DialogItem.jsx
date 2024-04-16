import React from 'react';
import s from './DialogItem.module.css';
import { Link } from 'react-router-dom';

const DialogItem =(props) =>{
    let path = "/dialogs/" + props.id;


    return (

        <div className={s.dialog + ' ' + s.active}>
           <Link to={`/dialogs/${props.id}`}>{props.name}</Link>

        </div>

    )
};


export default DialogItem;


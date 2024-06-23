// MenuLine.jsx
import React from 'react';
import s from './MenuLine.module.css';
import { Link } from 'react-router-dom';

const MenuLine = () => {
    return (
        <div className={s.nav}>
            <div className={s.item}>
                <Link to="/">HomePage</Link> 
            </div>

            <div className={s.item}>
                <Link to="/dialogs">DialogPage</Link> 
            </div>

            <div className={s.item}>
                <Link to="/users">Users</Link> 
            </div>
        </div>
    );
};

export default MenuLine;


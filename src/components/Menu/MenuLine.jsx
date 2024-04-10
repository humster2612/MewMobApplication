import React from 'react';
import s from './MenuLine.module.css';
import { NavLink } from 'react-router-dom';
import MainPage from './MainPage';

const Menu = () => {
    return (
        <div className={s.nav}>
            <div className={s.item}>
                <a href="/mainpage">MainPage</a>
            </div>

            <div className={s.item}>
                <a href="/aboutus">About us</a>
            </div>

            <MainPage/>

        </div>

    );
};

export default Menu;


import React from 'react';
import s from './Header.module.css';
import MenuLine from '../Menu/MenuLine';
import { NavLink } from 'react-router-dom';

const Header =(props)=>{
    return (
        <header className={s.header}>
                <img src="https://www.radiustheme.com/demo/wordpress/themes/cirkle/wp-content/uploads/2021/11/dark_logo.svg" alt='' />

                <div className={s.loginBlock}>
                    {props.isAuth? props.login
                    : <NavLink to={'/login'}>Login</NavLink>
                    }

                </div>
                <MenuLine/>
      
        </header>

       
    )
};
export default Header;


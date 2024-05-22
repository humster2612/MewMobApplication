import React from 'react';
import s from './Header.module.css';
import MenuLine from '../Menu/MenuLine';
// import Dialogs from '../Menu/DialogsBar/Dialogs';

const Header =()=>{
    return (
        <header className={s.header}>
                <img src="https://www.radiustheme.com/demo/wordpress/themes/cirkle/wp-content/uploads/2021/11/dark_logo.svg" alt='' />

                <MenuLine/>
      
        </header>

       
    )
};
export default Header;


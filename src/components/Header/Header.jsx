import React from 'react';
import s from './Header.module.css';
import MenuLine from '../Menu/MenuLine';
// import Dialogs from '../Menu/DialogsBar/Dialogs';

const Header =()=>{
    return (
        <header className={s.header}>
                <img src="https://cdn.icon-icons.com/icons2/2582/PNG/512/menu_icon_153999.png" alt='' />

                <MenuLine/>
      
        </header>

       
    )
};
export default Header;


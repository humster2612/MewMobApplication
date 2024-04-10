import React from 'react';
import s from "./Navboxcomponent.module.css";
import Tabscontainer from './Tabscontainer/Tabscontainer';
import SideBar from './Tabscontainer/SideBar/SideBar';


const Navboxcomponent =(props)=>{
    return (

    <div id={s.itemnav}>
        <div>
    <Tabscontainer/>   
    <SideBar/>
    </div>

    </div>


    )
};
export default Navboxcomponent;

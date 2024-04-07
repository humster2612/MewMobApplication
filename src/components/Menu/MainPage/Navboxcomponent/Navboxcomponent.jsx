import React from 'react';
import s from "./Navboxcomponent.module.css";
import Tabscontainer from './Tabscontainer/Tabscontainer';



const Navboxcomponent =(props)=>{
    return (

    <div id={s.itemnav}>
        <div>
    <Tabscontainer/>   
    </div>

    </div>


    )
};
export default Navboxcomponent;

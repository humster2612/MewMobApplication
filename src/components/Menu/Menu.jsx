// MainPage
// AboutUs
// DialogsBar

// В хедере вставим эту страничку 

import React from 'react';
import s from './Menu.module.css';
import MainPage from './MenuLine';
import { BrowserRouter } from 'react-router-dom';
import AboutUs from './AboutUs/AboutUs';


const Menu =()=>{
    return(

        <BrowserRouter>
  
<div className='app-wrapper'>
       <Route path='/mainpage' component={MainPage}/>
       <Route path='/aboutus' component={AboutUs}/>
</div>



       {/* 
            <div className={s.item}>
                <a href='aboutus'>About us</a>
            </div>

            <div className={s.item}>
                <a>Messages</a>
            </div> */}


</BrowserRouter>


       


    )
};


export default Menu;


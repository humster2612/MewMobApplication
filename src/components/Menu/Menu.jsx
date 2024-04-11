// MainPage
// AboutUs
// DialogsBar

// В хедере вставим эту страничку 

import React from 'react';
import s from './Menu.module.css';
import { BrowserRouter } from 'react-router-dom';
import AboutUs from './AboutUs/AboutUs';
import HomePage from './HomePage/HomePage';
import DialogPage from './DialogPage/DialogsPage';


const Menu =()=>{
    return(

        <BrowserRouter>
  
<div className='app-wrapper'>
       <Route path='/mainpage' component={HomePage}/>
       <Route path='/aboutus' component={AboutUs}/>
       <Rout path = '/dialogs' component={DialogPage}/>
</div>



</BrowserRouter>


       


    )
};


export default Menu;


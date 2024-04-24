import React from 'react';
import PageContent from '../../PageContent/PageContent';
import Tabscontainer from '../../Navboxcomponent/Tabscontainer/Tabscontainer';
import SideBar from '../../Navboxcomponent/Tabscontainer/ContentTabs/SideBar/SideBar';
import s from './HomePage.module.css';
import { AddPost } from '../../../redux/state';


const HomePage =(props)=>{
    return(
        <div>
  <div id={s.itemnav}>
        <div>
        <PageContent/>
            <Tabscontainer AddPost={AddPost} updateNewPostText={props.updateNewPostText} />   
         <SideBar/>
    </div>

    </div>
         
        
          
        </div>



    )
};

export default HomePage;
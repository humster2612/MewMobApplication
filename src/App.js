import React from 'react';
import Header from './components/Menu/MainPage/Header/Header';
import PageContent from './components/Menu/MainPage/PageContent/PageContent';
import Navboxcomponent from './components/Menu/MainPage/Navboxcomponent/Navboxcomponent';


import './App.css';



  const App = (props) => {
  return (
  
    <div>

    <Header/>
    <PageContent/>
    <Navboxcomponent/>


    </div>
    

  );
}

export default App;

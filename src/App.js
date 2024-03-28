import React from 'react';
import Header from './components/Header/Header';
import PageContent from './components/PageContent/PageContent';
import Navboxcomponent from './components/Navboxcomponent/Navboxcomponent';


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

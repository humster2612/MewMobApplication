import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './components/Menu/HomePage/HomePage'; 
import DialogsContainer from './components/Menu/DialogPage/Dialogs/DialogsContainer';
// import { AddPost, updateNewPostText, updateNewMessageText, AddMessage } from './redux/store';

const App = (props) => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage store={props.store}/>} /> 
          <Route path="/dialogs" element={<DialogsContainer store={props.store} />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

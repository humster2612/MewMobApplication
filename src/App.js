import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './components/Menu/HomePage/HomePage'; 
import DialogPage from './components/Menu/DialogPage/DialogsPage';
import { AddPost, updateNewPostText, updateNewMessageText, AddMessage } from './redux/store';

const App = (props) => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage profilePage={props.state.profilePage} dispatch={props.dispatch}  />} /> 
          <Route path="/dialogs" element={<DialogPage diaPage={props.state.diaPage}  dispatch={props.dispatch} />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

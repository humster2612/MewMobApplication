import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './components/Menu/HomePage/HomePage'; 
import DialogPage from './components/Menu/DialogPage/DialogsPage';
import { AddPost, updateNewPostText, updateNewMessageText, AddMessage } from './redux/state';

const App = (props) => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage profilePage={props.state.profilePage} AddPost={props.AddPost} updateNewPostText={props.updateNewPostText}  />} /> 
          <Route path="/dialogs" element={<DialogPage state={props.state.diaPage} updateNewMessageText={props.updateNewMessageText} AddMessage={AddMessage} />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

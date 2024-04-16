import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './components/Menu/HomePage/HomePage'; 
import DialogPage from './components/Menu/DialogPage/DialogsPage';
import state from './redux/state';

const App = (props) => {



  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} /> 
          <Route path="/dialogs" element={<DialogPage state={state} />} /> 
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;


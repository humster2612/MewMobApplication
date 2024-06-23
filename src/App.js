import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import DialogsContainer from './components/Menu/DialogPage/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Menu/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import Register from './components/Register/Register';
import { withAuthRedirect } from './Hoc/withAuthRedirect';
import Dialogs from './components/Menu/DialogPage/Dialogs/Dialogs';
const ProtectedProfile = withAuthRedirect(ProfileContainer);
const ProtectedDialogs = withAuthRedirect(DialogsContainer);
const ProtectedUsers = withAuthRedirect(UsersContainer);

const App = () => {
return (
<BrowserRouter>
<div>
<HeaderContainer />
<Routes>
<Route path="/" element={<ProtectedProfile />} />
{/* <Route path="/
" element={<ProtectedProfile />} /> */}
{/* <Route path="/dialogs" element={<ProtectedDialogs />} /> */}
<Route path='/dialogs/*' element={<Dialogs />} />

<Route path="/users" element={<ProtectedUsers />} />
<Route path="/login" element={<LoginPage />} />
<Route path="/register" element={<Register />} />
</Routes>
<Footer />
</div>
</BrowserRouter>
);
};

export default App;
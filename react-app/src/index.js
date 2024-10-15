import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/reducers/store.red.jsx';
import Header from './components/header.jsx';
import Home from './pages/home/home.jsx';
import Login from './pages/login/login.jsx';
import Profile from './pages/profile/profile.jsx';
import Error from './pages/error/error.jsx';
import './pages/sass/main.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={store}>
  {
    // Create Route with React Router
  }
  <Router>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='login' element={<Login />} />
      <Route path='profile' element={<Profile />} />
      <Route path='*' element={<Error />} />
    </Routes>
  </Router>
  </Provider>
</React.StrictMode>
);


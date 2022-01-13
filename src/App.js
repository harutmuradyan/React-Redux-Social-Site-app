/* eslint-disable react/jsx-no-undef */
import React from 'react';
import s from './scss/App.module.scss';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Sertings from './components/Sertings/Sertings';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";

const App = (props) => {
  return (
    <Router>
      <div className={s.app}>
        <Header />
        <div className={s.app_content}>
          <div></div>
          <Navbar/>
          <div className={s.app_blocks}>
            <Routes>
              <Route path="/profile" element={<Profile />} />
              <Route path="/dialogs" element={<Dialogs />} />
              <Route path="/news" element={<News />} />
              <Route path="/music" element={<Music />} />
              <Route path="/sertings" element={<Sertings />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

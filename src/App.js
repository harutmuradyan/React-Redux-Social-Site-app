import React from 'react';
import s from './scss/App.module.scss';
import Profil from './components/Profil/Profil';
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className={s.app}>
      <Header />
      <div className={s.content}>
        <Sidebar/>
        <Profil/>
      </div>
    </div>
  );
}

export default App;

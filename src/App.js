import React from 'react';
import './scss/app.scss';
import Profil from './components/Profil/Profil';
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="app">
      <Header />
      <div className='content'>
        <Sidebar/>
        <Profil/>
      </div>
    </div>
  );
}

export default App;

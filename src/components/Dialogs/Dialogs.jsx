import React from 'react';
import s from './Dialogs.module.scss';/*import Profil from './components/Profil/Profil';*/



const Dialogs = (props) => {
  return (
    <div className={s.dialogs_page}>
      <div className={s.dialogs_bar}>
        <h1>Message</h1>
      </div>
      <div className={s.dialogs_content}>

      </div>
    </div>
  );
}

export default Dialogs;

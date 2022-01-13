/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import s from './SocialSite.module.scss';



const SocialSite = (props) => {
  return (
    <div className={s.social_site}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"/>
      <img src="https://www.lifepng.com/wp-content/uploads/2020/10/580b57fcd9996e24bc43c521.png"/>
      <img src="https://www.pngkey.com/png/full/2-27646_twitter-logo-png-transparent-background-logo-twitter-png.png"/>
    </div>
  );
}

export default SocialSite;

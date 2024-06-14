import React from 'react';
import { FaFacebookF, FaTwitter, FaDribbble, FaBehance, FaYoutube } from 'react-icons/fa';
import s from './InfoBanner.module.css';

const InfoBanner = () => {
  console.log('Rendering InfoBanner');

  return (
    <div className={s.mediabody}>
      <h3 className={s.texttitle}>Rebeca Powel</h3>
      <div className={s.itemsubtitle}>United State of America</div>

      <ul className={s.itemsocial}>
        <li>
          <a href="https://www.facebook.com/" className={s.bgfb} target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/" className={s.bgtwitter} target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
        </li>
        <li>
          <a href="https://dribbble.com/" className={s.bgdribble} target="_blank" rel="noopener noreferrer">
            <FaDribbble />
          </a>
        </li>
        <li>
          <a href="https://www.behance.net/" className={s.bgbehance} target="_blank" rel="noopener noreferrer">
            <FaBehance />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/" className={s.bgyoutube} target="_blank" rel="noopener noreferrer">
            <FaYoutube />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default InfoBanner;

import React from 'react';
import s from './Infometa.module.css';

const Infometa = () => {
  console.log('Rendering Infometa');

  return (
    <ul className={s.usermeta}>
      <li>
        Posts:
        <span>4</span>
      </li>
      <li>
        Comments:
        <span>4</span>
      </li>
      <li>
        Views:
        <span>1116</span>
      </li>
    </ul>
  );
};

export default Infometa;

import React from 'react';
import s from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={s.columnIcTeFooter}>
                <div className={s.iconFooter}>
                    <img src="https://www.radiustheme.com/demo/wordpress/themes/cirkle/wp-content/uploads/2021/11/dark_logo.svg" alt='' />
                </div>
                <div className={s.textFooter}>
                    Dorem ipsum dolor sit amet consec adipisicing elit sed do eiusmod por incidiut labore et loreLorem ipsum kelly amieo dolorey.
                </div>
            </div>
            <div className={s.columnSitesFooter}>
                <div className={s.ImportantLinks}>
                    Important Links
                </div>
                <div className={s.Community}>
                    Community
                </div>
                <div className={s.Followers}>
                    Followers
                </div>
            </div>
        </footer>
    )
};

export default Footer;

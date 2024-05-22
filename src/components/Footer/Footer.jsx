import React from 'react';
import s from './Footer.module.css';



const Footer =()=>{
    return (
        <footer className={s.footer}>

            <div className='columnIcTeFooter'>

                    <div className='iconFooter'>
                         <img src="https://www.radiustheme.com/demo/wordpress/themes/cirkle/wp-content/uploads/2021/11/dark_logo.svg" alt='' />
                    </div>

                    <div className='textFooter'>
                        Dorem ipsum dolor sit amet consec adipisicing elit sed do eiusmod por incidiut labore et loreLorem ipsum kelly amieo dolorey.
                     </div>
            </div>

            <div className='columnSitesFooter'>

                <div className='ImportantLinks'>
                    Important Links 
                </div>

                <div className='Community'>
                Community
                </div>


                <div className='Followers'>
                Followers 
                </div>


            </div>
       



        </footer>

       
    )
};



export default Footer;



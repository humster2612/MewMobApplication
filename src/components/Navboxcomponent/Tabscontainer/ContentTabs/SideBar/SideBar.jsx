import React from 'react';
import "./SideBar.css";


const SideBar = (props) => {
    return (
        <div className="friends-block">
            <h2 className="block-title">Friends</h2>
            <div className="friend-icon">
                <img
                    alt=""
                    className="friend-avatar"
                    src="https://www.radiustheme.com/demo/wordpress/themes/cirkle/wp-content/uploads/avatars/24/60951ab24ec80-bpfull.jpg"
                />
                <h3 className='block-nametext'>Ghjfjwe BJjhju</h3>
            </div>


            <div className="friend-icon">
                <img
                    alt=""
                    className="friend-avatar"
                    src="https://www.radiustheme.com/demo/wordpress/themes/cirkle/wp-content/uploads/avatars/21/6095206f83cae-bpfull.jpg"
                />
                <h3 className='block-nametext'>Chicza Buka</h3>
            </div>


            <div className="friend-icon">
                <img
                    alt=""
                    className="friend-avatar"
                    src="https://www.radiustheme.com/demo/wordpress/themes/cirkle/wp-content/uploads/avatars/22/60951ba9a9d51-bpfull.jpg"
                />
                <h3 className='block-nametext'>Ghjfjwe BJjhju</h3>
            </div>
        </div>
    );
};

export default SideBar;

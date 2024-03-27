import React from 'react';
import s from './BoxLinki.module.css';




const BoxLinki =() =>{
    return (
        <ul className={s.menulist}>
        <li id="activity-personal-li"><a id="user-activity" href="https://www.radiustheme.com/demo/wordpress/themes/cirkle/members/admin/activity/">Timeline</a></li>
        <li id="xprofile-personal-li" className="current selected"><a id="user-xprofile" href="https://www.radiustheme.com/demo/wordpress/themes/cirkle/members/admin/profile/">About</a></li>
        <li id="friends-personal-li"><a id="user-friends" href="https://www.radiustheme.com/demo/wordpress/themes/cirkle/members/admin/friends/">Friends</a></li>
        <li id="groups-personal-li"><a id="user-groups" href="https://www.radiustheme.com/demo/wordpress/themes/cirkle/members/admin/groups/">Groups</a></li>
        <li id="photos-personal-li"><a id="user-photos" href="https://www.radiustheme.com/demo/wordpress/themes/cirkle/members/admin/photos/">Photos</a></li>
        <li id="videos-personal-li"><a id="user-videos" href="https://www.radiustheme.com/demo/wordpress/themes/cirkle/members/admin/videos/">Videos</a></li>
        <li id="badges-personal-li"><a id="user-badges" href="https://www.radiustheme.com/demo/wordpress/themes/cirkle/members/admin/badges/">Badges</a></li>
        <li id="forums-personal-li"><a id="user-forums" href="https://www.radiustheme.com/demo/wordpress/themes/cirkle/members/admin/forums/">Forums</a></li>

        </ul>
    )
};

export default BoxLinki;

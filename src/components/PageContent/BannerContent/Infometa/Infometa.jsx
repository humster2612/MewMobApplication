import React from 'react';
import s from './Infometa.module.css'

{/* компонента с постами и коментами  и просмотрами  */}


const Infometa=()=>{
    return(
    <ul className='user-meta'>
<li>
    "Posts"
    <span>4</span>
</li>
<li>
    "Comments"
    <span>4</span>
</li>
<li>
    "Views"
    <span>1116</span>
</li>

</ul>
    )
};

export default Infometa;


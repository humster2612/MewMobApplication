import React from "react"
import s from './InfoBanner.module.css'

{/* соц сети  компонента*/}

const InfoBanner =() =>{
    return(
<div className='media-body'>
<h3 className='item-title'>Rebeca Powel</h3>
<div className='item-subtitle'>United State of America</div>
<ul className='item-social'>
<li>
<a href="https://www.facebook.com/" class="bg-fb" target="_blank"><i class="icofont-facebook"></i></a>
</li>
<li>
<a href="https://twitter.com/" class="bg-twitter" target="_blank"><i class="icofont-twitter"></i></a>
</li>
<li>
<a href="https://dribbble.com/" class="bg-dribble" target="_blank"><i class="icofont-dribbble"></i></a>
</li>
<li><a href="https://www.behance.net/" class="bg-behance" target="_blank"><i class="icofont-behance"></i></a></li>
<li>
<a href="https://www.youtube.com/" class="bg-youtube" target="_blank"><i class="icofont-brand-youtube"></i></a>
</li>
</ul>

</div>
    )
}


export default InfoBanner;
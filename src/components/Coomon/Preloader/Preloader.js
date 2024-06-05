import React from 'react';
import loading2 from '../../../assets/images/loading2.gif';

const Preloader = ({ isFetching }) => {
    return (
        isFetching ?
        <div style={{ backgroundColor: 'black' }}>
            <img src={loading2} alt="loading" />
        </div> : null
    );
}

export default Preloader;

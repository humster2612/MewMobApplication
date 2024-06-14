import React from 'react';
import styles from './Preloader.module.css';

const Preloader = ({ isFetching }) => {
    return (
        isFetching ? (
            <div className={styles.preloaderContainer}>
                <div className={styles.preloader}></div>
            </div>
        ) : null
    );
}

export default Preloader;

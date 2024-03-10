import React from 'react'

import styles from './Footer.module.scss'
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.box}>
                <h2>MIDNIGHT</h2>
                <span>Digital Agency</span>
            </div>
            <div className={styles.box}></div>
           
        </footer>
    )
}

export default Footer
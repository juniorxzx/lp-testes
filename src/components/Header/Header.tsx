'use client'

import React, { useState } from 'react'
// styles
import styles from './Header.module.scss'
const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const links = [
        { name: 'About Us', link: 'about' },
        { name: 'Services', link: 'services' },
        { name: 'Contact', link: 'contact' },
    ]
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div className={styles.logo}>MIDNIGHT</div>
                <div>

                </div>
                <div className={styles.box}>


                    <div className={styles.menuMobile}>
                        <div className={`${styles.button} ${openMenu ? styles.open : ''} `} onClick={() => setOpenMenu(!openMenu)}>
                            <span className={`${styles.line} ${styles.line1}`}></span>
                            <span className={`${styles.line} ${styles.line2}`}></span>
                            <span className={`${styles.line} ${styles.line3}`}></span>
                        </div>
                        {openMenu && (
                            <ul className={styles.menu}>
                                {links.map((item, index) => (
                                    <li className={styles.mbItem} key={index} onClick={() => setOpenMenu(false)}>
                                        <a href={`#${item.link}`}>
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <ul className={styles.menu}>
                        {links.map((item, index) => (
                            <li className={styles.mItem} key={index}>
                                <a href={`#${item.link}`}>
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className={styles.cta}>
                        <span>Get in Touch</span>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
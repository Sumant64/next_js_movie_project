'use client'

import React, { useState } from 'react';
import styles from '@/app/styles/navbar.module.css';
import Link from 'next/link';

const Nav = () => {
    const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
        <nav className={styles.navbar}>
            <div className={openMenu ? `${styles.active}` : ""}>
                <ul className={styles.navbarList}>
                    <li className={styles.navbarItem}>
                    <Link className={styles.navbarLink} href="/" onClick={() => setOpenMenu(false)}>
                        Home
                    </Link>
                    </li>

                    <li className={styles.navbarItem}>
                    <Link className={styles.navbarLink} href="/about" onClick={() => setOpenMenu(false)}>
                        About
                    </Link>
                    </li>

                    <li className={styles.navbarItem}>
                    <Link className={styles.navbarLink} href="/movie" onClick={() => setOpenMenu(false)}>
                        Movie
                    </Link>
                    </li>

                    <li className={styles.navbarItem}>
                    <Link className={styles.navbarLink} href="/contact" onClick={() => setOpenMenu(false)}>
                        Contact
                    </Link>
                    </li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Nav
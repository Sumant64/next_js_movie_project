import React from 'react';
import styles from "@/app/styles/navbar.module.css";
import Link from 'next/link';
import Image from 'next/image';
import Nav from './Nav';

const Header = () => {
  return (
    <>
        <header className={styles.main_header}>
            <div>
                <Link href="/">
                    <Image src="/netflix-new-logo.png" alt="my logo image" width={140} height={80} />
                    {/* <h1>NETFLIX</h1> */}
                </Link>
            </div>

            <Nav />
        </header>
    </>
  )
}

export default Header
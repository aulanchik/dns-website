import React from 'react'
import Image from 'next/image'
import styles from "./Header.module.scss";
import { nav } from './data';

const Header: React.FC = () => {
    return (
        <header className="absolute top-0 w-full py-[30px]">
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <div className={styles.header__left}>
                        <Image
                            src='/images/dns-logo.png'
                            alt='DNS logo'
                            width={120}
                            height={40}
                        />
                    </div>
                    <div className={styles.header__center}>
                        <nav className="flex items-center gap-8 text-sm opacity-80">
                            {nav.top.map((item) => (
                                <a
                                    key={item.id}
                                    href={item.link}
                                    className="hover:underline text-white"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </nav>
                        <nav className="flex items-center gap-12 font-semibold">
                            {nav.bottom.map((item) => (
                                <a
                                    key={item.id}
                                    href={item.link}
                                    className="hover:underline text-white"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </nav>
                    </div>
                    <div className={styles.header__right}>
                        <span className={styles.header__support}>Request support</span>
                        <a className={styles.header__btn} href="#contact">Call Me Back</a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;

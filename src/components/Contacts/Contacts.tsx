'use client';
import React, { useState } from 'react';
import Image from 'next/image'
import styles from './Contacts.module.scss';
import Wrapper from '@/components/Wrapper/Wrapper';

function Contacts() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        console.log('Form submitted:', data);
        setIsSubmitted(true);

        setTimeout(() => setIsSubmitted(false), 3000);
    };

    return (
        <section id='contact' className={styles.hero}>
            <div className={styles.hero__bg} aria-hidden />
            <Wrapper>
                <div className={styles.hero__grid}>
                    <div className={styles.hero__lead}>
                        <h1 className={styles.hero__title}>
                            We’re <span className={styles.hero__accent}>your</span> IT Services<br />
                            problem solvers
                        </h1>
                        <p className={styles.hero__desc}>
                            Recognising your frustrations with your print environment, IT services,
                            document management & communications and finding.
                        </p>
                        <p className={styles.hero__cta}>Get in touch today!</p>
                    </div>

                    <form
                        className={styles.form}
                        onSubmit={handleSubmit}
                    >
                        <label className={styles.form__field}>
                            <input
                                className={styles.form__input}
                                type="text"
                                name="name"
                                placeholder="Name"
                                required
                            />
                        </label>

                        <label className={styles.form__field}>
                            <input
                                className={styles.form__input}
                                type="email"
                                name="email"
                                placeholder="Email"
                                required
                            />
                        </label>

                        <label className={styles.form__field}>
                            <input
                                className={styles.form__input}
                                type="tel"
                                name="telephone"
                                placeholder="Telephone"
                            />
                        </label>

                        <label className={styles.form__field}>
                            <input
                                className={styles.form__input}
                                type="text"
                                name="company"
                                placeholder="Company"
                            />
                        </label>

                        <label className={styles.form__field}>
                            <input
                                className={styles.form__input}
                                type="text"
                                name="message"
                                placeholder="I need help with..."
                            />
                        </label>

                        <div className={styles.form__actions}>
                            <button className={styles.form__button} type="submit" disabled={isSubmitted}>
                                {isSubmitted ? 'Submitted!' : 'Submit now'}
                            </button>
                            {isSubmitted && <p className={styles.form__success}>Thank you! We will get back to you soon.</p>}
                        </div>
                    </form>
                </div>

                <footer className={styles.footer}>
                    <div className={styles.footer__col}>
                        <Image
                            className={styles.footer__logo}
                            src='/images/dns-logo.png'
                            alt='DNS logo'
                            width={120}
                            height={40}
                        />
                    </div>

                    <div className={styles.footer__col}>
                        <h3 className={styles.footer__title}>Contact us</h3>
                        <ul className={styles.footer__list}>
                            <li>E <a href="mailto:info@dnslimited.co.uk">info@dnslimited.co.uk</a></li>
                            <li>T <a href="tel:+448450340895">0845 034 0895</a></li>
                        </ul>
                    </div>

                    <div className={styles.footer__col}>
                        <h3 className={styles.footer__title}>Address</h3>
                        <address className={styles.footer__address}>
                            Unit 9<br />Royal Scot Road,<br /> Pride Park, Derby<br /> DE24 8AJ
                        </address>
                    </div>

                    <div className={styles.footer__col}>
                        <h3 className={styles.footer__title}>Opening hours</h3>
                        <p className={styles.footer__text}>
                            Mon – Fri:<br />
                            9 am – 5:30 pm
                        </p>
                    </div>

                    <div className={styles.footer__col}>
                        <h3 className={styles.footer__title}>About us</h3>
                        <ul className={styles.footer__list}>
                            <li><a href="#">CSR</a></li>
                            <li><a href="#">Environment & Sustainability</a></li>
                            <li><a href="#">Meet the team</a></li>
                        </ul>
                    </div>

                    <div className={styles.footer__col}>
                        <h3 className={styles.footer__title}>Services</h3>
                        <ul className={styles.footer__list}>
                            <li><a href="#">IT Services</a></li>
                            <li><a href="#">Communications</a></li>
                            <li><a href="#">Managed Print Services</a></li>
                            <li><a href="#">Document Management</a></li>
                        </ul>
                    </div>
                </footer>
            </Wrapper>

            <div className={styles.footer__separator}>
                <div className={styles.footer__content}>
                    <span className={styles.footer__designed}>
                        Design & built by Alt
                    </span>

                    <span className={styles.footer__copyright}>
                        © Document Network Services Ltd 2024
                    </span>
                </div>
            </div>
        </section >
    );
}

export default Contacts;

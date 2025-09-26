import React from 'react'
import styles from './Services.module.scss';
import { services } from './data'

const Services = () => {
    return (
        <section className={styles.services}>
            <div className={styles.services__container}>
                {services.map((service, index) => (
                    <div className={styles.services__card} key={index}>
                        <img
                            src={`/images/${service.icon}`}
                            alt={`${service.title} icon`}
                            className={styles.services__icon}
                        />
                        <h3 className={styles.services__title}>{service.title}</h3>
                        <p className={styles.services__description}>{service.description}</p>
                        <a href={service.link} className={styles.services__link}>
                            Learn More
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;

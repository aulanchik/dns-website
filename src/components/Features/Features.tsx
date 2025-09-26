import styles from './Features.module.scss';
import { features } from './data';

const Features = () => {
    return (
        <section className={styles.features}>
            <h2 className={styles.features__heading}>
                A team of accredited experts <br /> that support you
            </h2>
            <div className={styles.features__container}>
                {features.map((feature, index) => (
                    <div key={`${feature.id}-${index}`} className={styles.features__item}>
                        <div className={styles.features__iconWrapper}>
                            <img
                                className={styles.features__icon}
                                src={`/images/${feature.icon}`}
                                alt={feature.label}
                            />
                        </div>
                        <h3 className={styles.features__label}>{feature.label}</h3>
                        <p className={styles.features__description}>{feature.description}</p>
                    </div>
                ))}
            </div>
        </section >
    );
};

export default Features;

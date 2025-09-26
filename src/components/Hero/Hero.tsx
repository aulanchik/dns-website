import Image from 'next/image';
import styles from './Hero.module.scss';
import Wrapper from '@/components/Wrapper/Wrapper';
import { data } from './data';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.hero__pd} />
            <Wrapper>
                <div className={styles.hero__block}>
                    <div className={styles.hero__text}>
                        <h1 className={styles.hero__title}>
                            {data.title1}
                        </h1>
                        <h1 className={styles.hero__title}>
                            {data.title2}
                        </h1>
                        <p className={styles.hero__subtitle}>
                            {data.description}
                        </p>
                    </div>
                    <Image
                        className={styles.hero__image}
                        src="/images/hero-img.png"
                        alt="Laptop with IT services"
                        width={489}
                        height={410}
                        priority
                    />
                </div>
            </Wrapper>
        </section>
    );
};

export default Hero;

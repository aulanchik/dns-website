import Image from 'next/image'
import styles from './Partners.module.scss';

const partnerLogos = [
    'logo-verox.svg',
    'logo-microsoft.svg',
    'logo-hp.svg',
    'logo-3cx.svg',
    'logo-vipre.svg',
    'logo-fortinet.svg',
];

const Partners = () => {
    return (
        <section className={styles.partners}>
            <h2 className={styles.partners__heading}>Our Clients Include</h2>
            <div className={styles.partners__container}>
                {partnerLogos.map((logo, index) => (
                    <div key={index} className={styles.partners__logo}>
                        <Image
                            src={`/images/partners/${logo}`}
                            alt={`${logo.replace('logo-', '').replace('.svg', '')} logo`}
                            width={100}
                            height={50}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Partners;

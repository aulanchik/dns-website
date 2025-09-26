import styles from './Progress.module.scss';
import { progress } from './data';

const Progress = () => {
    return (
        <section className={styles.progress}>
            <div className={styles.progress__row}>
                <div className={styles.progress__col}>
                    <video
                        className={styles.progress__video}
                        playsInline
                        autoPlay
                        muted
                        loop
                    >
                        <source src={progress.video.videosrc} type="video/mp4" />

                    </video>
                </div>
                <div className={styles.progress__col}>
                    <div className={styles.progress__inner}>
                        <h2 className={styles.progress__heading}>
                            {progress.title}
                        </h2>
                        <p className={styles.progress__paragraph}>
                            {progress.description}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Progress;

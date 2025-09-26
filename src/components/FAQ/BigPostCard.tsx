import Image, { StaticImageData } from "next/image";
import styles from "./FAQ.module.scss";

type PostProps = { id: string; date: string; title: string; image: string | StaticImageData; href?: string };

function BigPostCard({ post }: { post: PostProps }) {
    return (
        <article className={styles.faq__big_card}>
            < Image
                width={640}
                height={245}
                src={post.image}
                alt={post.title}
                sizes="(min-width:1024px) 640px, 100vw"
                className={styles.faq__img}
            />
            <time className={styles.faq__date}>{post.date}</time>
            <h3 className={styles.faq__title}>
                {post.title}
            </h3>
        </article >
    );
}

export default BigPostCard;

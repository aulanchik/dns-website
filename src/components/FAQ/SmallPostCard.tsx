import Image, { StaticImageData } from "next/image";
import s from "./FAQ.module.scss";

type PostProps = { id: string; date: string; title: string; image: string | StaticImageData; href?: string };

function BigPostCard({ post }: { post: PostProps }) {
    return (
        <article className={s["faq__big-card"]}>
            <Image
                width={640}
                height={245}
                src={post.image}
                alt={post.title}
                sizes="(min-width:1024px) 640px, 100vw"
                className={s["faq__img"]}
            />
            <time className={s["faq__date"]}>{post.date}</time>
            <h3 className={s["faq__title"]}>
                {post.title}
            </h3>
        </article>
    );
}

export default BigPostCard;

"use client";
import Wrapper from '@/components/Wrapper/Wrapper';
import SmallPostCard from './SmallPostCard';
import BigPostCard from './BigPostCard';
import FaqItem from "./FAQItem";
import data from "./data";
import s from "./FAQ.module.scss";

const posts = data.posts;
const faqs = data.faqs;

function Faq() {
    return (
        <section className={s["faq"]} aria-labelledby="insights-heading">
            <Wrapper>
                <div className={s["info"]}>
                    <h3 className={s["info__title"]}>The business process problem solvers.</h3>
                    <div className={s["info__pitch"]}>
                        <div className={s["info__col"]}>
                            <p className={s["info__text"]}>
                                Recognising your frustrations with your print environment, IT services, document management & communications and finding a solution to overcome them.  Recognising your frustrations with your print environment, IT services, document management & communications and finding a solution to overcome them.
                            </p>
                        </div>
                        <div className={s["info__col"]}>
                            <p className={s["info__text"]}>
                                Recognising your frustrations with your print environment, IT services, document management & communications and finding a solution to overcome them.  Recognising your frustrations with your print environment, IT services, document management & communications and finding a solution to overcome them.
                            </p>
                        </div>
                    </div>
                </div>

                <div className={s["faq__inner"]}>
                    <div className={s["faq__left"]}>
                        <h2 id="insights-heading" className={s["faq__heading"]}>
                            Insights &amp; News
                        </h2>

                        {posts[0] && <BigPostCard post={posts[0]} />}

                        <div className={s["faq__grid-sm"]}>
                            {posts.slice(1, 3).map((p) => (
                                <SmallPostCard key={p.id} post={p} />
                            ))}
                        </div>
                    </div>

                    <div className={s["faq__right"]}>
                        <h2 className={s["faq__heading"]}>FAQ’s</h2>
                        <ul className={s["faq__faq-list"]}>
                            {faqs.map((f) => (
                                <FaqItem key={f.id} faq={f} />
                            ))}
                        </ul>

                        <span className={s["faq__view-all"]}>
                            View all FAQs
                        </span>
                    </div>
                </div>
            </Wrapper>
        </section>
    );
}

export default Faq;

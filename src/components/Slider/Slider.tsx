"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, Thumbs } from "swiper/modules";
import Wrapper from "@/components/Wrapper/Wrapper";
import styles from "./Slider.module.scss";
import data from "./data";

const Slider = () => {
    return (
        <section className={styles.slider}>
            <Wrapper>
                <header className={styles.slider__header}>
                    <p className={styles.slider__slogan}>Don’t just take our word for it...</p>
                    <a className={styles.slider__link} href="#">View all Case Studies</a>
                </header>
                <Swiper
                    modules={[Keyboard, Pagination, Thumbs]}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    keyboard={{ enabled: true }}
                    autoplay
                    loop
                    className={styles.slider__swiper}
                >
                    {data.map((pic) => (
                        <SwiperSlide key={pic.id}>
                            <article className={styles.slider__article}>
                                <h4 className={styles.slider__quote}>{pic.quote}</h4>
                                <p className={styles.slider__name}>{pic.name}</p>
                                <p className={styles.slider__title}>{pic.title}</p>
                            </article>
                            <img
                                src={pic.image}
                                className={styles.slider__img}
                                alt={`Testimonial image for ${pic.name}`}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Wrapper>
        </section >
    );
};

export default Slider;

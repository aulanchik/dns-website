'use client'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Keyboard, Pagination } from 'swiper/modules'
import Wrapper from '@/components/Wrapper/Wrapper'
import data from './data'

const Slider = () => {
  return (
    <section
      id="case-studies"
      className="relative bg-[linear-gradient(to_bottom,#fff_50%,#000_50%)] py-10 md:py-[60px]"
    >
      <Wrapper>
        <header className="flex flex-col items-start gap-2 pt-10 pb-5 md:flex-row md:items-center md:justify-between md:pt-[89px] md:pb-[19px]">
          <p className="font-gilroy text-ink text-xl leading-8 font-bold md:text-[30px] md:leading-[58px]">
            Don’t just take our word for it...
          </p>
          <a
            className="font-plex text-left text-xs leading-[23px] text-black underline"
            href="#"
          >
            View all Case Studies
          </a>
        </header>
        <Swiper
          modules={[Autoplay, Keyboard, Pagination]}
          slidesPerView={1}
          pagination={{ clickable: true }}
          keyboard={{ enabled: true }}
          autoplay={{ delay: 6000, pauseOnMouseEnter: true }}
          loop
          className="rounded-[10px]"
        >
          {data.map((pic) => (
            <SwiperSlide key={pic.id}>
              <article className="absolute top-0 left-0 z-[1] flex h-full w-full flex-col bg-linear-to-r from-black/65 via-black/40 to-black/0 p-5 md:p-10 lg:px-[60px] lg:py-20">
                <h4 className="font-gilroy pb-2.5 text-base leading-normal font-bold text-white md:max-w-[80%] md:text-2xl md:leading-8 lg:max-w-[70%] lg:text-[33px] lg:leading-[41px]">
                  {pic.quote}
                </h4>
                <p className="font-plex text-xs leading-[25px] font-normal text-white">
                  {pic.name}
                </p>
                <p className="font-plex text-xs leading-[25px] font-normal text-white">
                  {pic.title}
                </p>
              </article>
              <Image
                src={pic.image}
                className="relative block h-[440px] w-full object-cover lg:h-auto"
                alt={`Testimonial image for ${pic.name}`}
                width={1255}
                height={604}
                sizes="(min-width: 1247px) 1247px, 90vw"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Wrapper>
    </section>
  )
}

export default Slider

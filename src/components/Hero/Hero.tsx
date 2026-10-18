import Image from 'next/image'
import Wrapper from '@/components/Wrapper/Wrapper'
import { data } from './data'

const Hero = () => {
  return (
    <section className="bg-midnight min-h-[742px] overflow-x-clip pb-24 lg:pb-0 bg-[url(/images/backgrounds/bg-geometry.png)] bg-contain bg-[position:100%_100%] bg-no-repeat text-white lg:h-[742px]">
      <div className="h-[140px] lg:h-[260px]" />
      <Wrapper>
        <div className="flex flex-col lg:flex-row">
          <div className="max-w-[567px] pl-5">
            <h1 className="font-gilroy mb-4 text-[2.75rem] leading-none font-bold md:text-[3.5rem]">
              <span className="mb-4 block">{data.title1}</span>
              <span className="block">{data.title2}</span>
            </h1>
            <p className="font-plex text-base leading-[30px] font-normal text-white">
              {data.description}
            </p>
          </div>
          <Image
            className="relative w-full max-w-[560px] lg:-top-[30px] lg:w-[min(45%,420px)] xl:left-[100px] xl:w-[560px]"
            src="/images/hero-img.png"
            alt="Laptop with IT services"
            width={489}
            height={410}
            priority
          />
        </div>
      </Wrapper>
    </section>
  )
}

export default Hero

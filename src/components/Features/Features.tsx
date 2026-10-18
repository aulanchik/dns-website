import Image from 'next/image'
import { features } from './data'

const Features = () => {
  return (
    <section className="bg-white px-4 py-10 text-center md:px-8 md:py-16">
      <h2 className="font-gilroy text-ink px-0 py-8 text-[28px] md:px-4 md:py-12 leading-9 font-bold min-[641px]:text-[40px] min-[641px]:leading-[48px]">
        A team of accredited experts <br /> that support you
      </h2>
      <div className="mx-auto grid max-w-[1100px] auto-rows-fr grid-cols-1 gap-8 min-[641px]:grid-cols-2 min-[1025px]:grid-cols-3 min-[1025px]:gap-16">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="flex h-full flex-col items-center justify-start p-4 text-center"
          >
            <div className="mb-4 flex h-full w-full items-center justify-center">
              <Image
                className="aspect-square h-[90px] w-[90px] object-contain"
                src={`/images/${feature.icon}`}
                alt=""
                width={50}
                height={50}
              />
            </div>
            <h3 className="font-gilroy text-ink my-2 text-xl leading-[45px] font-semibold">
              {feature.label}
            </h3>
            <p className="font-plex text-ink mx-auto max-w-[275px] text-center text-xs leading-[26px] font-normal">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features

import Image from 'next/image'
import { services } from './data'

const Services = () => {
  return (
    <section id="services" className="relative px-5 pb-8 lg:px-0 lg:pb-0">
      <div className="mx-auto -mt-20 grid max-w-[1200px] grid-cols-1 gap-4 lg:grid-cols-[repeat(4,minmax(0,284px))] lg:justify-center lg:gap-8">
        {services.map((service) => (
          <div
            className="group hover:bg-crimson flex w-full max-w-[284px] flex-col items-center justify-start justify-self-center rounded-lg bg-white p-4 text-center shadow-[0_4px_8px_rgba(0,0,0,0.25)] transition-all duration-300 ease-in-out hover:text-white min-[641px]:p-6 lg:p-8"
            key={service.title}
          >
            <Image
              src={`/images/${service.icon}`}
              alt=""
              width={50}
              height={50}
              className="m-4 w-[50px] group-hover:brightness-0 group-hover:invert"
              style={{ height: 'auto', width: 'auto' }}
            />
            <h2 className="text-neon-pink mb-4 w-full text-[1.1rem] font-semibold group-hover:text-white lg:text-xl">
              {service.title}
            </h2>
            <p className="font-plex mb-4 w-[235px] max-w-full text-xs leading-[23px] font-normal text-black group-hover:text-white">
              {service.description}
            </p>
            <a
              href={service.link}
              className="font-plex text-crimson mt-auto text-xs leading-[23px] font-normal underline group-hover:text-white"
            >
              Learn More
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services

import Image from 'next/image'

const partners = [
  'verox',
  'microsoft',
  'hp',
  '3cx',
  'vipre',
  'fortinet',
] as const

const Partners = () => {
  return (
    <section className="flex flex-col items-center gap-8 py-[89px]">
      <h2 className="font-plex text-center text-base leading-[55px] font-normal">
        Our Clients Include
      </h2>
      <div className="flex w-full flex-wrap items-center justify-center gap-16">
        {partners.map((logo) => (
          <div key={logo} className="flex flex-col items-center justify-center">
            <Image
              className="max-h-[50px] object-contain"
              src={`/images/partners/logo-${logo}.svg`}
              alt={`${logo} logo`}
              style={{ height: 'auto', width: 'auto' }}
              width={100}
              height={50}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Partners

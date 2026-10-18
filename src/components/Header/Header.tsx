import React from 'react'
import Image from 'next/image'
import { nav } from './data'
import MobileNav from './MobileNav'

const Header: React.FC = () => {
  return (
    <header className="absolute top-0 z-20 w-full py-4 lg:py-[30px]">
      <div className="relative mx-auto w-[min(100%_-_40px,1440px)] lg:w-[min(100%_-_100px,1440px)]">
        <div className="flex">
          <div className="h-[62px] w-[100px] lg:h-[82px] lg:w-[133px]">
            <Image
              src="/images/dns-logo.png"
              alt="DNS logo"
              width={133}
              height={82}
              className="h-auto w-full"
              priority
            />
          </div>
          <div className="font-plex min-w-0 flex-1 basis-0 hidden flex-col gap-[30px] pl-[35px] text-[13px] leading-none lg:flex">
            <nav className="flex items-center gap-8 text-sm opacity-80">
              {nav.top.map((item) => (
                <a
                  key={item.id}
                  href={item.link}
                  className="text-white hover:underline"
                >
                  {item.name}
                </a>
              ))}
            </nav>
            <nav className="flex items-center gap-12 font-semibold">
              {nav.bottom.map((item) => (
                <a
                  key={item.id}
                  href={item.link}
                  className="text-white hover:underline"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
          <div className="hidden flex-none flex-col items-end gap-6 text-right lg:flex">
            <span className="font-plex text-[13px] leading-none font-medium whitespace-nowrap text-white">
              Request support
            </span>
            <a
              className="font-plex text-blurple flex h-12 w-[165px] items-center justify-center rounded-[5px] bg-white text-lg font-bold whitespace-nowrap no-underline hover:opacity-90"
              href="#contact"
            >
              Call Me Back
            </a>
          </div>
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

export default Header

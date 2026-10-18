'use client'
import { useState } from 'react'
import { nav } from './data'

const links = [...nav.bottom, ...nav.top]

const MobileNav = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="ml-auto lg:hidden">
      <button
        type="button"
        className="flex h-12 w-12 cursor-pointer flex-col items-center justify-center gap-[5px] rounded-[5px] border border-white/40 bg-transparent"
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? 'Close menu' : 'Open menu'}
        onClick={() => setOpen((v) => !v)}
      >
        <span
          className={`h-0.5 w-6 bg-white transition-transform duration-200 ${open ? 'translate-y-[7px] rotate-45' : ''}`}
        />
        <span
          className={`h-0.5 w-6 bg-white transition-opacity duration-200 ${open ? 'opacity-0' : ''}`}
        />
        <span
          className={`h-0.5 w-6 bg-white transition-transform duration-200 ${open ? '-translate-y-[7px] -rotate-45' : ''}`}
        />
      </button>

      {open && (
        <nav
          id="mobile-nav"
          className="bg-midnight absolute inset-x-0 top-full z-20 flex flex-col gap-1 px-6 pt-4 pb-6 shadow-[0_12px_24px_rgba(0,0,0,0.3)]"
        >
          {links.map((item) => (
            <a
              key={`${item.name}-${item.id}`}
              href={item.link}
              className="font-plex border-b border-white/15 py-3 text-base text-white"
              onClick={() => setOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contact"
            className="font-plex text-blurple mt-4 flex h-12 items-center justify-center rounded-[5px] bg-white text-lg font-bold"
            onClick={() => setOpen(false)}
          >
            Call Me Back
          </a>
        </nav>
      )}
    </div>
  )
}

export default MobileNav

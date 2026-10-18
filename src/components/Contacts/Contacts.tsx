'use client'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Wrapper from '@/components/Wrapper/Wrapper'

const INPUT =
  'font-plex w-full appearance-none rounded-none border border-white bg-transparent px-5 py-3 md:px-[30px] text-base leading-[30px] text-white outline-none placeholder:text-white placeholder:opacity-95 focus:border-white focus:shadow-[0_0_0_3px_rgba(255,255,255,0.2)]'
const LINK =
  'border-b border-transparent text-white/75 no-underline hover:border-white'

function Contacts() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const resetTimer = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined
  )

  useEffect(() => () => clearTimeout(resetTimer.current), [])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    e.currentTarget.reset()
    setIsSubmitted(true)

    clearTimeout(resetTimer.current)
    resetTimer.current = setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section
      id="contact"
      className="bg-hot-pink relative isolate overflow-hidden pt-[100px] text-white"
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-hot-pink bg-[url(/images/backgrounds/bg-geometry.svg)] bg-cover bg-[position:right_bottom] bg-no-repeat"
        aria-hidden
      />
      <Wrapper>
        <div className="relative grid grid-cols-1 items-start gap-[clamp(1.5rem,3vw,3rem)] min-[961px]:grid-cols-[1.2fr_1fr]">
          <div className="pt-2">
            <h2 className="font-gilroy mb-4 text-[clamp(2rem,4.2vw,3.25rem)] leading-none font-bold">
              We’re{' '}
              <span className="text-transparent [-webkit-text-stroke:2px_#fff]">
                your
              </span>{' '}
              IT Services
              <br />
              problem solvers
            </h2>
            <p className="font-plex mb-3 max-w-[56ch] py-[17px] text-base leading-[30px] font-normal text-white/75">
              Recognising your frustrations with your print environment, IT
              services, document management & communications and finding a
              solution to overcome them.
            </p>
            <p className="font-plex mb-6 font-normal text-white/75">
              Get in touch today!
            </p>
          </div>

          <form className="grid gap-[0.85rem]" onSubmit={handleSubmit}>
            <label className="block py-1.5">
              <input
                className={INPUT}
                type="text"
                name="name"
                placeholder="Name"
                aria-label="Name"
                autoComplete="name"
                required
              />
            </label>

            <label className="block py-1.5">
              <input
                className={INPUT}
                type="email"
                name="email"
                placeholder="Email"
                aria-label="Email"
                autoComplete="email"
                required
              />
            </label>

            <label className="block py-1.5">
              <input
                className={INPUT}
                type="tel"
                name="telephone"
                placeholder="Telephone"
                aria-label="Telephone"
                autoComplete="tel"
              />
            </label>

            <label className="block py-1.5">
              <input
                className={INPUT}
                type="text"
                name="company"
                placeholder="Company"
                aria-label="Company"
                autoComplete="organization"
              />
            </label>

            <label className="block py-1.5">
              <textarea
                className={`${INPUT} min-h-[120px] resize-y`}
                name="message"
                placeholder="I need help with..."
                aria-label="I need help with..."
                rows={4}
              />
            </label>

            <div className="mt-1 flex flex-wrap items-center justify-end gap-5">
              <p
                className="font-plex m-0 text-sm leading-[1.4] text-white"
                role="status"
              >
                {isSubmitted && 'Thank you! We will get back to you soon.'}
              </p>
              <button
                className="font-plex text-midnight h-[55px] w-[200px] cursor-pointer border-none bg-white text-base font-normal transition-[transform,opacity] duration-200 hover:opacity-95 active:translate-y-px disabled:cursor-default disabled:opacity-70"
                type="submit"
                disabled={isSubmitted}
              >
                {isSubmitted ? 'Submitted!' : 'Submit now'}
              </button>
            </div>
          </form>
        </div>

        <footer className="relative mt-[clamp(2.5rem,6vw,4rem)] grid grid-cols-2 gap-5 p-4 min-[641px]:grid-cols-3 min-[1101px]:grid-cols-6">
          <div className="min-w-0 break-words">
            <Image
              className="mt-1.5 h-[57px] w-[94px] [image-rendering:crisp-edges]"
              src="/images/dns-logo.png"
              alt="DNS logo"
              width={94}
              height={57}
            />
          </div>

          <div className="min-w-0 break-words">
            <h3 className="mb-2 font-plex text-xs leading-[26px] font-normal no-underline">
              Contact us
            </h3>
            <ul className="m-0 grid grid-cols-1 list-none gap-[0.35rem] p-0 font-plex text-xs leading-[26px] font-normal">
              <li>
                E{' '}
                <a className={LINK} href="mailto:info@dnslimited.co.uk">
                  info@
                  <wbr />
                  dnslimited.co.uk
                </a>
              </li>
              <li>
                T{' '}
                <a className={LINK} href="tel:+448450340895">
                  0845 034 0895
                </a>
              </li>
            </ul>
          </div>

          <div className="min-w-0 break-words">
            <h3 className="mb-2 font-plex text-xs leading-[26px] font-normal no-underline">
              Address
            </h3>
            <address className="font-plex m-0 text-xs leading-[26px] font-normal text-white/75 not-italic">
              Unit 9<br />
              Royal Scot Road,
              <br /> Pride Park, Derby
              <br /> DE24 8AJ
            </address>
          </div>

          <div className="min-w-0 break-words">
            <h3 className="mb-2 font-plex text-xs leading-[26px] font-normal no-underline">
              Opening hours
            </h3>
            <p className="font-plex m-0 text-xs leading-[26px] font-normal text-white/75">
              Mon – Fri:
              <br />9 am – 5:30 pm
            </p>
          </div>

          <div className="min-w-0 break-words">
            <h3 className="mb-2 font-plex text-xs leading-[26px] font-normal no-underline">
              About us
            </h3>
            <ul className="m-0 grid grid-cols-1 list-none gap-[0.35rem] p-0 font-plex text-xs leading-[26px] font-normal">
              <li>
                <a className={LINK} href="#">
                  CSR
                </a>
              </li>
              <li>
                <a className={LINK} href="#">
                  Environment & Sustainability
                </a>
              </li>
              <li>
                <a className={LINK} href="#">
                  Meet the team
                </a>
              </li>
            </ul>
          </div>

          <div className="min-w-0 break-words">
            <h3 className="mb-2 font-plex text-xs leading-[26px] font-normal no-underline">
              Services
            </h3>
            <ul className="m-0 grid grid-cols-1 list-none gap-[0.35rem] p-0 font-plex text-xs leading-[26px] font-normal">
              <li>
                <a className={LINK} href="#">
                  IT Services
                </a>
              </li>
              <li>
                <a className={LINK} href="#">
                  Communications
                </a>
              </li>
              <li>
                <a className={LINK} href="#">
                  Managed Print Services
                </a>
              </li>
              <li>
                <a className={LINK} href="#">
                  Document Management
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </Wrapper>

      <div className="relative border-t border-white/35 px-5 py-4 text-white/75">
        <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between gap-x-4 lg:px-[30px]">
          <div className="flex shrink-0 flex-col">
            <span className="font-plex text-[11px] leading-[20px] font-normal text-white">
              Design by Alt
            </span>
            <span className="font-plex text-[11px] leading-[20px] font-normal text-white">
              Built by Artyom Ulanchik
            </span>
          </div>

          <span className="font-plex min-w-0 text-right text-[11px] leading-[20px] font-normal text-white">
            © Document Network Services Ltd {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </section>
  )
}

export default Contacts

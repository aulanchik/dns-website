'use client'
import { useId, useState } from 'react'
import PlusIcon from './PlusIcon'

type FaqProps = { id: string; question: string; answer?: string; href?: string }

function FaqItem({ faq }: { faq: FaqProps }) {
  const [open, setOpen] = useState(false)
  const panelId = useId()

  return (
    <li className="my-1.5 border-b border-white/12">
      <button
        type="button"
        className="flex w-full cursor-pointer items-center justify-between gap-3 border-0 bg-transparent py-[18px] pr-2 pl-0 text-left text-lg leading-[1.3] text-inherit no-underline"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
      >
        <span>{faq.question}</span>
        <PlusIcon rotated={open} />
      </button>
      {faq.answer && (
        <div
          id={panelId}
          hidden={!open}
          className="-mt-1.5 mb-3.5 pr-7 text-[15px] leading-[1.6] opacity-90"
          role="region"
          aria-label={faq.question}
        >
          {faq.answer}
        </div>
      )}
    </li>
  )
}

export default FaqItem

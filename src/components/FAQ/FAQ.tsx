import Wrapper from '@/components/Wrapper/Wrapper'
import SmallPostCard from './SmallPostCard'
import BigPostCard from './BigPostCard'
import FaqItem from './FAQItem'
import data from './data'

const posts = data.posts
const faqs = data.faqs

const pitch =
  'Recognising your frustrations with your print environment, IT services, document management & communications and finding a solution to overcome them.  Recognising your frustrations with your print environment, IT services, document management & communications and finding a solution to overcome them.'

const headingClass =
  'mb-[18px] text-[clamp(24px,2.2vw,32px)] font-extrabold tracking-[0.2px]'

function Faq() {
  return (
    <section
      id="insights"
      className="relative overflow-hidden bg-black pb-20 text-white lg:pb-[200px]"
      aria-labelledby="insights-heading"
    >
      <div className="relative">
        <div
          aria-hidden
          className="pointer-events-none absolute top-full right-0 h-[667px] w-[587px] bg-[url(/images/backgrounds/bg-geometry.svg)] bg-contain bg-[position:right_top] bg-no-repeat lg:-mt-[300px] lg:h-[1334px] lg:w-[1174px]"
        />
        <Wrapper>
          <div className="relative mx-auto w-[1100px] max-w-full py-12 lg:py-[100px]">
            <h2 className="font-gilroy text-center text-[28px] leading-9 font-bold md:text-[40px] md:leading-[58px]">
              The business process problem solvers.
            </h2>
            <div className="flex items-start gap-[78px] max-[1024px]:flex-col max-[1024px]:gap-0">
              {[0, 1].map((i) => (
                <div
                  key={i}
                  className="pt-5 min-[1025px]:min-w-[470px] min-[1025px]:pt-7"
                >
                  <p className="font-plex text-base leading-[30px] font-normal text-white">
                    {pitch}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Wrapper>
      </div>

      <Wrapper>
        <div className="relative grid grid-cols-1 gap-[clamp(24px,4vw,40px)] min-[1024px]:grid-cols-[1.1fr_1fr] min-[1024px]:items-start">
          <div className="min-w-0">
            <h2 id="insights-heading" className={headingClass}>
              Insights &amp; News
            </h2>

            {posts[0] && <BigPostCard post={posts[0]} />}

            <div className="grid grid-cols-1 gap-[18px] min-[640px]:grid-cols-2">
              {posts.slice(1, 3).map((p) => (
                <SmallPostCard key={p.id} post={p} />
              ))}
            </div>
          </div>

          <div className="min-w-0">
            <h2 className={headingClass}>FAQs</h2>
            <ul className="m-0 list-none border-t border-white/12 p-0">
              {faqs.map((f) => (
                <FaqItem key={f.id} faq={f} />
              ))}
            </ul>

            <a
              href="#"
              className="mt-3.5 inline-block text-sm text-[#cbd5ff] underline-offset-[3px] hover:underline"
            >
              View all FAQs
            </a>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default Faq

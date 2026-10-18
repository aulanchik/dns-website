import Head from '@/components/Header/Header'
import Hero from '@/components/Hero/Hero'
import Partners from '@/components/Partners/Partners'
import Services from '@/components/Services/Services'
import Progress from '@/components/Progress/Progress'
import Slider from '@/components/Slider/Slider'

export default function Home() {
  return (
    <>
      <Head />
      <main id="main">
        <Hero />
        <Services />
        <Partners />
        <Progress />
        <Slider />
      </main>
    </>
  )
}

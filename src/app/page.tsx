import Head from '@/components/Header/Header'
import Hero from '@/components/Hero/Hero'
import Partners from '@/components/Partners/Partners'
import Services from '@/components/Services/Services'
import Progress from '@/components/Progress/Progress'
import Slider from '@/components/Slider/Slider'
import FAQ from '@/components/FAQ/FAQ'
import Features from '@/components/Features/Features'
import Contacts from '@/components/Contacts/Contacts'

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
        <FAQ />
        <Features />
        <Contacts />
      </main>
    </>
  )
}

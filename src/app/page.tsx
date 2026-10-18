import Head from '@/components/Header/Header'
import Hero from '@/components/Hero/Hero'
import Partners from '@/components/Partners/Partners'
import Services from '@/components/Services/Services'

export default function Home() {
  return (
    <>
      <Head />
      <main id="main">
        <Hero />
        <Services />
        <Partners />
      </main>
    </>
  )
}

import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import Services from '@/components/Services/Services';
import Partners from '@/components/Partners/Partners';
import Progress from '@/components/Progress/Progress';
import Slider from '@/components/Slider/Slider';
import FAQ from '@/components/FAQ/FAQ';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Partners />
      <Progress />
      <Slider />
      <FAQ />
    </>
  )
}

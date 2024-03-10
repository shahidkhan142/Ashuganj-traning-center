import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Hero from '@/components/home/Hero'
import Features from '@/components/home/Features'
import Testimonials from '@/components/home/Testimonials'
import GenerationStep from '@/components/home/GenerationStep'
import FeatureSection from '@/components/home/FeatureSection'
import PageMetaTags from '@/containers/PageMetaTags'
import Pricing from '@/components/home/Pricing'
import CTA2 from '@/components/home/CTA2'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <PageMetaTags title="Ashuganj" description={""} url="" />
      <div itemScope >
        <meta itemProp="name" content="Traning Center" />
      </div>
      <Hero />
      <GenerationStep />
      <FeatureSection showHeading={true} title="Qualified Traniner" />

      <FeatureSection title="Safety proctools maintained" leftText="1" />

      <FeatureSection title="Help you get work after completing the course" />

      <Testimonials />
      <Pricing />
      <CTA2 />
    </>
  )
}

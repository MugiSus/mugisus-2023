import Image from 'next/image'
import { Inter, Poppins } from 'next/font/google'
import { Heading, Subheading } from '../components/heading'
import CreationsSection from '@/components/sections/index/creations-section'

export default function Home() {
  return (
    <main className='my-24 max-w-screen-2xl mx-auto px-12 sm:px-24'>
      <Heading title="MugiSus'" subtitle="Portfolio" />
      <CreationsSection />
      <section className="mt-12">
        <Subheading title="MugiSus" subtitle="Minato Masayuki" />
      </section>
      <section className="mt-12">
        <Subheading title="Articles" subtitle="Coming soon, i bet" />
      </section>
      <section className="mt-12">
        <Subheading title="Careers" subtitle="History & Awards" />
      </section>
    </main>
  )
}

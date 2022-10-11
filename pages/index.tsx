import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'


const Home: NextPage = () => {
  return (
    <div className='bg-gray-700 text-white h-screen snap-mandatory snap-y overflow-scroll z-0'>
      <Head>
        <title>Passionate Developer</title>
      </Head>
      <main>
        {/* Header */}
        <Header />
        {/* Hero  */}
        <section id='hero' className='snap-center'>
          <Hero />

        </section>

        {/* About  */}

        {/* Experience  */}

        {/* Skills  */}

        {/* Projects  */}

        {/* Contact Me  */}

      </main>
    </div>
  )
}

export default Home

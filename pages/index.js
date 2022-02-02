import Head from 'next/head'
import Image from 'next/image'
import HomeSection from '../components/HomeSection'
import HomeSubSection from '../components/HomeSubSection'
import Navbar from '../components/Navbar'
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="bg-gradient-to-tr from-[#0B0917] to-[#162731] h-screen snap-y w-full snap-proximity scroll-smooth overflow-y-scroll">
      <Head>
        <title>Adazolhub</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <HomeSection/>
      <HomeSubSection/>
    </div>
  )
}

import React from 'react'
import styles from './page.module.css'
import Navbar from '@/components/navbar/Navbar'
import About from '@/components/about/About'
import Reasons from '@/components/reasons/Reasons'
import LatestArticles from '@/components/latestArticles/LatestArticles'
import Footer from '@/components/footer/Footer'

const page = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <About />
      <Reasons />
      <LatestArticles />
      <Footer />
    </div>
  )
}

export default page
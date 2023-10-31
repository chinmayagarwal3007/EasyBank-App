import React from 'react'
import styles from './about.module.css'
import Image from 'next/image'
import RoundedButton from '../roundedButton/RoundedButton'


const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
          <h1>Next generation digital banking</h1>
          
          <p>Take your financial life online. Your Easybank account will be a one-stop-shop 
            for spending, saving, budgeting, investing, and much more.</p>

          <div className={styles.btn}>
          <RoundedButton />
          </div>
      </div>

      <div className={styles.img}>
        <Image src='/image-mockups.png' alt='img' width={767} height={939} className={styles.phones} /> 
      </div>
    </div>
  )
}

export default About
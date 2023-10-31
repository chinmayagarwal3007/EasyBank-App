'use client'
import React, { useState } from 'react'
import styles from './navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import RoundedButton from '../roundedButton/RoundedButton'

const Navbar = () => {

  const [open, setOpen] = useState(false)

  return (
    <div className={styles.container}>
        <div className={styles.image}>
            <Image src='/logo.png' alt='logo' width={139} height ={20} className={styles.logo}/>
        </div>

        <div className={styles.links}>
            <div className={styles.underline}><Link href='/' className={` ${styles.home} ${styles.link} `}>Home</Link></div>
            <div className={styles.underline}><Link href='/' className={` ${styles.about} ${styles.link} `}>About</Link></div>
            <div className={styles.underline}><Link href='/' className={` ${styles.contact} ${styles.link} `}>Contact</Link></div>
            <div className={styles.underline}><Link href='/' className={` ${styles.blog} ${styles.link} `}>Blog</Link></div>
            <div className={styles.underline}><Link href='/' className={` ${styles.careers} ${styles.link} `}>Careers</Link></div>
        </div>

        <div className={styles.btn}>
        <RoundedButton />
        </div>

        <div className={styles.hamburger} onClick={() => setOpen(!open)}>
          <Image src = '/icon-hamburger.png' alt='hamburger' width={10} height={10} /> 
        </div>

        {
          open &&
          <div className={styles.responsiveMenu}>
            <div ><Link href='/' className={` ${styles.home} ${styles.link} ${styles.responsiveLink}`}>Home</Link></div>
            <div ><Link href='/' className={` ${styles.about} ${styles.link} ${styles.responsiveLink}`}>About</Link></div>
            <div ><Link href='/' className={` ${styles.contact} ${styles.link} ${styles.responsiveLink}`}>Contact</Link></div>
            <div ><Link href='/' className={` ${styles.blog} ${styles.link} ${styles.responsiveLink}`}>Blog</Link></div>
            <div ><Link href='/' className={` ${styles.careers} ${styles.link} ${styles.responsiveLink}`}>Careers</Link></div>
          </div>
        }

    </div>
  )
}

export default Navbar
import React from 'react'
import Image from 'next/image'
import styles from './card.module.css'

const Card = ({ data }) => {
  return (
    <div className={styles.container}>
      <Image src={`/${data[0]}`} alt="img" width={72} height={72} />

      <h1>{data[1]}</h1>
      
      <p>{data[2]}</p>
    </div>
  )
}

export default Card
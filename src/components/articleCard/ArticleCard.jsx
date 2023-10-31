import React from 'react'
import Image from 'next/image'
import styles from './articleCard.module.css'

const ArticleCard = ({ data }) => {
  return (
    <div className={styles.container}>
      <Image src={`/${data[0]}`} alt="img" width={300} height={200} />

      <p >{data[1]}</p>

      <h1>{data[2]}</h1>
      
      <p className={styles.stuff}>{data[3]}</p>
    </div>
  )
}

export default ArticleCard
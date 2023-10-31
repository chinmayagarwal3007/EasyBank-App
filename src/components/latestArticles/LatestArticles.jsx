import React from 'react'
import styles from './latestArticles.module.css'
import ArticleCard from '@/components/articleCard/ArticleCard'
import {dataArray2} from '@/app/data';

const LatestArticles = () => {
  return (
  <div className={styles.container}>
      <div className={styles.header}>
      <h1>Latest Articles</h1>
    </div>

    <div className={styles.content}>
      {dataArray2.map((innerArray, index) => (
        <ArticleCard key={index} data={innerArray} />
      ))}
    </div>
  </div>
  )
}

export default LatestArticles
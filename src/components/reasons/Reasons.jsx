import React from "react";
import styles from "./reasons.module.css";
import Card from '@/components/card/Card'
import {dataArray} from '@/app/data';

const Reasons = () => {
  

  return <div className={styles.container}>
    <div className={styles.header}>
      <h1>Why choose Easybank?</h1>
      <p>We leverage Open Banking to turn your bank account into your financial hub. Control 
        your finances like never before.</p>
    </div>

    <div className={styles.content}>
      {dataArray.map((innerArray, index) => (
        <Card key={index} data={innerArray} />
      ))}
    </div>
  </div>;
};

export default Reasons;

import React from 'react';
import styles from './InteresesItem.module.css';

const InteresesItem = ({ title, company}) => {
  return (
    <div className={styles.container}>
      <div className={styles.leftColumn}>
        <div className={styles.sticky}>
          <span className={styles.bullet}>&bull;</span>
          <h3 className={styles.title}>{title}</h3>
          <h4 className={styles.company}>{company}</h4>
        </div>
      </div>
    </div>
  );
};

export default InteresesItem;

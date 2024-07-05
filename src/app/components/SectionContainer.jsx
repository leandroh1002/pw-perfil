// Section.js

import styles from './SectionContainer.module.css';

export default function SectionContainer ({ id, className, children }) {
  return (
    <section
      id={id}
      data-section={id}
      className={`${styles.section} ${className}`}
    >
      {children}
    </section>
  );
};



import React from 'react';
import styles from './Hero.module.css';
import Image from 'next/image';

export default function Hero () {
  const personalImageAlt = "Leandro Miguel";

  return (
    <div className={styles.heroContainer}>
      <div className={`${styles.imageContainer}`}>
        <Image
          className={`${styles.roundedFull} `}
          src="/me.png"
          alt={personalImageAlt}
          width={64}
          height={64}
        />
      </div>
      <h1 className={`${styles.name}`}>
        Hey, soy Leandro
      </h1>
      <p className={`${styles.description}`}>
        <strong className={`${styles.strongDescription}`}>Tecnico en Desarrollo y Calidad de Software</strong> de Tucumán, Argentina. Especializado en el desarrollo de aplicaciones web únicas.
      </p>
    </div>
  );
};

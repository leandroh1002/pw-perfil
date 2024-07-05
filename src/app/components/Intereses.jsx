import React from 'react';
import styles from './Intereses.module.css';
import InteresesItem from './InteresesItem';


const EXPERIENCES = [
  {
    title: "Estudiante Universitario",
    company: "Universidad del Norte Santo Tomas de Aquino",
  },
  {
    title: "Tecnico en Informatica Profesional y Personal",
    company: "Colegio N724 (Trelew - Chubut)",
  },
  {
    title: "Jugador casual de PC",
    company: "League of Legends, Call of Duty Warzone",
  },
];

const Intereses = () => {
  return (
    <ol className={styles.container}>
      {EXPERIENCES.map((experience, index) => (
        <li key={index}>
          <InteresesItem {...experience} />
        </li>
      ))}
    </ol>
  );
};

export default Intereses;

import styles from "./page.module.css";
import SectionContainer from "./components/SectionContainer";
import Hero from "./components/Hero";
import Icon from "./icons/Icon";
import Intereses from "./components/Intereses";
import FormAddCompanies from "./components/Form";

export default function Home() {
  return (
    <main className={styles.main}>
      <SectionContainer>
        <Hero/>
      </SectionContainer>

      <SectionContainer>
        <h2 className={styles.algo}>
        <Icon /> Intereses
        </h2>
        <Intereses/>
      </SectionContainer>

      <SectionContainer>
        <h2 className={styles.algo}>
        <Icon /> Contacto
        </h2>
        <FormAddCompanies/>
      </SectionContainer>
    </main>
  );
}

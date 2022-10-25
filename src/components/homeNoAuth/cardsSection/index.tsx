import { Container } from "reactstrap";
import styles from "./styles.module.scss";

const CardsSection = function () {
  return (
    <>
      <p className={styles.sectionTitle}>O QUE VOCÊ VAI ACESSAR</p>
      <Container className="d-flex flex-wrap justify-content-center gap-4 pb-5">
        <div className={styles.card1}>
          <p className={styles.cardTitle}>Fundamentos do desenvolvedor</p>
          <p className={styles.cardDescription}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
            minima quod possimus, ad dignissimos a qui placeat saepe voluptas
            et, rerum repellendus repudiandae distinctio, obcaecati
            exercitationem excepturi accusantium cumque voluptate!
          </p>
        </div>
        <div className={styles.card2}>
          <p className={styles.cardTitle}>Front-end</p>
          <p className={styles.cardDescription}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est,
            cumque cum, sapiente fuga distinctio velit vel architecto
            praesentium officiis dolorem at nemo quod, impedit rerum autem natus
            sint pariatur quisquam.
          </p>
        </div>
        <div className={styles.card3}>
          <p className={styles.cardTitle}>Back-end</p>
          <p className={styles.cardDescription}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex libero
            suscipit repellendus officia veniam, eaque iusto nihil animi. Enim
            quam, amet nostrum at harum tempora reiciendis magnam vitae commodi
            ut?
          </p>
        </div>
        <div className={styles.card4}>
          <p className={styles.cardTitle}>Banco de dados</p>
          <p className={styles.cardDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
            aliquid consequatur. Voluptatum, ab eum velit commodi accusamus
            corrupti! Ipsam quam molestiae laboriosam iste quos velit
            praesentium tenetur veniam facilis aliquam.
          </p>
        </div>
        <div className={styles.card5}>
          <p className={styles.cardTitle}>Nuvem</p>
          <p className={styles.cardDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            corrupti ea perferendis doloribus! Earum laboriosam sit, est a
            libero quae mollitia sint eos quo explicabo quis assumenda
            repudiandae commodi! Facilis.
          </p>
        </div>
        <div className={styles.card6}>
          <p className={styles.cardTitle}>CARREIRA</p>
          <p className={styles.cardDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
            accusamus adipisci! Ad explicabo quaerat laudantium ex ullam
            veritatis, libero ratione nostrum ea dolore quod tempore molestias
            amet. Sed, ducimus nulla.
          </p>
        </div>
      </Container>
    </>
  );
};

export default CardsSection;

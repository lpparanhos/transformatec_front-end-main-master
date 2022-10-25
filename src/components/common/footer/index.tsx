import { Container } from "reactstrap";
import styles from "./styles.module.scss"


const Footer = function () {
    return<>
    <Container className={styles.footer}>
      <img src="/logoTransformatec.svg" alt="logoFooter"  className={styles.footerLogo}/>
      <a href="https://www.linkedin.com/in/leandroparanhos/" target={"blank"} className={styles.footerLink}>Linkedin</a>
    </Container>
    </>;
};

export default Footer;
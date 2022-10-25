import Head from "next/head";
import { useState } from "react";
import { Button, Col, Container, Row } from "reactstrap";
import Footer from "../src/components/common/footer";
import HeaderAuth from "../src/components/common/headerAuth";
import PasswordForm from "../src/components/profile/password";
import UserForm from "../src/components/profile/user";
import styles from "../styles/profile.module.scss";

const UserInfo = function () {

  const [form, setForm] = useState("userForm");






  return (
    <>
      <Head>
        <title>Transformatec - Meus Dados</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      </Head>
      <main>
        <div className={styles.header}>
          <HeaderAuth />
        </div>
        <Container className="py-5">
          <p className={styles.title}>Minha conta</p>
          <Row className="pt-3 pb-5">
            <Col md={4} className={styles.btnColumn}>

              <Button className={styles.renderForm}
                style={{ color: form === "userForm" ? "#ff0044" : "white" }}
                onClick={() => { setForm("userForm") }}>DADOS PESSOAIS</Button>

              <Button
                outline
                className={styles.renderForm}
                style={{ color: form === "passwordForm" ? "#ff0044" : "white" }}
                onClick={() => { setForm("passwordForm"); }}>SENHA</Button>
            </Col>
            <Col>
              {form === "userForm" ? <UserForm/> : <PasswordForm/>}
            </Col>
          </Row>

        </Container>
        <div className={styles.footer}>
          <Footer />
        </div>
      </main>
    </>
  );
};

export default UserInfo;
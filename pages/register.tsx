import styles from "../styles/registerLogin.module.scss";
import Head from "next/head";
import HeaderGeneric from "../src/components/common/headerGeneric";

const Register = function () {
  return (
    <>
      <Head>
        <title>Unidev - Registro</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      </Head>
      <main>
        <HeaderGeneric
          logoUrl="/"
          btnUrl="/login"
          btnContent="Login"
        />
      </main>
    </>
  );
};

export default Register;

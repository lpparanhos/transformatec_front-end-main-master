import Head from "next/head";
import HeaderNoAuth from "../src/components/homeNoAuth/headerNoAuth";
import styles from "../styles/HomeNoAuth.module.scss";

const HomeNoAuth = () => {
  return (
    <>
      <Head>
        <title>Uni(dev)</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        <meta property="og:title" content="Uni(dev)" key="title" />
        <meta
          name="description"
          content="O melhor conteúdo de programação você encontra aqui, de uma forma simples e fácil!"
        />
      </Head>

      <main>
        <HeaderNoAuth/>
      </main>
    </>
  );
};

export default HomeNoAuth;

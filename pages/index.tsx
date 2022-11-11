import { GetStaticProps } from "next";
import Head from "next/head";
import { ReactNode } from "react";
import Footer from "../src/components/common/footer";
import CardsSection from "../src/components/homeNoAuth/cardSection";
import HeaderNoAuth from "../src/components/homeNoAuth/headerNoAuth";
import PresentationSection from "../src/components/homeNoAuth/presentationSection";
import SlideSection from "../src/components/homeNoAuth/slideSection";
import courseService, { CourseType } from "../src/services/courseService";
import styles from "../styles/HomeNoAuth.module.scss";

interface IndexPageProps {
  children?: ReactNode;
  course: CourseType[];
}

const HomeNoAuth = function ({ course }: IndexPageProps) {
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
        <div className={styles.sectionBackground}>
          <HeaderNoAuth />
          <PresentationSection />
        </div>
        <CardsSection />
        <SlideSection newestCourses={course} />
        <Footer />
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await courseService.getNewestCourses();
  return {
    props: {
      course: res.data,
    },
    revalidate: 3600 * 24,
  };
};

export default HomeNoAuth;

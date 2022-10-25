import { GetStaticProps } from "next";
import Link from "next/link";
import { ReactNode } from "react";
import { Button, Container } from "reactstrap";
import SlideComponent from "../../common/slideComponent";
import courseService, { CourseType } from "../../hooks/services/courseService";
import styles from "../headerNoAuth/styles.module.scss";

interface props {
  newestCourses: CourseType[];
}
export const getStaticProps: GetStaticProps = async () => {
    const res = await courseService.getNewestCourses();
    return {
      props: {
        course: res.data,
      },
      revalidate: 3600 * 24,
    };
  };

interface IndexPageProps {
  children?: ReactNode;
  course: CourseType[];
};

const SlideSection = function ({ newestCourses }: props) {
  return (
    <>
      <Container fluid>
        <p className={styles.sectionTitle}>AULAS JÁ DISPONÍVEIS</p>
        <SlideComponent course={newestCourses} />
        <Link href="/register">
          <Button outline color="light" className={styles.slideSectionBtn}>
            Se cadastre para acessar!
          </Button>
        </Link>
      </Container>
    </>
  );
};

export default SlideSection;

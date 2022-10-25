import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { CourseType } from "../hooks/services/courseService";
import SlideCard from "./slideCard/slideCard";

interface props {
  course: CourseType[];
}

const SlideComponent = function ({ course }: props) {
  return (
    <>
      <div>
        <Splide
          options={{
            type: "loop",
            perPage: 4,
            perMove: 1,
            pagination: false,
          }}
        >
          
        </Splide>
      </div>
    </>
  );
};

export default SlideComponent;

import CourseItem from "@/components/CourseItem";
import SectionHeader from "@/components/SectionHeader";
import { getAllCourses } from "@/prisma/courses";

const CoursePage = ({ courses }) => {
  return (
    <div className="wrapper py-10">
      <SectionHeader
        span="Courses"
        h2="Browse all courses"
        p="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, totam
          architecto. Quod delectus quisquam iure eum, perspiciatis ducimus"
      />

      <div className="mt-10 container flex flex-wrap gap-10">
        {courses.map((course) => (
          <CourseItem key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CoursePage;

export const getServerSideProps = async () => {
  const courses = await getAllCourses();

  const updatedCourses = courses.map((course) => ({
    ...course,
    updatedAt: course.updatedAt.toString(),
    createdAt: course.createdAt.toString(),
  }));

  return {
    props: {
      courses: updatedCourses,
    },
  };
};

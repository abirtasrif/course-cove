import Image from "next/image";

const CourseItem = ({ course }) => {
  return (
    <div>
      <Image src={course.cover} alt={course.title} width={640} height={360} />
    </div>
  );
};

export default CourseItem;

import { CldImage } from "next-cloudinary";

const CourseItem = ({ course }) => {
  return (
    <div>
      <CldImage
        src={course.cover}
        alt={course.title}
        width={640}
        height={360}
        crop="fill"
        gravity="auto"
        sizes="50w"
        priority
      />
    </div>
  );
};

export default CourseItem;

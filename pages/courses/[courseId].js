import { getSingleCourse } from "@/prisma/courses";
import { currencyConverter } from "@/utils/currencyConverter";
import { useSession } from "next-auth/react";
import { CldImage } from "next-cloudinary";
import { useRouter } from "next/router";

const CourseDetails = ({ course }) => {
  const { data: session } = useSession();
  const router = useRouter();

  const handleEnroll = () => {
    if (session) {
      router.push(`/checkout/${course.id}`);
    } else {
      router.push(`/users/login?destination=/checkout/${course.id}`);
    }
  };
  return (
    <div className="wrapper my-10 min-h-screen">
      <div className="w-full">
        <CldImage
          src={course.cover}
          alt={course.title}
          width={1920}
          height={780}
          crop="fill"
          gravity="auto"
          sizes="50w"
          priority
          className="overflow-hidden"
        />
      </div>

      <div className="lg:mt-10 grid lg:grid-cols-2 lg:gap-10 space-y-2 lg:space-y-0">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold">{course.title}</h2>
          <p>
            <span className="font-semibold mr-1">Instructor:</span>
            {course.instructor}
          </p>
          <p>
            <span className="font-semibold mr-1">Course Description:</span>
            {course.description}
          </p>
          <p>
            <span className="font-semibold mr-1">Entrolled Students:</span>
            {course.students}
          </p>
        </div>

        <div className="space-y-2">
          <p>
            <span className="font-semibold mr-1">Course Duration:</span>
            {course.duration}
          </p>
          <p>
            <span className="font-semibold">Rating:</span> {course.rating}
          </p>
          <p className="text-3xl font-semibold">
            Price: {currencyConverter(course.price)}
          </p>

          <button
            onClick={handleEnroll}
            className="bg-slate-950 text-green-100 py-3 rounded-lg w-full hover:bg-slate-800 hover:text-green-300 duration-300"
          >
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;

export const getServerSideProps = async ({ query }) => {
  const course = await getSingleCourse(query.courseId);

  const updatedCourse = {
    ...course,
    updatedAt: course.updatedAt.toString(),
    createdAt: course.createdAt.toString(),
  };

  return {
    props: {
      course: updatedCourse,
    },
  };
};

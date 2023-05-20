import { CldImage } from "next-cloudinary";
import { AiOutlineStar } from "react-icons/ai";
import { currencyConverter } from "@/utils/currencyConverter";
import Button from "./Button";

const CourseItem = ({ course }) => {
  return (
    <div className=" w-full lg:w-[25rem] xl:w-[30rem] shadow-md rounded-md overflow-hidden mx-auto">
      <div className="w-full h-80 overflow-hidden mx-auto">
        <CldImage
          src={course.cover}
          alt={course.title}
          width={640}
          height={400}
          crop="fill"
          gravity="auto"
          sizes="50w"
          priority
        />
      </div>

      <div className="p-5 space-y-2">
        <h3 className="text-3xl font-medium text-slate-950">{course.title}</h3>

        <p className="flex justify-between text-gray-500">
          <span>
            by
            <span className="ml-1 font-semibold text-slate-950">
              {course.instructor}
            </span>
          </span>
          <span>
            Duration:
            <span className="text-black font-semibold ml-1">
              {course.duration}
            </span>
          </span>
        </p>

        <p className="flex justify-between text-gray-500">
          <span>
            Enrolled students:
            <span className="text-slate-950 font-semibold ml-1">
              {course.students}
            </span>
          </span>
          <span className="flex items-center gap-1 text-green-950">
            <AiOutlineStar />
            <span className="font-semibold">{course.rating}</span>
          </span>
        </p>

        <p className="text-gray-500">
          {course.description.substring(0, 100)}...
        </p>

        <div className="flex justify-between items-center">
          <p className="text-lg font-semibold">
            {currencyConverter(course.price)}
          </p>
          <Button href={`/courses/${course.id}`} placeholder="View Details" />
        </div>
      </div>
    </div>
  );
};

export default CourseItem;

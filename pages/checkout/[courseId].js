import SectionHeader from "@/components/SectionHeader";
import { getSingleCourse } from "@/prisma/courses";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const Checkout = ({ course }) => {
  const { data: session } = useSession();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    courseTitle: course.title,
    price: course.price,
  });

  useEffect(() => {
    if (session) {
      setFormData((prev) => ({
        ...prev,
        name: session.user.name,
        email: session.user.email,
      }));
    }
  }, [session]);

  const handleCheckout = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="wrapper py-10 min-h-screen">
      <SectionHeader
        span={"Checkout"}
        h2={"Please provide the details"}
        p={"Fill out this form to continue cheeckout"}
      />
      <div className="flex justify-center">
        <form
          onSubmit={handleCheckout}
          className="flex flex-col gap-5 mt-10 w-full lg:w-[35rem]"
        >
          <div className="form-control flex flex-col gap-2">
            <label htmlFor="name" className="cursor-pointer">
              Name:
            </label>
            <input
              className="outline-none border py-3 px-4 rounded-lg focus:border-green-700 duration-300"
              type="text"
              id="name"
              placeholder="Abir"
              readOnly
              value={formData.name}
            />
          </div>
          <div className="form-control flex flex-col gap-2">
            <label htmlFor="email" className="cursor-pointer">
              Email:
            </label>
            <input
              className="outline-none border py-3 px-4 rounded-lg focus:border-green-700 duration-300"
              type="email"
              id="email"
              placeholder="contact@abirtasrif.com"
              readOnly
              value={formData.email}
            />
          </div>
          <div className="form-control flex flex-col gap-2">
            <label htmlFor="mobile" className="cursor-pointer">
              Mobile:
            </label>
            <input
              className="outline-none border py-3 px-4 rounded-lg focus:border-green-700 duration-300"
              type="tel"
              id="mobile"
              placeholder="+8801711223344"
              value={formData.mobile}
              onChange={(e) =>
                setFormData({ ...formData, mobile: e.target.value })
              }
            />
          </div>
          <div className="form-control flex flex-col gap-2">
            <label htmlFor="address" className="cursor-pointer">
              Address:
            </label>
            <input
              className="outline-none border py-3 px-4 rounded-lg focus:border-green-700 duration-300"
              type="text"
              id="address"
              placeholder="123/5 ABC Street, NY"
              value={formData.address}
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              }
            />
          </div>
          <div className="form-control flex flex-col gap-2">
            <label htmlFor="courseTitle" className="cursor-pointer">
              Course Title:
            </label>
            <input
              className="outline-none border py-3 px-4 rounded-lg focus:border-green-700 duration-300"
              type="text"
              id="courseTitle"
              placeholder="Advanced Javascript 2023"
              value={formData.courseTitle}
              readOnly
            />
          </div>
          <div className="form-control flex flex-col gap-2">
            <label htmlFor="price" className="cursor-pointer">
              Course Price (BDT):
            </label>
            <input
              className="outline-none border py-3 px-4 rounded-lg focus:border-green-700 duration-300"
              type="number"
              id="price"
              placeholder="100"
              value={formData.price}
              readOnly
            />
          </div>
          <button
            type="submit"
            role="link"
            className="bg-slate-950 py-4 rounded-lg text-green-50 hover:bg-slate-700 hover:text-green-200 uppercase duration-300"
          >
            Proceed to checkout
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;

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

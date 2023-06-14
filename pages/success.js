import Button from "@/components/Button";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { AiFillCheckCircle } from "react-icons/ai";

const SuccessPage = ({ session }) => {
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.replace("/users/login");
    }
  }, [router, session]);

  if (!session) {
    return null;
  }

  return (
    <div className="wrapper py-10 min-h-screen flex flex-col items-center gap-7 mt-10">
      <div>
        <h2 className="text-3xl flex items-center gap">
          <span>
            <AiFillCheckCircle className="text-green-500" />
          </span>
          You&apos;ve enrolled successfully
        </h2>
      </div>
      <Button href="/orders" placeholder="Go to your orders" />
    </div>
  );
};

export default SuccessPage;

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/users/login",
        permanent: "true",
      },
    };
  }

  return {
    props: {
      session,
    },
  };
};

import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const OrdersPage = ({ session }) => {
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.replace("/users/login");
    }
  }, [router, session]);

  if (!session) {
    return null;
  }

  return <div>OrdersPage</div>;
};

export default OrdersPage;

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

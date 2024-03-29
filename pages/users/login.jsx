import SectionHeader from "@/components/SectionHeader";
import { FcGoogle } from "react-icons/fc";
import { signIn, getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const LoginPage = ({ session }) => {
  const router = useRouter();

  const loginWithGoogle = async () => {
    try {
      await signIn("google");
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    if (session) {
      const destination = router.query.destination || "/users/profile";

      router.replace(destination);
    }
  }, [router, session]);

  if (session) {
    return null;
  }

  if (!session) {
    return (
      <div className="wrapper py-10 min-h-screen">
        <SectionHeader
          span={"login"}
          h2={"Get started with Google"}
          p={"Please login to continue with our services"}
        />

        <div className="flex justify-center">
          <button
            onClick={loginWithGoogle}
            className="flex gap-2 items-center bg-black text-green-300 py-3 px-6 rounded-lg mt-10 hover:bg-slate-700 duration-300"
          >
            <span>
              <FcGoogle />
            </span>
            Sign in with Google
          </button>
        </div>
      </div>
    );
  }
};

export default LoginPage;

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (session) {
    const destination = context.query.destination || "/users/profile";

    return {
      redirect: {
        destination,
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
};

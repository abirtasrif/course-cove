import { getSession, signOut } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { FiLogOut } from "react-icons/fi";

const ProfilePage = ({ session }) => {
  const router = useRouter();

  const logoutFromGoogle = async () => {
    try {
      await signOut("google");
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (!session) {
      router.replace("/users/login");
    }
  }, [router, session]);

  if (!session) {
    return null;
  }

  return (
    <div className="min-h-screen wrapper py-10 flex flex-col items-center">
      <Image
        src={session.user.image}
        alt={session.user.name}
        height={80}
        width={80}
        className="rounded-full border-2 border-green-600"
      />

      <h2 className="text-3xl mt-2">Welcome, {session.user.name}</h2>

      <button
        onClick={logoutFromGoogle}
        className="flex gap-2 items-center bg-black text-green-300 py-3 px-6 rounded-lg mt-5 hover:bg-slate-700 duration-300"
      >
        Sign Out
        <span>
          <FiLogOut />
        </span>
      </button>
    </div>
  );
};

export default ProfilePage;

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/users/login",
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

import Link from "next/link";
import Button from "./Button";
import { useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <div className="h-20 bg-slate-900 text-green-100 flex items-center">
      <div className="wrapper flex justify-between items-center">
        <Link href="/" className="font-semibold text-xl">
          Course<span className="text-green-400">Cove</span>
        </Link>
        <div className="flex gap-5">
          <Link href="/" className="hover:text-green-300 duration-300">
            Home
          </Link>
          <Link href="/courses" className="hover:text-green-300 duration-300">
            Courses
          </Link>
          <Link href="/about" className="hover:text-green-300 duration-300">
            About
          </Link>
          <Link href="/contact" className="hover:text-green-300 duration-300">
            Contact
          </Link>
        </div>

        <div>
          {!session ? (
            <Button
              href="users/login"
              placeholder="Sign in"
              color="secondary"
            />
          ) : (
            <Button
              href="/users/profile"
              placeholder="Profile"
              color="secondary"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

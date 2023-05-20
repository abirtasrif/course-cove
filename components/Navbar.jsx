import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
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
          <Button
            href="/login"
            placeholder="Sign in"
            color="secondary"
            size="default"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

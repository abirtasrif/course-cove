import Link from "next/link";
import { cva } from "class-variance-authority";
import clsx from "clsx";

const buttonVariants = cva(
  "rounded-lg transition-colors duration-300 flex justify-center",
  {
    variants: {
      color: {
        primary: "bg-green-400 text-slate-950 hover:bg-green-200",
        secondary:
          "bg-green-50 text-slate-950 hover:bg-slate-300 hover:text-green-950",
        danger: "bg-rose-500 text-white hover:bg-rose-600",
      },
      size: {
        default: "py-3 px-6",
        full: "py-3 w-full",
      },
    },
    defaultVariants: {
      color: "primary",
      size: "default",
    },
  }
);

const Button = ({ href, placeholder, color, size }) => {
  return (
    <Link className={clsx(buttonVariants({ color, size }))} href={href}>
      {placeholder}
    </Link>
  );
};

export default Button;

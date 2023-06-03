import Button from "@/components/Button";
import { AiFillCheckCircle } from "react-icons/ai";

const successPage = () => {
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

export default successPage;

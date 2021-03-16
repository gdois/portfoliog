import Link from "next/link";
import {
  FiArrowLeft,
} from "react-icons/fi";

const ArrowUp = ({ to }) => {
  return (
    <div className="flex text-5xl">
      <Link href={to ? to : "/"}><FiArrowLeft className="bg-white cursor-pointer" style={{ color: "#ffac41" }} /></Link>
    </div>
  );
}

export default ArrowUp;
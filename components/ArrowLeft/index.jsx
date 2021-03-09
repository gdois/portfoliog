import Link from "next/link";
import {
  FiArrowLeft,
} from "react-icons/fi";

const ArrowUp = () => {
  return (
    <div className="flex text-5xl">
      <Link href="/"><FiArrowLeft className="bg-white" style={{ color: "#ff1e56" }} /></Link>
    </div>
  );
}

export default ArrowUp;
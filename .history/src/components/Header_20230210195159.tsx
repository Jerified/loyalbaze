
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex justify-between px-6 max-w-6xl sm:mx-auto items-center py-6">
      <div className="text-xl font-bold">loyalbaze</div>
      <button className="borde px-3 py-1 ">Get priority now</button>
    </div>
  );
}

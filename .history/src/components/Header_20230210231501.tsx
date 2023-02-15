
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex justify-between px-8 max-w-4xl sm:mx-auto items-center py-6">
      <div className="text-xl font-semibold tracking-wider ">loyalbaze</div>
      <button className="border-2 px-3 py-1 rounded-full ">Get Priority Access</button>
    </div>
  );
}

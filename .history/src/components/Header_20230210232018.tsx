
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex justify-between px-8 max-w-4xl sm:mx-auto items-center py-6">
      <div className="text-xl font-semibold tracking-wider ">loyalbaze</div>
      
      <button className="borde px-3 py-1 rounded-full bg-[linear-gradient(112.92deg,_#5404FF_18.35%,rgba(189,_59,_210,_0.94)_71.49%)]">
        Get Priority Access
      </button>
    </div>
  );
}

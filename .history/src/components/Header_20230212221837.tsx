
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex justify-between px-8 max-w-4xl sm:mx-auto items-center py-6">
      <div className="text-xl font-semibold tracking-wider ">l <span className=''><svg width="34" height="30" viewBox="0 0 34 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24.4002 0.169922C21.3835 0.169922 18.6835 1.63659 17.0002 3.88659C16.1404 2.73461 15.0239 1.79891 13.7394 1.15375C12.4549 0.508585 11.0376 0.171731 9.60016 0.169922C4.4835 0.169922 0.333496 4.33659 0.333496 9.48659C0.333496 11.4699 0.650163 13.3033 1.20016 15.0033C3.8335 23.3366 11.9502 28.3199 15.9668 29.6866C16.5335 29.8866 17.4668 29.8866 18.0335 29.6866C22.0502 28.3199 30.1668 23.3366 32.8002 15.0033C33.3502 13.3033 33.6668 11.4699 33.6668 9.48659C33.6668 4.33659 29.5168 0.169922 24.4002 0.169922Z" fill="url(#paint0_linear_1098_9360)"/>
<defs>
<linearGradient id="paint0_linear_1098_9360" x1="2.3335" y1="0.333333" x2="19.3335" y2="22.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#175CE1" stop-opacity="0.71"/>
<stop offset="1" stop-color="#A75FD2" stop-opacity="0.94"/>
</linearGradient>
</defs>
</svg>
</span> yalbaze</div>

      <button className=" px-3 py-1 rounded-full bg-[linear-gradient(112.92deg,_#5404FF_18.35%,rgba(189,_59,_210,_0.94)_71.49%)] text-sm">
        <div className="bg-inherit">Get Priority Access</div>
      </button>
    </div>
  );
}

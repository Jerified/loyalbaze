import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex justify-between px-8 sm:mx-auto items-center py-6 max-w-6xl mx-auto">
      <div className="text-xl font-semibold tracking-wider flex items-end justify-end">
        l
        <div className="relative">
          <svg
            width="10"
            height="8"
            viewBox="0 0 10 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute bottom-2 right-"
          >
            <path
              d="M8.42822 3V5.57143C8.42822 6.51857 7.66108 7.28571 6.71394 7.28571H3.28537C2.33822 7.28571 1.57108 6.51857 1.57108 5.57143V3C1.57108 2.76429 1.76394 2.57143 1.99965 2.57143H2.84394C3.07965 2.57143 3.27251 2.76429 3.27251 3V4.34571C3.27295 4.5733 3.36327 4.7915 3.5238 4.95283C3.68432 5.11416 3.90207 5.20556 4.12965 5.20714C4.29251 5.20714 4.45537 5.16 4.59679 5.06571L5.00394 4.8L5.38108 5.05286C5.64251 5.22857 5.97679 5.25 6.25537 5.1C6.53822 4.95 6.71394 4.66286 6.71394 4.34143V3C6.71394 2.76429 6.90679 2.57143 7.14251 2.57143H7.99965C8.23537 2.57143 8.42822 2.76429 8.42822 3ZM9.07108 0.857143V1.28571C9.07108 1.75714 8.84394 2.14286 8.21394 2.14286H1.78537C1.12965 2.14286 0.928223 1.75714 0.928223 1.28571V0.857143C0.928223 0.385714 1.12965 0 1.78537 0H8.21394C8.84394 0 9.07108 0.385714 9.07108 0.857143Z"
              fill="white"
            />
          </svg>

          <span className="w-">
            <svg
              width="18"
              height="30"
              viewBox="0 0 34 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.4002 0.169922C21.3835 0.169922 18.6835 1.63659 17.0002 3.88659C16.1404 2.73461 15.0239 1.79891 13.7394 1.15375C12.4549 0.508585 11.0376 0.171731 9.60016 0.169922C4.4835 0.169922 0.333496 4.33659 0.333496 9.48659C0.333496 11.4699 0.650163 13.3033 1.20016 15.0033C3.8335 23.3366 11.9502 28.3199 15.9668 29.6866C16.5335 29.8866 17.4668 29.8866 18.0335 29.6866C22.0502 28.3199 30.1668 23.3366 32.8002 15.0033C33.3502 13.3033 33.6668 11.4699 33.6668 9.48659C33.6668 4.33659 29.5168 0.169922 24.4002 0.169922Z"
                fill="url(#paint0_linear_1098_9360)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1098_9360"
                  x1="2.3335"
                  y1="0.333333"
                  x2="19.3335"
                  y2="22.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#175CE1" stop-opacity="0.71" />
                  <stop offset="1" stop-color="#A75FD2" stop-opacity="0.94" />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </div>
        yalbaze
      </div>

      <button className=" px-3 py-1 rounded-full bg-[linear-gradient(112.92deg,_#5404FF_18.35%,rgba(189,_59,_210,_0.94)_71.49%)] text-sm">
        <div className="bg-inherit">Get Priority Access</div>
      </button>
    </div>
  );
}

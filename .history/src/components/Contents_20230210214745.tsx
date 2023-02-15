import React from 'react'
import {CgProfile} from 'react-icons/cg'
import { HiOutlineMail } from "react-icons/hi";

const Contents = () => {
  return (
    <div className="pt-8">
      <h1 className="font-bold text-center text-3xl max-w-sm mx-auto ">
        Turn your best customers into{" "}
        <span className="text-[#A75FD2] ">Loyal fans</span>
      </h1>
      <p className="text-center pt-4 max-w-[22rem] md:max-w-lg mx-auto text-sm ">
        Loyalbaze, empowers businesses to offer digital, mobile-first loyalty
        programs to their customers. With our AI Powered platform, you can
        easily create and manage custom loyalty and rewards programs, track
        customer engagement, and gain valuable insights to improve your
        business. Sign up now to get early access.
      </p>
      <form action="" className="pt-8 grid place-items-center gap-4 pb-8">
        <div className="w-[80%] md:w-[60%] lg:w-[40%] relative flex items-center">
          <input
            type="text"
            className=" bg-inherit border-2 w-full rounded-md py-1 px-2 pl-7 placeholder:text-[14px] "
            placeholder="Tell us your name"
          />
          <CgProfile className="absolute left-2 top-[50%] -translate-y-[50%]" />
        </div>
        <div className="w-[80%] md:w-[60%] lg:w-[40%] xl:w-[20%] relative flex items-center">
          <input
            type="text"
            className=" bg-inherit border-2 w-full rounded-md py-1 px-2 pl-7 placeholder:text-[14px] placeholder:pt-[-1px] "
            placeholder="Enter your email address"
          />
          <HiOutlineMail className="absolute left-2 top-[50%] -translate-y-[50%]" />
        </div>
        <button className="text-sm bg-[linear-gradient(112.92deg,_#5404FF_18.35%,rgba(189,_59,_210,_0.94)_71.49%)] rounded-full w-[80%] md:w-[60%] lg:w-[40%] xl:w-[20%]">
          Get early acces
        </button>
      </form>
    </div>
  );
}

export default Contents
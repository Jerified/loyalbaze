import React from 'react'
import {CgProfile} from 'react-icons/cg'

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
      <form action="" className="pt-8 grid place-items-center">
        <div className="w-[80%] md:w-[40%]  relative">
          <input type="text" className=" bg-inherit border-2 w-full rounded-md py-1 px-2 placeholder:text-sm " placeholder='Tell us your name' />
          <CgProfile className='absolute left-2 top-[50%] -translate-y-[-50%]' />
        </div>
        <div className="">
          <input type="text" className="" />
        </div>
      </form>
    </div>
  );
}

export default Contents
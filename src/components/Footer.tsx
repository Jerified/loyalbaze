import React from 'react'
import {MdOutlinePhoneInTalk} from 'react-icons/md'

const Footer = () => {
  return (
    <div className='max-w-4xl mx-auto px-8 mt-4'>
      <div
        className="border-b border-white
        "
      />
      <div className="lg:grid lg:grid-cols-3 lg:justify-between text-center flex flex-col gap-3 text-sm py-3 lg:gap-0 items-center">
        <div className="font-semibold order-2 ">Loyalbaze is almost here.</div>
        <div className="max-w-[18rem] mx-auto order-1 lg:text-start">
          2nd Floor, The Garnet Building, KM14 Lekki Epe Expressway, Lagos.
          Nigeria.
        </div>
        <div className="flex justify-end items-center gap-2 order-3  lg:items-end">
          <MdOutlinePhoneInTalk />
          <p className="">+234 814 460 2273</p>
        </div>
      </div>
    </div>
  );
}

export default Footer
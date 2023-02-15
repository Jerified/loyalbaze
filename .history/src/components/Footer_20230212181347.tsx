import React from 'react'
import {MdOutlinePhoneInTalk} from 'react-icons/md'

const Footer = () => {
  return (
    <div>
      <div
        className="border-b border-white
        "
      />
      <div className="lg:grid lg:grid-cols-3 text-center gap-3 text-sm py-3">
        <div className="font-semibold order-2">Loyalbaze is almost here</div>
        <div className="max-w-[20rem] mx-auto order-1">
          2nd Floor, The Garnet Building, KM14 Lekki Epe Expressway, Lagos.
          Nigeria.
        </div>
        <div className="flex justify-center items-center gap-2 order-3">
          <MdOutlinePhoneInTalk />
          <p className="">+234 814 460 2273</p>
        </div>
      </div>
    </div>
  );
}

export default Footer
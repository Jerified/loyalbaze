import React from 'react'
import {MdOutlinePhoneInTalk} from 'react-icons/md'

const Footer = () => {
  return (
    <div>
      <div
        className="border-b border-white
        "
      />
      <div className="grid text-center gap-3 text-sm py-">
        <div className="font-semibold">Loyalbaze is almost here</div>
        <div className="max-w-sm">
          2nd Floor, The Garnet Building, KM14 Lekki Epe Expressway, Lagos.
          Nigeria.
        </div>
        <div className="flex justify-center items-center gap-2">
          <MdOutlinePhoneInTalk />
          <p className="">+234 814 460 2273</p>
        </div>
      </div>
    </div>
  );
}

export default Footer
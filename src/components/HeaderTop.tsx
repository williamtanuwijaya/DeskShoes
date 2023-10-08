import React from 'react'
import {BsFacebook, BsTwitter, BsInstagram, BsLinkedin} from "react-icons/bs"

export default function HeaderTop() {
  return (
    <div className='border-b border-gray-200 hidden sm:block'>
      <div className='container py-4'>
        <div className="flex justify-between items-center">
          <div className="hidden lg:flex gap-1">
            <div className="header_top__icon_wrapper">
              <BsFacebook/>
            </div>
            <div className="header_top__icon_wrapper">
              <BsTwitter/>
            </div>
            <div className="header_top__icon_wrapper">
              <BsInstagram/>
            </div>
            <div className="header_top__icon_wrapper">
              <BsLinkedin/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

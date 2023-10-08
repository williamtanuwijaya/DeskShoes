import React from 'react';
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs';

export default function HeaderTop() {
  return (
    <div className="border-b border-gray-200 hidden sm:block">
      <div className="container py-4">
        <div className="flex justify-between items-center">
          <div className="hidden lg:flex gap-1">
            <div className="header_top__icon_wrapper">
              <BsFacebook />
            </div>
            <div className="header_top__icon_wrapper">
              <BsTwitter />
            </div>
            <div className="header_top__icon_wrapper">
              <BsInstagram />
            </div>
            <div className="header_top__icon_wrapper">
              <BsLinkedin />
            </div>
          </div>
          <div className="text-gray-500 text">
            <b>Lorem, ipsum.</b> Lorem ipsum dolor sit amet.
          </div>

          <div className="flex gap-4">
            <select name="language" id="language" className="text-gray-500 text-[12px] w-[80px]">
              <option value="English">English</option>
              <option value="French">Indonesia</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

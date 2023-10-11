import React from 'react';
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs';

export default function HeaderTop() {
  return (
    <div className="border-b border-gray-200 hidden sm:block">
      <div className="container py-4">
        <div className="flex justify-between items-center">
          <div className="hidden lg:flex gap-1">
            <div className="header_top__icon">
              <BsFacebook />
            </div>
            <div className="header_top__icon">
              <BsTwitter />
            </div>
            <div className="header_top__icon">
              <BsInstagram />
            </div>
            <div className="header_top__icon">
              <BsLinkedin />
            </div>
          </div>
          <div className="text-gray-500 text">
            <b>Inovation Product by Content Creator</b>
          </div>
        </div>
      </div>
    </div>
  );
}

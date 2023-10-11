import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="bg-black text-gray-500 text-center py-4 md:py-4 flex-shrink-0">
      <div className="flex-grow"></div>
      <div className="mb-4">
        Copyright © <i>DeskShoes</i> <br />
        All Rights Reserved 2023.
      </div>
      <ul className="flex justify-center space-x-4">
        <Link href="/">
          <li className="hover:text-white transition cursor-pointer">Home</li>
        </Link>
        <Link href="/products">
          <li className="hover:text-white transition cursor-pointer">Products</li>
        </Link>
        <Link href="/contentCreator">
          <li className="hover:text-white transition cursor-pointer">Content Creator</li>
        </Link>
        <Link href="/blog">
          <li className="hover:text-white transition cursor-pointer">Blog</li>
        </Link>
        <Link href="/contact">
          <li className="hover:text-white transition cursor-pointer">Kontak</li>
        </Link>
        <Link href="/about">
          <li className="hover:text-white transition cursor-pointer">Tentang Kami</li>
        </Link>
      </ul>
    </div>
  );
};

export default Footer;

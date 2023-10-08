import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="hidden lg:block">
      <div className="container">
        <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-black">
          <Link className="navbar__link relative" href="#">
            HOME
          </Link>
          <Link className="navbar__link relative" href="#">
            PRODUCTS
          </Link>
          <Link className="navbar__link relative" href="#">
            Content Creator
          </Link>
          <Link className="navbar__link relative" href="#">
            Blog
          </Link>
          <Link className="navbar__link relative" href="#">
            Kontak
          </Link>
          <Link className="navbar__link relative" href="#">
            Tentang Kami
          </Link>
        </div>
      </div>
    </div>
  );
}

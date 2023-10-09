import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="hidden lg:block">
      <div className="container">
        <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-black">
          <Link className="navbar__link relative" href="/">
            Home
          </Link>
          <Link className="navbar__link relative" href="/products">
            Products
          </Link>
          <Link className="navbar__link relative" href="/contentCreator">
            Content Creator
          </Link>
          <Link className="navbar__link relative" href="/blog">
            Blog
          </Link>
          <Link className="navbar__link relative" href="/contact">
            Kontak
          </Link>
          <Link className="navbar__link relative" href="/about">
            Tentang Kami
          </Link>
        </div>
      </div>
    </div>
  );
}

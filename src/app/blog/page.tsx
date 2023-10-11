import React from 'react';
import dataBlog from '../dataBlog';
import Link from 'next/link';

export default function page() {
  return (
    <div className="container mx-auto mt-8 mb-5">
      <ul className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {dataBlog.map((newsItem) => (
          <li key={newsItem.id} className="bg-white rounded-md shadow-md overflow-hidden">
            <Link href={`/blog/${newsItem.id}`}>
              <h2 className="text-xl font-bold p-4">{newsItem.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

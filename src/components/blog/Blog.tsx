// pages/blog/index.js
import React from 'react';
import Link from 'next/link';
import dataBlog from './dataBlog';

const Blog = () => {
  return (
    <div className="container mx-auto mt-8">
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
};

export default Blog;

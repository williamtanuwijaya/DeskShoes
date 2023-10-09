import Link from 'next/link';
import React from 'react';

export default function ButtonLoadMore() {
  return (
    <Link href="/products">
      <div className="flex justify-center my-4">
        <button className="bg-slate-950 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Load More</button>
      </div>
    </Link>
  );
}

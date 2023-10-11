import React from 'react';
import ProductCard from './ProductCard';

const productsData = [
  {
    img: '/jacket-1.jpg',
    title: 'NAMO BARANG',
    desc: 'DESKRIPSI',
    rating: 4,
    price: '5000',
  },
  {
    img: '/jacket-1.jpg',
    title: 'NAMO BARANG',
    desc: 'DESKRIPSI',
    rating: 5,
    price: '5000',
  },
  {
    img: '/jacket-1.jpg',
    title: 'NAMO BARANG',
    desc: 'DESKRIPSI',
    rating: 3,
    price: '5000',
  },
  {
    img: '/jacket-1.jpg',
    title: 'NAMO BARANG',
    desc: 'DESKRIPSI',
    rating: 4,
    price: '5000',
  },
];

export default function NewProducts() {
  return (
    <div>
      <div className="container pt-16">
        <h2 className="font-medium text-2xl pb-4 text-center">New Products</h2>
        <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
          {productsData.map((item, index) => (
            <ProductCard key={index} img={item.img} title={item.title} desc={item.desc} rating={item.rating} price={item.price} />
          ))}
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import Image from 'next/image';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const productsData = [
  {
    img: '/Sepatu Sneaker Velophasis Luxe Sport II.jpg',
    title: 'Sepatu Sneaker Velophasis Luxe Sport II',
    desc: 'Alas kaki',
    rating: 4,
    price: '2599000',
  },
  {
    img: '/Sepatu Kets RS-X 3D.jpg',
    title: 'Sepatu Kets RS-X 3D',
    desc: 'Alas kaki',
    rating: 5,
    price: '1424250',
  },
  {
    img: '/Sepatu Slipstream PUMA x THE SMURFS.jpg',
    title: 'Sepatu Slipstream PUMA x THE SMURFS',
    desc: 'Alas kaki',
    rating: 3,
    price: '2199000',
  },
  {
    img: '/Sepatu Sneaker PUMA x 8ENJAMIN Slipstream.jpg',
    title: 'Sepatu Sneaker PUMA x 8ENJAMIN Slipstream',
    desc: 'Alas kaki',
    rating: 4,
    price: '1499250',
  },
];

const generateRating = (rating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<AiFillStar key={i} className="text-[#FF9529]" />);
    } else {
      stars.push(<AiOutlineStar key={i} className="text-[#FF9529]" />);
    }
  }
  return <div className="flex gap-1 text-[20px]">{stars}</div>;
};

export default function NewProducts() {
  return (
    <div>
      <div className="container pt-16">
        <h2 className="font-medium text-2xl pb-4 text-center">New Products</h2>
        <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
          {productsData.map((product, index) => (
            <div key={index} className="px-4 border border-gray-200 rounded-xl max-w-[400px]">
              <div>
                <Image src={product.img} width={500} height={600} alt={product.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

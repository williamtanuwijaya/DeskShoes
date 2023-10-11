import React from 'react';
import Image from 'next/image';

const TestimonialSlide = ({ name, position, image, quote }) => {
  return (
    <div className="border border-gray-300 rounded-2xl p-6 lg:p-0 m-5">
      <div className="text-center flex flex-col items-center gap-1">
        <Image className="rounded-full inline-block" src={image} width={80} height={80} alt="dp" />
        <h2 className="text-gray-500 font-black text-[20px]">{name}</h2>
        <p>{position}</p>
        <p className="max-w-[200px] text-gray-500">{quote}</p>
      </div>
    </div>
  );
};

export default TestimonialSlide;

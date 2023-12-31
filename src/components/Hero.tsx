'use client';

import React from 'react';
import Slider from 'react-slick';
import Slide from './Slide';

export default function Hero() {
  let settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
  };

  const slideData = [
    {
      id: 0,
      img: '/banner-1.jpg',
      title: 'Sepatu kece',
      mainTitle: "SEPATU TRAINER RS-X REINVENTION",
      price: 'Rp. 1.899.000',
    },
    {
      id: 1,
      img: '/banner-2.jpg',
      title: 'Sepatu kece',
      mainTitle: "SEPATU SNEAKER RS-X EFEKT TURBO",
      price: 'Rp. 1.499.250',
    },
    {
      id: 2,
      img: '/banner-3.jpg',
      title: 'Sepatu kece',
      mainTitle: "SEPATU SNEAKER RS-X UNDERGROUND DRIFT",
      price: 'Rp. 1.999.000',
    },
  ];

  return (
    <div>
      <div className="container pt-6 lg:pt-0">
        <Slider {...settings}>
          {slideData.map((item) => (
            <Slide key={item.id} img={item.img} title={item.title} mainTitle={item.mainTitle} price={item.price} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

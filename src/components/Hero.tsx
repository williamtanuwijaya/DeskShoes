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
      title: 'Cari barangnyo',
      mainTitle: "Judul Barangnyo",
      price: 'Rp. 10.000',
    },
    {
      id: 1,
      img: '/banner-1.jpg',
      title: 'Cari barangnyo',
      mainTitle: "Judul Barangnyo",
      price: 'Rp. 10.000',
    },
    {
      id: 2,
      img: '/banner-1.jpg',
      title: 'Cari barangnyo',
      mainTitle: "Judul Barangnyo",
      price: 'Rp. 10.000',
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

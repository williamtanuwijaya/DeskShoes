'use client';
import React from 'react';
import Slider from 'react-slick';
import TestimonialSlide from './TestimonialSlide';

const testimonials = [
  {
    id: 1,
    name: 'Umar Mudhor Alexander',
    position: 'CEO & Founder Invision',
    image: '/user.jpg',
    quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, dolor?',
  },
  {
    id: 2,
    name: 'Jessica Williams',
    position: 'Product Designer',
    image: '/user.jpg',
    quote: 'Consectetur adipisicing elit. Voluptates alias impedit numquam.',
  },
  {
    id: 3,
    name: 'John Doe',
    position: 'Developer',
    image: '/user.jpg',
    quote: 'Doloremque, accusamus illo aspernatur atque voluptatum veniam!',
  },
  {
    id: 4,
    name: 'Umar Mudhor Alexander',
    position: 'CEO & Founder Invision',
    image: '/user.jpg',
    quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, dolor?',
  },
  {
    id: 5,
    name: 'Jessica Williams',
    position: 'Product Designer',
    image: '/user.jpg',
    quote: 'Consectetur adipisicing elit. Voluptates alias impedit numquam.',
  },
  {
    id: 6,
    name: 'John Doe',
    position: 'Developer',
    image: '/user.jpg',
    quote: 'Doloremque, accusamus illo aspernatur atque voluptatum veniam!',
  },
];

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
  };

  return (
    <div className="container pt-16 pb-16 mb-5">
      <h2 className="font-medium text-2xl pb-4 text-center">Testimonials</h2>
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <TestimonialSlide key={testimonial.id} name={testimonial.name} position={testimonial.position} image={testimonial.image} quote={testimonial.quote} />
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial;

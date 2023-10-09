import React from 'react';
import Testimonial from '../Testimonials';

export default function About() {
  return (
    <>
      <div className="container mx-auto mt-8 text-center">
        <p className="text-lg font-semibold mb-4">Website ini merupakan hasil lomba pengembangan web dari Politeknik Sriwijaya.</p>
        <p className="mb-4">Dibuat oleh William Tanuwijaya, Umar Mudhor, dan Andhika Rizky Cahya Putra</p>
        <p className="mb-4">Teknologi yang digunakan dalam website ini adalah NextJS</p>
      </div>
      <Testimonial />
    </>
  );
}

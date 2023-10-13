'use client';
import React from 'react';
import Slider from 'react-slick';
import TestimonialSlide from './TestimonialSlide';

const testimonials = [
  {
    id: 1,
    name: 'Amanda Luiz Sudarjo',
    position: 'Content Creator and Video Producer',
    image: '/user.png',
    quote: '"Saya selalu mencari produk inovatif yang dapat meningkatkan kualitas konten video saya. Dengan temuan dari situs web ini, saya telah berhasil menciptakan video yang lebih menarik dan kreatif. Produk-produk di sini sangat membantu saya dalam menjalankan pekerjaan saya sebagai content creator dan video producer. Terima kasih atas sumber inspirasi inovatif ini!"',
  },
  {
    id: 2,
    name: 'David Wijaya',
    position: 'Graphic Designer and Illustrator',
    image: '/user.png',
    quote: '"Sebagai seorang desainer grafis, saya selalu mencari elemen desain yang unik dan kreatif untuk proyek-proyek saya. Situs web ini adalah tempat yang sempurna untuk menemukan vektor, ilustrasi, dan elemen desain lainnya yang sangat inovatif. Produk-produk di sini telah memungkinkan saya untuk menciptakan desain yang luar biasa. Saya sangat merekomendasikan situs ini kepada rekan-rekan desainer lainnya."',
  },
  {
    id: 3,
    name: 'Mark Rolute Fianda',
    position: 'Tech Blogger and Reviewer',
    image: '/user.png',
    quote: '"Situs web ini adalah sumber daya yang luar biasa bagi saya sebagai penulis dan peninjau produk teknologi. Saya telah menemukan produk inovatif yang jarang saya lihat di tempat lain. Produk-produk di sini selalu memberikan inspirasi dan bahan untuk ulasan saya. Saya sangat senang dengan pengalaman berbelanja di situs ini."',
  },
  {
    id: 4,
    name: 'Elena Susanti',
    position: 'Fashion Blogger and Stylist',
    image: '/user.png',
    quote: '"Saya selalu berusaha untuk tetap berada di garis depan dalam tren mode, dan situs web ini adalah tempat yang luar biasa untuk menemukan produk fashion yang inovatif. Saya telah menemukan banyak aksesori dan pakaian yang membuat tampilan saya lebih kreatif dan unik. Situs web ini adalah sumber inspirasi yang luar biasa bagi saya sebagai fashion blogger."',
  },
  {
    id: 5,
    name: 'Jessica Williams',
    position: 'Photography Enthusiast',
    image: '/user.png',
    quote: '"Saya seorang pecinta fotografi dan selalu mencari peralatan inovatif untuk mengambil gambar yang lebih kreatif. Situs web ini adalah tempat yang luar biasa untuk menemukan aksesori dan peralatan fotografi inovatif yang telah meningkatkan kualitas hasil foto saya. Terima kasih atas sumber inspirasi ini!"',
  },
  {
    id: 6,
    name: 'Lisa W',
    position: 'Food Blogger and Chef',
    image: '/user.png',
    quote: '"Situs web ini adalah surga bagi saya sebagai food blogger. Produk-produk inovatif yang saya temukan di sini telah membantu saya membuat resep-resep yang luar biasa dan memperindah tampilan hidangan saya. Saya sangat merekomendasikan situs ini kepada rekan-rekan dalam industri kuliner."',
  },
  {
    id: 7,
    name: 'Sarah M.',
    position: 'DIY Enthusiast and Craft Blogger',
    image: '/user.png',
    quote: '"Situs web ini adalah sumber inspirasi utama bagi saya sebagai pecinta proyek DIY. Produk-produk yang saya temukan di sini telah memungkinkan saya untuk menciptakan kerajinan yang lebih kreatif dan orisinal. Saya sangat senang dengan hasilnya dan tidak sabar untuk mencoba lebih banyak produk."',
  },
  {
    id: 8,
    name: 'Alex C.',
    position: 'Travel Vlogger',
    image: '/user.png',
    quote: '"Sebagai seorang travel vlogger, saya selalu mencari cara untuk memberikan konten yang segar dan inovatif kepada penonton saya. Situs web ini telah memberikan saya ide-ide dan peralatan yang membantu mengambil pengalaman perjalanan saya ke tingkat berikutnya. Produk-produk di sini telah membantu membedakan saluran saya dari yang lain."',
  }
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

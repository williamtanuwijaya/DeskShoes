'use client';
import React, { useState } from 'react';
import biodata from './biodata';
import Image from 'next/image';
import { BsFacebook, BsYoutube, BsInstagram } from 'react-icons/bs';
import Link from 'next/link';

interface SocialIconProps {
  href: string;
  icon: React.ReactNode;
}

const SocialIcon: React.FC<SocialIconProps> = ({ href, icon }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="mr-4">
    {icon}
  </a>
);

interface BiodataProps {
  img: string;
  title: string;
  desc: string;
  instagram: string;
  youtube: string;
  facebook: string;
}

const Biodata: React.FC<BiodataProps> = ({ img, title, desc, instagram, youtube, facebook }) => {
  return (
    <div className="flex flex-col items-center p-8 lg:p-16 bg-gray-100">
      <div className="mb-8 flex items-center">
        <Image src={img} alt="Profile" width={300} height={300} className="rounded-md" />
      </div>
      <div className="text-center max-w-2xl">
        <h1 className="text-xl font-bold mb-2">{title}</h1>
        <p className="text-lg mb-4">{desc}</p>
        <div className="flex justify-center">
          <SocialIcon href={instagram} icon={<BsInstagram />} />
          <SocialIcon href={youtube} icon={<BsYoutube />} />
          <SocialIcon href={facebook} icon={<BsFacebook />} />
          <Link href="/contentCreator/formcontentcreator">
            <button className="bg-slate-950 text-white p-1 rounded-md">Hubungi Narasumber</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default function PageContentCreator() {
  return (
    <div>
      {biodata.map((data, index) => (
        <Biodata key={index} {...data} />
      ))}
    </div>
  );
}

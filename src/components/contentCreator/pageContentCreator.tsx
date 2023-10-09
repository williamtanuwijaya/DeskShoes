import biodata from './biodata';
import Image from 'next/image';
import { BsFacebook, BsYoutube, BsInstagram } from 'react-icons/bs';

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
  desc: string;
  instagram: string;
  youtube: string;
  facebook: string;
}

const Biodata: React.FC<BiodataProps> = ({ img, desc, instagram, youtube, facebook }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:justify-between p-8 lg:p-16 bg-gray-100">
      <div className="lg:w-1/2 mb-8 lg:mb-0 lg:mr-8">
        <Image src={img} alt="Profile" width={300} height={400} className="rounded-md" layout="responsive" />
      </div>
      <div className="lg:w-1/2">
        <p className="text-lg mb-4">{desc}</p>
        <div className="flex mt-4">
          <SocialIcon href={instagram} icon={<BsInstagram />} />
          <SocialIcon href={youtube} icon={<BsYoutube />} />
          <SocialIcon href={facebook} icon={<BsFacebook />} />
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

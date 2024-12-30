import { Link } from 'react-router-dom';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from 'react-icons/fa';
import { convertTextToURLSlug, getCategoryLink } from '../../utils/helper';

import Brands from '../../lib/data/brandsList.json';
import Categories from '../../lib/data/categories.json';

type BrandLink = {
  text: string;
  link: string;
};

const UsefulLinks: string[] = [
  'About',
  'Careers',
  'Blog',
  'Press',
  'Lead',
  'Value',
  'Privacy',
  'Terms',
  'FAQs',
  'Security',
  'Mobile',
  'Contact',
  'Partner',
  'Express',
  'Local',
  'Spotlight',
  'Warehouse',
  'Deliver',
];

const PaymentPartners = [
  {
    logoName: 'mobikwik',
    alt: 'MobikWik',
  },
  {
    logoName: 'paytm',
    alt: 'PayTm',
  },
  {
    logoName: 'visa',
    alt: 'Visa',
  },
  {
    logoName: 'mastercard',
    alt: 'Mastercard',
  },
  {
    logoName: 'maestro',
    alt: 'Maestro',
  },
  {
    logoName: 'rupay',
    alt: 'RuPay',
  },
  {
    logoName: 'amex',
    alt: 'American Express',
  },
  {
    logoName: 'sodex',
    alt: 'Sodexo',
  },
  {
    logoName: 'bhim',
    alt: 'BHIM UPI',
  },
];

const Footer = () => {
  const allCategories = Categories.map((cat) => ({
    id: cat.id,
    text: cat.title,
    link: getCategoryLink(cat),
  }));

  const allBrands: BrandLink[] = Brands.map((brand) => ({
    text: brand,
    link: convertTextToURLSlug(brand),
  }));

  return (
    <footer>
      <div className="_container space-y-6">
        <div className="flex flex-col md:flex-row gap-4 pb-2">
         
          
        </div>
        
        <div>
          <h4 className="font-bold my-6 text-lg">Payment partners</h4>
          <div className="flex flex-wrap gap-x-6 gap-y-1 mb-12">
            {PaymentPartners.map((partner, i) => (
              <div key={i}>
                <div className="w-[98px] h-[66px] border rounded-[4px] flex items-center justify-center p-2">
                  {partner.logoName ? (
                    <img
                      src={`/${partner.logoName}.webp`}
                      alt={partner.alt}
                      className="h-14 w-14 object-cover"
                    />
                  ) : (
                    <span className="text-xs _text-default text-center leading-tight">
                      {partner.alt}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-[#fcfcfc] py-6 mt-2 min-h-[60px]">
        <div className="_container">
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 items-center">
            <div className="text-xs flex-1 _text-muted lg:max-w-md pr-6">
               Made by Anag Aggarwal
            </div>
            
            <div className="flex flex-1 md:flex-row items-center gap-2">
  {/* GitHub Button */}
  <button
    className="flex gap-1"
    onClick={() => window.open('https://github.com/Anag0710', '_blank')}
  >
    <FaGithub />
    <p className="font-bold text-sm leading-none lg:mr-4 _text-default">
      Check Developer's GitHub
    </p>
  </button>

  {/* LinkedIn Button */}
  <button
    className="flex gap-1"
    onClick={() => window.open('https://linkedin.com/in/anagaggarwal', '_blank')}
  >
    <FaLinkedinIn />
    <p className="font-bold text-sm leading-none lg:mr-4 _text-default">
      Check Developer's LinkedIn
    </p>
  </button>
</div>

            <div className="flex-1 flex items-center md:justify-end gap-4 lg:gap-6">
              <div className="cursor-pointer w-10 h-10 rounded-full bg-neutral-900 text-white flex items-center justify-center">
                <FaFacebookF />
              </div>
              <div className="cursor-pointer w-10 h-10 rounded-full bg-neutral-900 text-white flex items-center justify-center">
                <FaTwitter />
              </div>
              <div className="cursor-pointer w-10 h-10 rounded-full bg-neutral-900 text-white flex items-center justify-center">
                <FaInstagram />
              </div>
              <div className="cursor-pointer w-10 h-10 rounded-full bg-neutral-900 text-white flex items-center justify-center">
                <FaLinkedinIn />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

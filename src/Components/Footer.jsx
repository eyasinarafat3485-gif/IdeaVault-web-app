'use client';

import Link from 'next/link';
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa';
import { MdEmail, MdLocationOn } from 'react-icons/md';

const footerLinks = [
  {
    title: 'Platform',
    links: [
      { name: 'Ideas', path: '' },
      { name: 'Categories', path: '' },
      { name: 'Projects', path: '' },
      { name: 'Resources', path: '' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About', path: '' },
      { name: 'Contact', path: '' },
      { name: 'Privacy Policy', path: '' },
      { name: 'Terms & Conditions', path: '' },
    ],
  },
];

const socialLinks = [
  {
    icon: <FaFacebookF />,
    path: '',
  },
  {
    icon: <FaGithub />,
    path: '',
  },
  {
    icon: <FaLinkedinIn />,
    path: '',
  },
  {
    icon: <FaTwitter />,
    path: '',
  },
];

const Footer = () => {
  return (
    <footer className="relative mt-10 md:mt-15 border-t border-gray-200 dark:border-white/10 bg-white dark:bg-black overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-orange-500/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          <div>
            <h2 className="text-2xl font-black tracking-wide text-black dark:text-white">
              IdeaVault
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-600 dark:text-gray-400">
              A modern platform for developers to share ideas,
              discover projects, and build amazing digital experiences.
            </p>

            <div className="flex items-center gap-4 mt-6">
              {socialLinks.map((social, index) => (
                <Link key={index} href={social.path} target="_blank" className=" h-11 w-11 rounded-full border border-gray-300 dark:border-white/10 bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:border-orange-500 hover:text-orange-500 hover:shadow-lg hover:shadow-orange-500/20">
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-bold text-black dark:text-white mb-5">
                {section.title}
              </h3>

              <ul className="space-y-3">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <Link href={link.path} className=" text-gray-600 dark:text-gray-400 hover:text-orange-500 transition-all duration-300 text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-lg font-bold text-black dark:text-white mb-5">
              Contact
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MdEmail className="text-orange-500 text-xl mt-1" />

                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Email
                  </p>

                  <p className="text-sm font-medium text-black dark:text-white">
                    support@ideavault.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MdLocationOn className="text-orange-500 text-xl mt-1" />

                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Location
                  </p>

                  <p className="text-sm font-medium text-black dark:text-white">
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="my-8 border-t border-gray-200 dark:border-white/10" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-sm text-gray-600 dark:text-gray-400 text-center md:text-left">
            © {new Date().getFullYear()} IdeaVault. All rights reserved.
          </p>

          <div className="flex items-center gap-5 text-sm">
            <Link href="/privacy" className="text-gray-600 dark:text-gray-400 hover:text-orange-500 transition-all" > Privacy </Link>

            <Link href="/terms" className="text-gray-600 dark:text-gray-400 hover:text-orange-500 transition-all" > Terms </Link>

            <Link href="/cookies" className="text-gray-600 dark:text-gray-400 hover:text-orange-500 transition-all"> Cookies </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
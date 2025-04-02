"use client";

import React from 'react';
import Link from 'next/link';
import { Globe } from 'lucide-react';

const footerLinks = {
  support: [
    { label: 'Help Center', href: '#' },
    { label: 'Resources Guide', href: '#' },
    { label: 'Contact Us', href: '#' },
    { label: 'Financial Options', href: '#' },
  ],
  seniorCare: [
    { label: 'Independent Living', href: '#' },
    { label: 'Assisted Living', href: '#' },
    { label: 'Memory Care', href: '#' },
    { label: 'Nursing Homes', href: '#' },
    { label: 'Senior Apartments', href: '#' },
  ],
  company: [
    { label: 'About Us', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Partners', href: '#' },
    { label: 'Testimonials', href: '#' },
  ],
};

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="container px-6 mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-sm mb-4">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-sm mb-4">Senior Care Types</h3>
            <ul className="space-y-3">
              {footerLinks.seniorCare.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-sm mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <p className="text-sm">© 2024 Cleveland Senior Guide, Inc.</p>
            <div className="flex items-center space-x-6">
              <Link href="#" className="text-sm text-gray-600 hover:underline">
                Privacy
              </Link>
              <Link href="#" className="text-sm text-gray-600 hover:underline">
                Terms
              </Link>
              <Link href="#" className="text-sm text-gray-600 hover:underline">
                Sitemap
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <button className="flex items-center text-sm">
              <Globe className="h-4 w-4 mr-2" />
              English (US)
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

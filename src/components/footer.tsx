import React from 'react';
import Image from 'next/image'
/*import logo from  "D:/appview/placement-gct/src/assets/logo.png"*/
import './index.css';
import { yellow } from '@mui/material/colors';

const navigation = {
  navlinks: [
    { name:'Campus Placements', href: 'solutions' },

  ],
  services: [
    { name: 'Services', href: '/services' },
  ],
  Home: [
    { name: 'Subscription', href: '/' },
  ],
  contactus: [
    { name: 'Contact', href: '/contact' },
  ],
  employee: [
    { name: 'Help', href: '/employee' },
  ],
  AboutUs: [
    { name: 'About', href: '/AboutUs' },
  ],
}
""
export default function Footer() {
    return (
    <footer className="" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
    <div className="w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
    <div className="xl:grid xl:grid-cols-3 xl:gap-8">
    <div className="space-y-8 xl:col-span-1">
            </div>
            </div>
            </div>
            <p className="text-white-900 text-right bg-red-300">
              </p>
              <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-white-900 tracking-wider uppercase"></h3>
                  <ul role="list" className="ml-10 space-y-4">
                    {navigation.navlinks.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-base text-white-900 hover:text-red-900">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
              <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-white-900 tracking-wider uppercase"></h3>
                  <ul role="list" className="ml-10 space-y-4">
                    {navigation.services.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-base text-white-900 hover:text-gray-900">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-white-400 tracking-wider uppercase"></h3>
                  <ul role="list" className="ml-10 space-y-4">
                    {navigation.Home.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-base text-white-500 hover:text-gray-900">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-white-900 tracking-wider uppercase"></h3>
                  <ul role="list" className="ml-10 space-y-4">
                    {navigation.contactus.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-base text-white-900 hover:text-gray-900">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-white-900 tracking-wider uppercase"></h3>
                  <ul role="list" className="ml-10 space-y-4">
                    {navigation.employee.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-base text-white-900 hover:text-gray-900">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-white-900 tracking-wider uppercase"></h3>
                  <ul role="list" className="ml-10 space-y-10">
                    {navigation.AboutUs.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-base text-white-900 hover:text-gray-900">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
            <div className="mt-12 border-t border-black-900 pt-8 mb-8">
            <p className="text-base left-0 text-black text-left">&copy; 2024 GCT Placement,  Inc. All rights reserved.</p>
          </div>
          
          </footer>
            )}
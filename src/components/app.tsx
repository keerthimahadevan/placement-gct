"use client"
import { useState } from "react";
import Image from 'next/image';
import ctrlLogo from 'D:/appview/placement-gct/src/assets/control.png';
import placementLogo from 'D:/appview/placement-gct/src/assets/logo.png';
import './side.css';
import home from 'D:/appview/placement-gct/src/components/home.png';

const App = () => {
  const [open, setOpen] = useState(true);

  const Menus = [
    { title: "Home", src:home},
    { title: "Companies", src: "/images/building.png" },
    { title: "Jobs", src: "/images/briefcase.png" },
    { title: "Schedule", src: "/images/calendar.png" },
    { title: "Contact", src: "/images/mail.png" },
  ];

  return (
    <div className="flex">
      <div
        className={`${
          open ? "w-92" : "w-20"
        } bg-indigo-900

         h-screen p-5 pt-8 relative duration-200  `}
        
      >
        <Image
          src={ctrlLogo}
          alt="Toggle Menu"
          height={50}
          width={50}
          className={`absolute cursor-pointer -right-5 top-14 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <Image
            src={placementLogo}
            alt="Placement Logo"
            height={50}
            width={50}
            className={`cursor-pointer duration-500 ${
              open ? "w-12" : "w-0"
            }`}
          />
          <h1
            className={`text-white origin-left text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Placement Website
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={` flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${index === 0 && "bg-light-white font-size: 80%;"}`}
            >
              <Image
                src='{'./src/components/{$Menus.src}.png'}
                alt={$Menus.title}
                className="w-5 h-5"
                width={24}
                height={24}
              />
              <span
                className={`${
                  !open && "hidden"
                } origin-left duration-200 text-white`}
              >
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-screen flex-1 p-8 left-2">
        <h3 className="text-2xl font-semibold">Home Page</h3>
        {/* Add content for other sections of your website */}
      </div>
    </div>
  );
};

export default App;
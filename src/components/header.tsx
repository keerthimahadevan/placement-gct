import React from 'react';
import Image from 'next/image';
import clgLogo from 'D:/appview/placement-gct/src/assets/logo.png';
import './Header.css'; // Make sure to have a corresponding CSS file for styling
import DarkModeSwitcher from "@/components/darkmodeswitcher";

const Header: React.FC = () => {
  return (
    <header className="header-container">
        <div className="title-container">
        <div className="logo-container">
        <Image src={clgLogo} alt="College Logo" 
        style={{ width: 200, height: 200 }} className={`absolute left-2 top-2`}/>
        </div>
         <h1> Government College of Technology</h1>
         <h2> Thadagam Road, Coimbatore, Tamil Nadu - 641 013</h2>
         <h3> Phone: (0422) - 2432221 E-mail: principal@gct.ac.in
          <div className="darkMode"> 
            <DarkModeSwitcher/> Dark Mode</div>
          </h3>
          </div>
    </header>
    );
};

export default Header;

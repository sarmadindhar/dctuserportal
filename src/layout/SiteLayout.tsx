import React, {  ReactNode } from 'react';
import SiteHeader from '../components/Header/SiteHeader.tsx';
import Footer from '../components/Footer/Footer.tsx';
import SiteHeroBanner from '../components/Header/SiteHeroBanner.tsx';


const SiteLayout : React.FC<{ children: ReactNode }> = ({ children }) => {
  return (

    <div className="min-h-screen bg-slate-50 dark:bg-black dark:text-white relative">
      <SiteHeader page={'home'}/>
      <SiteHeroBanner/>
      {children}
      <Footer/>
    </div>
  );
}

export default SiteLayout;

import React, { useState, useEffect } from 'react';

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 8000); // Promenite vreme koliko želite da traje preloader

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="fixed h-100% px-[3vw] z-50 inset-0 flex items-center justify-center bg-black"
    style={{ opacity: loading ? 1 : 0, pointerEvents: loading ? 'auto' : 'none' }}
    >
      
        <div className='flex flex-col gap-[10vw] md:gap-[5vw]'>
          <h1 className="text-white text-4xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl fadeInHText">WELCOME TO MY PERSONAL WEBSITE</h1>
          <div className="line"></div>
          <div className='flex flex-col gap-[8vw] md:gap-[3vw]'>
            <p className="w-[80%] text-white text-lg sm:text-xl md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl fadeInP1Text">Welcome to my personal website, where you can immerse yourself in my creative journey</p>
            <p className="w-[80%] text-white text-lg sm:text-xl md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl fadeInP2Text"> Here, you'll find a curated collection of my works, each telling a unique story of innovation and passion.</p>
            <p className="w-[80%] text-white text-lg sm:text-xl md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl fadeInP3Text">Let's embark on this digital adventure together and discover the boundless possibilities of creativity.</p>
          </div>
        </div>
      
    </div>
  );
}

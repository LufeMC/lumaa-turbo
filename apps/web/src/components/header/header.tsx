'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '../ui/button';
import navigation from './navigation';

export default function Header() {
  const [hasScrolledDown, setHasScrolledDown] = useState(false);

  useEffect(() => {
    const mainElement = document.querySelector('#content_wrapper');
    const checkScrollPosition = () => {
      if (mainElement!.scrollTop >= 300) {
        setHasScrolledDown(true);
      } else {
        setHasScrolledDown(false);
      }
    };

    checkScrollPosition();

    mainElement!.addEventListener('scroll', checkScrollPosition);
    return () => {
      mainElement!.removeEventListener('scroll', checkScrollPosition);
    };
  }, []);

  return (
    <nav className="border-b border-slate-200 shadow-[0px_8px_8px_rgba(11,35,48,0.03)] py-4 w-full fixed z-[10] bg-white">
      <div className="w-11/12 md:10/12 lg:w-9/12 xl:8/12 flex items-center content-center justify-between mx-auto">
        <div className="flex-[2]">
          <Image
            src="/logos/lumaa-indigo.svg"
            alt="logo"
            width={50}
            height={50}
          />
        </div>
        <div className="flex items-center content-center justify-center gap-10 flex-[6]">
          {navigation.map((item) => (
            <Link
              className="font-extralight"
              href={item.link}
              key={`navigator-${item.title}`}
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div className="flex items-center content-center justify-end flex-[2]">
          <Button
            variant="link"
            className={`underline underline-offset-[10px] decoration-[2.2px] hover:text-indigo-950 transition-all duration-500 ${hasScrolledDown ? 'opacity-0 cursor-default' : 'opacity-100 cursor-pointer'}`}
          >
            Sign up
          </Button>
          <Button
            variant={`${hasScrolledDown ? 'default' : 'outline'}`}
            className="transition-all duration-500"
          >
            Contact us
          </Button>
        </div>
      </div>
    </nav>
  );
}

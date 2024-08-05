import Image from 'next/image';
import { Button } from '../ui/button';
import navigation from '../header/navigation';
import Link from 'next/link';

export default function Footer() {
  return (
    <section className="z-[1] mt-24 relative">
      <div className="relative bg-[rgb(64,67,222)] bg-[radial-gradient(circle,rgba(64,67,222,1)_31%,rgba(41,43,117,1)_100%)] w-full mx-auto gap-8 py-8 px-16 overflow-hidden flex flex-col items-center content-center justify-start gap-10">
        <div className="grid grid-cols-3 grid-rows-1 w-full">
          <div className="flex flex-col items-start content-start justify-start gap-5">
            <div className="flex items-center content-center justify-center w-fit gap-2">
              <Image
                src="/logos/lumaa-white.svg"
                alt="logo white"
                width={30}
                height={30}
              />
              <h3 className="text-white text-xl font-extralight">Lumaa</h3>
            </div>
            <span className="font-extralight text-white">
              Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam
              mauris sed maLorem ipsum dolor sit amet consectetur adipiscing
              elit aliquam mauris sed ma
            </span>
          </div>
          <div className="flex flex-col items-center content-center justify-start gap-5">
            <h3 className="text-white text-lg font-light">Quick Link</h3>
            <div className="flex flex-col items-center content-center justify-center gap-2">
              {navigation.map((item) => (
                <Link
                  className="font-extralight text-white"
                  href={item.link}
                  key={`navigator-${item.title}`}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-end content-end justify-start gap-5">
            <h3 className="text-white text-lg font-light">Contact us</h3>
            <div className="flex flex-col items-end content-end justify-start">
              <h3 className="text-white">Email</h3>
              <span className="text-white font-extralight">
                madhumitha@lumaa.io
              </span>
            </div>
          </div>
        </div>
        <div className="border-t w-[70%] mx-auto text-center pt-5">
          <span className="text-white">
            Copyright © 2024 Luumaa | All Rights Reserved
          </span>
        </div>
      </div>
    </section>
  );
}

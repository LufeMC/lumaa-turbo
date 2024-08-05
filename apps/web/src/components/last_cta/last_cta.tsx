import Image from 'next/image';
import { Button } from '../ui/button';

export default function LastCTA() {
  return (
    <section className="z-[1] relative mt-24 relative">
      <Image
        className="absolute h-[150px] w-auto bottom-0 left-[100px]"
        src="/img/cta/dots.svg"
        alt="dots"
        width={0}
        height={0}
        sizes="100vw"
      />
      <div className="relative bg-[rgb(64,67,222)] bg-[radial-gradient(circle,rgba(64,67,222,1)_31%,rgba(41,43,117,1)_100%)] w-[80%] mx-auto flex items-center content-center justify-center flex-col gap-8 py-16 rounded-[40px] overflow-hidden">
        <Image
          className="absolute left-[-70px] bottom-[-100px] h-[400px] w-[400px]"
          src="/img/cta/circle.svg"
          alt="circle"
          width={0}
          height={0}
          sizes="100vw"
        />
        <h2 className="text-4xl font-extrabold text-white">
          Experience Lumaa Firsthand
        </h2>
        <span className="text-white font-light text-center w-7/12">
          Request a demo to see how our solutions can transform your business
        </span>
        <Button className="bg-white text-primary cursor-pointer rounded-full hover:bg-slate-200">
          Schedule a Demo
        </Button>
      </div>
    </section>
  );
}

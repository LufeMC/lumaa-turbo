import Image from 'next/image';
import { Button } from '../ui/button';

export default function CTA() {
  return (
    <section className="z-[1] relative top-[-100px] relative">
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
          Ready to Transform Your Business?
        </h2>
        <span className="text-white font-light text-center w-7/12">
          Discover how Lumaa’s innovative solutions can drive growth and
          efficiency for your business.
        </span>
        <div className="flex items-center content-center justify-center gap-5">
          <Button className="bg-white text-primary cursor-pointer rounded-full hover:bg-slate-200">
            Get started today
          </Button>
          <Button className="!bg-[rgba(255,255,255,0.1)] backdrop-blur text-white cursor-pointer rounded-full hover:text-slate-200">
            Schedule Your Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}

import Image from 'next/image';
import { Button } from '../ui/button';
import Product from './product/product';

export default function Hero() {
  return (
    <section className="bg-[rgb(64,67,222)] bg-[radial-gradient(circle,rgba(64,67,222,1)_31%,rgba(41,43,117,1)_100%)] h-[95%] pt-44 relative z-[1]">
      <div className="h-full w-full absolute top-0 left-0 overflow-hidden">
        <Image
          className="absolute right-0 top-[20%]"
          src="/img/hero/semi-circle.svg"
          alt="semi circle"
          width={100}
          height={100}
        />
        <Image
          className="absolute left-[-500px] top-[-500px]"
          src="/img/hero/left-circle.svg"
          alt="left circle"
          width={1500}
          height={1500}
        />
        <Image
          className="absolute top-0"
          src="/img/hero/center-circle.svg"
          alt="center circle"
          width={1500}
          height={1500}
        />
        <Image
          className="absolute right-[-500px] top-[-700px]"
          src="/img/hero/right-circle.svg"
          alt="right circle"
          width={1500}
          height={1500}
        />
        <Image
          className="absolute bottom-[200px] left-[100px]"
          src="/img/hero/dots-left.svg"
          alt="right dots"
          width={100}
          height={100}
        />
        <Image
          className="absolute bottom-[300px] right-[100px]"
          src="/img/hero/dots-right.svg"
          alt="left dots"
          width={180}
          height={180}
        />
      </div>
      <div className="h-full w-full flex flex-col items-center content-center justify-start w-11/12 md:10/12 lg:w-9/12 xl:8/12 mx-auto gap-8">
        <h1 className="text-white text-6xl font-extrabold text-center">
          Empowering Your Business with Innovative Solutions
        </h1>
        <span className="text-white text-center text-lg font-extralight px-32">
          At Lumaa, we specialize in delivering tailored B2B solutions that
          drive growth and efficiency. Our expert team is dedicated to
          transforming your operations and achieving your business goals.
        </span>
        <div className="flex items-center content-center justify-center gap-5">
          <Button className="bg-white text-primary cursor-pointer rounded-full hover:bg-slate-200">
            Get started today
          </Button>
          <Button className="!bg-[rgba(255,255,255,0.1)] backdrop-blur text-white cursor-pointer rounded-full hover:text-slate-200">
            Schedule Your Free Consultation
          </Button>
        </div>
        <Product />
      </div>
      <div className="w-[97%] h-44 bg-white top-[-5rem] mx-auto relative z-[0] rounded-[80px]"></div>
    </section>
  );
}

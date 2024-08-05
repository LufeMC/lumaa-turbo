import Image from 'next/image';
import { Button } from '../ui/button';

export default function Investors() {
  return (
    <section className="z-[0] relative">
      <div className="shadow-[0px_-5px_20px_0px_rgba(0,0,0,0.17)] w-[97%] pt-32 mx-auto flex items-center content-center justify-center flex-col gap-8 rounded-b-[80px]">
        <h2 className="text-5xl font-extrabold">Our investors</h2>
        <span className="text-slate-500 font-light text-center w-7/12">
          Supported by distinguished investors who share our vision, their
          backing fuels our innovation and strengthens our commitment to
          excellence. Their logos below symbolize the trust and confidence they
          have in Lumaa
        </span>
        <div className="flex items-center content-center justify-center gap-16 mb-44">
          <Image
            src="/logos/finc.png"
            alt="finc"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: 'auto', height: '45px' }}
          />
          <Image
            src="/logos/neo.png"
            alt="neo"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: 'auto', height: '45px' }}
          />
        </div>
      </div>
    </section>
  );
}

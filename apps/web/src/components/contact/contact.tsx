import Image from 'next/image';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

export default function Contact() {
  return (
    <section className="z-[1] relative top-[-100px] relative mt-72">
      <div className="relative bg-primary w-[80%] mx-auto flex items-center content-center justify-between gap-8 py-16 rounded-[40px] px-16 h-96">
        <div className="flex-[6] flex flex-col items-start content-start justify-start gap-8">
          <h2 className="text-white text-4xl font-bold text-start">
            Get started with our 30 day’s free demo.
          </h2>
          <span className="text-slate-300 text-start text-sm font-extralight">
            We have the team and know how to help you scale 10x faster.
          </span>
        </div>
        <div className="flex-[4] flex flex-col items-start content-start justify-start top-[-100px] relative">
          <div className="bg-white rounded-[40px] shadow-[0px_-5px_44px_0px_rgba(0,0,0,0.10)] w-full px-10 py-10 flex flex-col items-start content-start justify-start gap-5">
            <div className="flex flex-col items-start content-start justify-start gap-1 w-full">
              <Label className="text-slate-600">Name</Label>
              <Input className="!ring-0 shadow-none border-t-0 border-l-0 border-r-0 border-b rounded-none border-slate-600" />
            </div>
            <div className="flex flex-col items-start content-start justify-start gap-1 w-full">
              <Label className="text-slate-600">Phone number</Label>
              <Input className="!ring-0 shadow-none border-t-0 border-l-0 border-r-0 border-b rounded-none border-slate-600" />
            </div>
            <div className="flex flex-col items-start content-start justify-start gap-1 w-full">
              <Label className="text-slate-600">E-mail</Label>
              <Input className="!ring-0 shadow-none border-t-0 border-l-0 border-r-0 border-b rounded-none border-slate-600" />
            </div>
            <div className="flex flex-col items-start content-start justify-start gap-1 w-full">
              <Label className="text-slate-600">Message</Label>
              <Input className="!ring-0 shadow-none border-t-0 border-l-0 border-r-0 border-b rounded-none border-slate-600" />
            </div>
            <Button className="rounded-full">Send message</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

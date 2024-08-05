import Image from 'next/image';

export default function SimpleHowItWorks() {
  return (
    <section className="flex flex-col items-center content-center justify-center gap-16">
      <div className="flex flex-col items-center content-center justify-center">
        <span className="text-slate-500 font-light text-center">
          Quick Step by Step
        </span>
        <h2 className="text-4xl font-extrabold">How it works</h2>
      </div>
      <div className="flex items-center content-center justify-start w-full flex-col gap-5">
        <div className="grid grid-cols-9 grid-rows-1 w-[80%]">
          <div></div>
          <Image
            className="h-[80px] w-auto mx-auto"
            src="/img/how_it_works/simple/image-1.png"
            alt="image 1"
            width={0}
            height={0}
            sizes="100vw"
          />
          <div className="h-full col-span-2 mx-auto flex items-center content-center justify-center">
            <Image
              className="h-[40px] w-full px-5"
              src="/img/how_it_works/simple/arrow-1.png"
              alt="arrow 1"
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
          <Image
            className="h-[80px] w-auto mx-auto"
            src="/img/how_it_works/simple/image-2.png"
            alt="image 2"
            width={0}
            height={0}
            sizes="100vw"
          />
          <div className="h-full col-span-2 mx-auto flex items-center content-center justify-center">
            <Image
              className="h-[40px] w-full px-5"
              src="/img/how_it_works/simple/arrow-2.png"
              alt="arrow 2"
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
          <Image
            className="h-[80px] w-auto mx-auto"
            src="/img/how_it_works/simple/image-3.png"
            alt="image 3"
            width={0}
            height={0}
            sizes="100vw"
          />
          <div></div>
        </div>
        <div className="grid grid-cols-9 grid-rows-1 w-[80%] gap-1">
          <div className="flex flex-col items-center content-center justify-center gap-3 col-span-3">
            <h4 className="font-bold text-center">
              Schedule a Free Consultation
            </h4>
            <span className="text-center text-slate-500 font-light">
              Book a complimentary consultation to discuss your business needs
              with our experts.
            </span>
          </div>
          <div className="flex flex-col items-center content-center justify-center gap-3 col-span-3">
            <h4 className="font-bold text-center">
              Receive a Customized Proposal
            </h4>
            <span className="text-center text-slate-500 font-light">
              Get a tailored proposal that outlines the best solutions for your
              specific requirements.
            </span>
          </div>
          <div className="flex flex-col items-center content-center justify-center gap-3 col-span-3">
            <h4 className="font-bold text-center">
              Implement and Achieve Results
            </h4>
            <span className="text-center text-slate-500 font-light">
              Start implementing the solution with our support and monitor
              progress to ensure success.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

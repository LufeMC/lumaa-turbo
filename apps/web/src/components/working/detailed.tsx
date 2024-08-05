import Image from 'next/image';

export default function DetailedHowItWorks() {
  return (
    <section className="flex items-stretch content-center justify-between gap-10 w-11/12 md:10/12 lg:w-9/12 xl:8/12 mx-auto mt-24">
      <div className="flex flex-col items-start content-start justify-start gap-5 flex-[2]">
        <h2 className="text-3xl font-extrabold">Deep dive on Lumaa</h2>
        <span className="text-slate-500 font-light text-start">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&#39;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book.
        </span>
      </div>
      <Image
        className="flex-[2] w-full"
        src="/img/how_it_works/detailed/side-image.png"
        alt="item 1 product"
        width={0}
        height={0}
        sizes="100vw"
      />
    </section>
  );
}

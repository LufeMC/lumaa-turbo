import Image from 'next/image';
import { Button } from '../../ui/button';

export default function Product() {
  return (
    <section className="relative flex flex-col items-center content-center justify-center mt-16 w-[70%] z-[1]">
      <Image
        src="/img/product/laptop.png"
        alt="laptop product"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
      />
      <Image
        className="absolute top-[-15%] right-[-5%]"
        src="/img/product/item-1.png"
        alt="item 1 product"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '35%', height: 'auto' }}
      />
      <Image
        className="absolute top-[20%] left-[-8%]"
        src="/img/product/item-2.png"
        alt="item 2 product"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '40%', height: 'auto' }}
      />
    </section>
  );
}

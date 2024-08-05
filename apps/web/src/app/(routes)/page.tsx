import ClientList from '@/components/client_list/client_list';
import Contact from '@/components/contact/contact';
import CTA from '@/components/cta/cta';
import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import Hero from '@/components/hero/hero';
import Investors from '@/components/investors/investors';
import LastCTA from '@/components/last_cta/last_cta';
import DetailedHowItWorks from '@/components/working/detailed';
import SimpleHowItWorks from '@/components/working/simple';

export default function Home() {
  return (
    <div id="content_wrapper" className="overflow-auto h-full flex">
      <Header />
      <main className="z-[0] flex-1">
        <Hero />
        <Investors />
        <CTA />
        <SimpleHowItWorks />
        <DetailedHowItWorks />
        <ClientList />
        <Contact />
        <LastCTA />
        <Footer />
      </main>
    </div>
  );
}

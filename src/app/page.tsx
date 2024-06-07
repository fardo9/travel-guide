// import Image from "next/image";
import Camp from '@/components/base/Camp';
import Features from '@/components/base/Features';
import GetApp from '@/components/base/GetApp';
import Guide from '@/components/base/Guide';
import Hero from '@/components/base/Hero'

export default function Home() {
  return (
    <>
      <Hero />
      <Camp />
      <Guide />
      <Features />
      <GetApp />
    </>
  );
}

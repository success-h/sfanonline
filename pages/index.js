import Brand from "../components/brand/Brand";
import Footer from "../components/footer/Footer";
import Hero from "../components/Hero/Hero";
import Inspiration from "../components/inspiration/inspiration";
import Intro from "../components/intro/Intro";
import More from "../components/more/more";
import News from "../components/news/News";
import Partner from "../components/partner/partner";
import Subscribe from "../components/subscribe/Subscribe";
import Testimonial from "../components/testimonial/Testimonial";
import Head from "next/head";

export default function Home() {
  return (
    <div className="mx-auto max-w-screen-2xl overflow-x-hidden flex-col flex items-center justify-center ">
      <Head>
        <title>Sfanonline - Home</title>
      </Head>
      <Hero />
      <Partner />
      <Inspiration />
      <More />
      <Brand />
      <Intro />
      <Testimonial />
      <News />
      <Subscribe />
      <Footer />
      <div className="w-full my-3 border-b md:border-b-2 border-[#000A37]" />
    </div>
  );
}

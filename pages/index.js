import Brand from "../components/brand/Brand";
import Hero from "../components/Hero/Hero";
import Inspiration from "../components/inspiration/inspiration";
import More from "../components/more/more";
import Partner from "../components/partner/partner";

export default function Home() {
  return (
    <div className="mx-auto max-w-screen-2xl overflow-x-hidden flex-col flex items-center justify-center ">
      <Hero />
      <Partner />
      <Inspiration />
      <More />
      <Brand />
    </div>
  );
}

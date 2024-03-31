import About from "@/sections/home/About";
import DegenFarm from "@/sections/home/DegenFarm";
import Hero from "@/sections/home/Hero";
import Merch from "@/sections/home/Merch";
import NFT from "@/sections/home/NFT";
import Roadmap from "@/sections/home/Roadmap";
import TokenInformation from "@/sections/home/TokenInformation";
import Tokenomics from "@/sections/home/Tokenomics";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <TokenInformation />
      <Tokenomics />
      <NFT />
      <DegenFarm />
      <Merch />
      <Roadmap />
    </>
  );
}

import About from "@/sections/Home/About";
import Disclaimer from "@/sections/Home/Disclaimer";
import FollowUs from "@/sections/Shared/FollowUs";
import Hero from "@/sections/Home/Hero";
import Merch from "@/sections/Home/Merch";
import NFT from "@/sections/Home/NFT";
import Roadmap from "@/sections/Home/Roadmap";
import TokenInformation from "@/sections/Home/TokenInformation";
import Tokenomics from "@/sections/Home/Tokenomics";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <TokenInformation />
      <Tokenomics />
      <NFT />
      <Merch />
      <Roadmap />
      <FollowUs />
      <Disclaimer />
    </>
  );
}

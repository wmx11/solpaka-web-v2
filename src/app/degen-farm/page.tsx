import About from "@/sections/degen-farm/About";
import EnjoyOGNFTBenefits from "@/sections/shared/EnjoyOGNFTBenefits";
import Hero from "@/sections/degen-farm/Hero";
import Projects from "@/sections/degen-farm/Projects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Degen Farm",
  description:
    "The Degen Farm is a Solpaka product similar to a managed launchpad. Degen Farm aims to release farm-related projects that fit the narrative and are meant to leverage the current hype wave in the market.",
  openGraph: {
    description:
      "The Degen Farm is a Solpaka product similar to a managed launchpad. Degen Farm aims to release farm-related projects that fit the narrative and are meant to leverage the current hype wave in the market.",
    images: "https://solpaka.com/assets/meta/degen-farm-meta.png",
    title: "SOLPAKA - The Degen Farm",
    url: "https://solpaka.com/degen-farm",
  },
};

const page = () => {
  return (
    <>
      <Hero />
      <Projects />
      <About />
      <EnjoyOGNFTBenefits />
    </>
  );
};

export default page;

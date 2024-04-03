/* eslint-disable react/no-unescaped-entities */
import DegenFarmImage from "@/assets/images/degen-farm.png";
import Card from "@/components/Card";
import Container from "@/components/Container";
import GlowEffect from "@/components/GlowEffect";
import Section from "@/components/Section";
import Title from "@/components/Title";
import Image from "next/image";
import TokenPromises from "../shared/TokenPromises";

const Hero = () => {
  return (
    <Section className="min-h-screen flex items-center justify-center pattern-topography relative overflow-hidden">
      <Container className="flex flex-col-reverse md:flex-row flex-wrap gap-4 items-center justify-between z-10 relative">
        <div className="flex-1 space-y-8">
          <Title className="md:text-7xl">
            Welcome to{" "}
            <strong className="text-yellow-500">The Degen Farm!</strong>
          </Title>
          <h2 className="text-xl">
            SOLPAKA is expanding its farm!
            <br />
            Explore Solpaka farm-related projects, start early & support the
            Solpaka ecosystem.
            <br />
            Chill and grow fleece! 🦙
          </h2>

          <TokenPromises />

          <div className="gap-4 text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            <Card className="border-2 border-yellow-300 shadow-yellow-500 shadow-sm">
              <div className="text-4xl">1</div>
              <div>Farm projects launched</div>
            </Card>
            <Card>
              <div className="text-4xl">+1,100</div>
              <div>Community members</div>
            </Card>
            <Card>
              <div className="text-4xl">+150</div>
              <div>NFT Holders</div>
            </Card>
            <Card>
              <div className="text-4xl">+650k</div>
              <div>SOLPAKA Burned</div>
            </Card>
          </div>
        </div>
        <div className="flex justify-center flex-1">
          <Card className="p-0 overflow-hidden shadow-lg w-auto">
            <Image
              src={DegenFarmImage}
              alt="degen farm cover"
              width={650}
              className="max-w-[650px] w-full"
            />
          </Card>
        </div>
      </Container>
      <GlowEffect className="bg-purple-500 top-[-200px] right-[-200px]" />
      <GlowEffect className="bg-green-500 bottom-[-200px] right-[-200px]" />
      <GlowEffect className="bg-orange-500 bottom-[-200px] left-[-200px]" />
    </Section>
  );
};

export default Hero;

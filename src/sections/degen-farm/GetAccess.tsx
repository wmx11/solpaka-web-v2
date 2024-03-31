/* eslint-disable react/no-unescaped-entities */
import NFTImage from "@/assets/images/nfts.png";
import Card from "@/components/Card";
import Container from "@/components/Container";
import GlowEffect from "@/components/GlowEffect";
import Section from "@/components/Section";
import Title from "@/components/Title";
import TrendUpIcon from "@/components/TrendUpIcon";
import routes from "@/util/routes";
import Image from "next/image";
import Link from "next/link";

const GetAccess = () => {
  return (
    <Section className="pattern-circles relative overflow-clip">
      <Container>
        <Title className="text-center">Want to enjoy the OG benefits?</Title>
        <div className="flex flex-col md:flex-row-reverse flex-wrap gap-4 items-center justify-between z-10 relative">
          <div className="flex-1">
            <div className="flex md:justify-end flex-1">
              <Card className="p-0 flex overflow-hidden shadow-lg max-w-[550px] w-full">
                <Image
                  src={NFTImage}
                  alt="degen farm cover"
                  width={550}
                  className="max-w-[550px] w-full"
                />
              </Card>
            </div>
          </div>
          <div className="space-y-4 flex-1">
            <p>
              Get access to the Inner Circle (OG NFT exlusive group) on Discord
              and get early access to projects and alpha announcements!
            </p>
            <p>
              To get access to the Inner Circle Discord community you will need
              to mint the OG Solpaka NFT, head over to our Discord server, and
              verify your NFT.
            </p>
            <p>It's as easy as growing fleece!</p>
            <div>
              <Link href={routes.nft}>
                <button className="btn btn-primary">
                  Mint your OG NFT <TrendUpIcon />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
      <GlowEffect className="bg-purple-500 top-[-200px] right-[-200px]" />
      <GlowEffect className="bg-green-500 bottom-[-200px] right-[-200px]" />
      <GlowEffect className="bg-orange-500 bottom-[-200px] left-[-200px]" />
    </Section>
  );
};

export default GetAccess;

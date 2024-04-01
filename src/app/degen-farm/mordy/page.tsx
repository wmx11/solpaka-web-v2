import DegenFarmImage from "@/assets/images/degen-farm.png";
import Card from "@/components/Card";
import Container from "@/components/Container";
import GlowEffect from "@/components/GlowEffect";
import Section from "@/components/Section";
import Title from "@/components/Title";
import TrendUpIcon from "@/components/TrendUpIcon";
import TokenPromises from "@/sections/shared/TokenPromises";
import baseConfig from "@/util/baseConfig";
import routes from "@/util/routes";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "MORDY The Dog",
  description: "",
  openGraph: {
    description:
      "The Degen Farm is a Solpaka product similar to a managed launchpad. Degen Farm aims to release farm-related projects that fit the narrative and are meant to leverage the current hype wave in the market.",
    images: "https://solpaka.com/assets/meta/mordy-meta.png",
    title: "SOLPAKA - The Degen Farm",
    url: "https://solpaka.com/degen-farm/mordy",
  },
};

const page = () => {
  return (
    <>
      <Section className="flex items-center justify-center min-h-screen pattern-topography relative overflow-hidden">
        <Container className="flex flex-col-reverse md:flex-row-reverse flex-wrap gap-4 justify-between z-10 relative">
          <div className="flex justify-center items-center flex-1">
            <Card className="p-0 overflow-hidden shadow-lg w-auto">
              <Image
                src={DegenFarmImage}
                alt="degen farm cover"
                width={650}
                className="max-w-[650px]"
              />
            </Card>
          </div>
          <div className="flex-1 space-y-8">
            <div>
              <a href={routes.degenFarm} className="mb-8 block">
                <button className="btn btn-primary btn-outline">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                    />
                  </svg>
                  Back to Degen Farm
                </button>
              </a>
              <Title>Mordy</Title>
              <p>
                <strong>Launch date:</strong> 2023-03-03
              </p>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem. Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corporis suscipit laboriosam, nisi ut
                aliquid ex ea commodi consequatur? Quis autem vel eum iure
                reprehenderit qui in ea voluptate velit esse quam nihil
                molestiae consequatur, vel illum qui dolorem eum fugiat quo
                voluptas nulla pariatur
              </p>
            </div>

            <div>
              <p className="text-3xl underline  ">Launch details</p>
              <p>
                <strong>Launch price:</strong> $0.00001143
              </p>
              <p>
                <strong>Launch liquidity:</strong> $16,000
              </p>
              <p>
                <strong>Launch market cap</strong>: $11,429
              </p>
              <p>
                <strong>Circulating supply:</strong> 1,000,000,000
              </p>
            </div>

            <div>
              <p className="text-3xl underline">Token details</p>
              <p>
                📜<strong>Contract address:</strong>{" "}
                <a href="" target="_blank" className="link break-all">
                  BDHqX9YfJE3M6caox3obUX5YpWHz2cjnGFiZJtRghdCo
                </a>
              </p>
              <p>
                🔓 <strong>Liquidity lock tx:</strong>{" "}
                <a href="" target="_blank" className="link break-all">
                  3C7N4aWjWHchp1nCBnYfkPBg4EYzsb4bSFyPFnYw2Ke3W9iFr8htyKV8Wzqre1iC4XD4ePFb8hopw3x3fo8ZWHwW
                </a>
              </p>
            </div>

            <div>
              <p className="text-3xl underline">Tokenomics</p>
              <p>
                <strong>Total supply:</strong> 1,000,000,000
              </p>
              <p>
                <strong>Team allocation:</strong> 200,000,000 (20%)
              </p>
              <p>
                <strong>Seed allocation:</strong> 100,000,000(10%)
              </p>
              <p>
                <strong>LP Allocation:</strong> 700,000,000(70%)
              </p>
            </div>
            <div className="space-y-8">
              <p className="text-3xl underline">Links</p>
              <TokenPromises />
              <div className="flex flex-wrap flex-col md:flex-row gap-4 [&>*]:flex-1 justify-between">
                <a href={baseConfig.raydium} target="_blank">
                  <button className="btn btn-primary w-full">
                    Get on Raydium <TrendUpIcon />
                  </button>
                </a>
                <a href={baseConfig.jupiter} target="_blank">
                  <button className="btn btn-primary w-full">
                    Get on Jupiter <TrendUpIcon />
                  </button>
                </a>
              </div>
              <div className="flex items-center justify-between flex-wrap gap-4">
                <a
                  href={baseConfig.dexscreener}
                  target="_blank"
                  className="link"
                >
                  <span>Dexscreener</span>
                </a>
                <a href={baseConfig.dextools} target="_blank" className="link">
                  <span>Dextools</span>
                </a>
                <a
                  href={baseConfig.coinmarketcap}
                  target="_blank"
                  className="link"
                >
                  <span>CoinMarketCap</span>
                </a>
                <a href={baseConfig.coingecko} target="_blank" className="link">
                  <span>CoinGecko</span>
                </a>
              </div>
            </div>
          </div>
        </Container>
        <GlowEffect className="bg-purple-500 top-[-200px] right-[-200px]" />
        <GlowEffect className="bg-green-500 bottom-[-200px] right-[-200px]" />
        <GlowEffect className="bg-orange-500 bottom-[-200px] left-[-200px]" />
      </Section>
    </>
  );
};

export default page;

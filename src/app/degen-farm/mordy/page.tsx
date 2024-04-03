import DegenFarmImage from "@/assets/projects/mordy.png";
import { GetOnJupiterButton, GetOnRaydiumButton } from "@/components/Button";
import Card from "@/components/Card";
import Container from "@/components/Container";
import GlowEffect from "@/components/GlowEffect";
import Section from "@/components/Section";
import TelegramLogo from "@/components/TelegramLogo";
import Title from "@/components/Title";
import TwitterLogo from "@/components/TwitterLogo";
import EnjoyOGNFTBenefits from "@/sections/shared/EnjoyOGNFTBenefits";
import TokenPromises from "@/sections/shared/TokenPromises";
import routes from "@/util/routes";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Mordy The Dog",
  description:
    "MORDY The Dog! Guarding the Solpaka farm from those who dare to oppose it. Its name is Moon Or Dusty, based on MoonMoon husky. Join our little furry friend - chill and grow fleece!",
  openGraph: {
    description:
      "MORDY The Dog! Guarding the Solpaka farm from those who dare to oppose it. Its name is Moon Or Dusty, based on MoonMoon husky. Join our little furry friend - chill and grow fleece!",
    images: "https://solpaka.com/assets/meta/mordy-meta.png",
    title: "SOLPAKA - The Degen Farm",
    url: "https://solpaka.com/degen-farm/mordy",
  },
};

const page = () => {
  return (
    <>
      <Section className="flex items-center justify-center min-h-screen pattern-circles relative overflow-clip">
        <Container className="flex flex-col-reverse md:flex-row-reverse flex-wrap gap-4 justify-between z-10 relative">
          <div className="flex justify-center flex-1">
            <div>
              <Card className="p-0 overflow-hidden shadow-lg md:sticky top-20">
                <Image
                  src={DegenFarmImage}
                  alt="degen farm cover"
                  width={650}
                  className="w-full max-w-[650px]"
                />
              </Card>
            </div>
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
                <strong>Launch date:</strong>{" "}
                <span>
                  2024-04-03{" "}
                  <span className="badge badge-sm badge-error">Not Live</span>
                </span>
              </p>
              <p>
                MORDY The Dog! Guarding the Solpaka farm from those who dare to
                oppose it. Its name is Moon Or Dusty, based on MoonMoon husky.
                Join our little furry friend - chill and grow fleece!
              </p>
            </div>

            <Card className="space-y-8">
              <TokenPromises />
              <div className="flex items-center flex-wrap gap-4">
                <a
                  href="https://twitter.com/MordySolana"
                  target="_blank"
                  className="link"
                >
                  <span className="badge badge-secondary p-4 gap-2">
                    <TwitterLogo /> Twitter
                  </span>
                </a>
                <a
                  href="https://t.me/mordy_solana"
                  target="_blank"
                  className="link"
                >
                  <span className="badge badge-secondary p-4 gap-2">
                    <TelegramLogo /> Telegram
                  </span>
                </a>
              </div>

              <div className="flex flex-wrap flex-col md:flex-row gap-4 [&>*]:flex-1 justify-between">
                <GetOnRaydiumButton href="https://raydium.io/swap/?inputCurrency=sol&outputCurrency=CXb92fEG87ziY8h2U9S2kg5eNfFHH2bHTDNfCQ2VJeT3&fixed=in" />
                <GetOnJupiterButton disabled />
              </div>

              <div className="flex items-center justify-between flex-wrap gap-4">
                <a
                  href="https://dexscreener.com/solana/ersdkcaqy7ax23ngstsu4wbyvwe8bjmbhc4hfeyqfxsb"
                  target="_blank"
                  className="link"
                >
                  <span>Dexscreener</span>
                </a>
                <a
                  href="https://www.dextools.io/app/en/solana/pair-explorer/ERsdKcaqy7AX23ngSTsu4wBYvwe8BjMBHc4hFeYQfXsB?t=1712167294250"
                  target="_blank"
                  className="link"
                >
                  <span>Dextools</span>
                </a>
                <a
                  href="https://birdeye.so/token/CXb92fEG87ziY8h2U9S2kg5eNfFHH2bHTDNfCQ2VJeT3?chain=solana"
                  target="_blank"
                  className="link"
                >
                  <span>BirdEye</span>
                </a>
              </div>
            </Card>

            <Card>
              <p className="text-3xl underline mb-2">Launch details</p>
              <p>
                <strong>Launch price:</strong> ~$0.00002286
              </p>
              <p>
                <strong>Launch liquidity:</strong> $16,000
              </p>
              <p>
                <strong>Launch market cap</strong>: ~$22,857
              </p>
              <p>
                <strong>Circulating supply:</strong> 1,000,000,000
              </p>
            </Card>

            <Card>
              <p className="text-3xl underline mb-2">Token details</p>
              <p>
                📜<strong>Contract address:</strong>{" "}
                <a
                  href="https://solscan.io/token/CXb92fEG87ziY8h2U9S2kg5eNfFHH2bHTDNfCQ2VJeT3"
                  target="_blank"
                  className="link break-all"
                >
                  CXb92fEG87ziY8h2U9S2kg5eNfFHH2bHTDNfCQ2VJeT3
                </a>
              </p>
              <p>
                🔓 <strong>Liquidity lock tx:</strong>{" "}
                <a
                  href="https://solscan.io/tx/Wp7XLnD4bJc2tb4xaP9bTzrSKr88ArMTsVyZnY2SkwVakaU7hHNg7rDkKDByfnFJj3Hnmb1HFkutGaZ3hmHxeyL"
                  target="_blank"
                  className="link break-all"
                >
                  Wp7XLnD4bJc2tb4xaP9bTzrSKr88ArMTsVyZnY2SkwVakaU7hHNg7rDkKDByfnFJj3Hnmb1HFkutGaZ3hmHxeyL
                </a>
              </p>
            </Card>

            <Card>
              <p className="text-3xl underline mb-2">Tokenomics</p>
              <p>
                <strong>Total supply:</strong> 1,000,000,000
              </p>
              <p>
                <strong>Team allocation:</strong> 200,000,000 (20%)
                <p className="text-xs italic">
                  Team allocation will be used in conjuction with the marketing
                  allocation.
                </p>
              </p>
              <p>
                <strong>Marketing allocation:</strong> 100,000,000 (10%)
                <p className="text-xs italic">
                  Marketing allocation will be used to pay marketing expenses
                  (listings, tracker updates, influencers, videos, airdrops,
                  etc.) and will serve as a fund for the upcoming CEX listing of
                  Solpaka.
                </p>
              </p>
              <p>
                <strong>LP Allocation:</strong> 700,000,000 (70%)
              </p>
            </Card>
          </div>
        </Container>
        <GlowEffect className="bg-purple-500 top-[-200px] right-[-200px]" />
        <GlowEffect className="bg-green-500 top-[-200px] left-[-200px]" />
      </Section>
      <EnjoyOGNFTBenefits />
    </>
  );
};

export default page;

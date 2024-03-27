/* eslint-disable react/no-unescaped-entities */
import Container from "@/components/Container";
import Section from "@/components/Section";
import Solpaka from "@/assets/images/solpaka.png";
import Image from "next/image";
import baseConfig from "@/util/baseConfig";
import GlowEffect from "@/components/GlowEffect";
import TrendUpIcon from "@/components/TrendUpIcon";

const Hero = () => {
  return (
    <Section className="min-h-screen pattern-circles relative overflow-hidden">
      <Container className="flex flex-col-reverse md:flex-row flex-wrap gap-4 items-center justify-between z-10 relative">
        <div className="flex-1 space-y-8">
          <h1 className="text-6xl font-bold">
            SOLPAKA aims to become the official "Unofficial" Solana mascot!
          </h1>
          <h2 className="text-xl">
            SOLPAKA does nothing. It's just chill like that.
            <br />
            Get SOLPAKA. Chill with SOLPAKA. Be a SOLPAKIAN. Grow fleece.
          </h2>
          <div className="flex items-center justify-between flex-wrap gap-4">
            <p>🔓 Liquidity LOCKED!</p>
            <p>💪​ Solid community!</p>
            <p>🙏 No rugs!</p>
            <p>🔥​ Long-term approach!</p>
          </div>
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
            <a href={baseConfig.dexscreener} target="_blank" className="link">
              <span>Dexscreener</span>
            </a>
            <a href={baseConfig.dextools} target="_blank" className="link">
              <span>Dextools</span>
            </a>
            <a href={baseConfig.coinmarketcap} target="_blank" className="link">
              <span>CoinMarketCap</span>
            </a>
            <a href={baseConfig.coingecko} target="_blank" className="link">
              <span>CoinGecko</span>
            </a>
          </div>
        </div>
        <div className="flex-1">
          <div>
            <Image
              className="ml-auto mr-0"
              src={Solpaka}
              alt="solpaka logo"
              width={600}
            />
          </div>
        </div>
      </Container>
      <GlowEffect className="bg-purple-500 top-[-200px] right-[-200px]" />
      <GlowEffect className="bg-green-500 bottom-[-200px] right-[-200px]" />
      <GlowEffect className="bg-orange-500 bottom-[-200px] left-[-200px]" />
    </Section>
  );
};

export default Hero;

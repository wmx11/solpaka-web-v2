/* eslint-disable react/no-unescaped-entities */
import PumpImage from "@/assets/images/pump_2.jpg";
import Card from "@/components/Card";
import Container from "@/components/Container";
import GlowEffect from "@/components/GlowEffect";
import Section from "@/components/Section";
import Title from "@/components/Title";
import Image from "next/image";

const Tokenomics = () => {
  return (
    <Section
      className="bg-primary pattern relative overflow-clip"
      id="tokenomics"
    >
      <Container className="flex flex-col md:flex-row flex-wrap gap-8">
        <div className="flex-1 md:sticky top-20 h-full">
          <Title>Farm Tokenomics</Title>
          <div className="space-y-4">
            <p>
              Solpakas are free to roam on the farm but here are more details
              about the token.
            </p>
            <p>
              <strong>Total supply: </strong> 696,904,200
              <p className="text-xs">
                That's a lot of tokens to get and just grow fleece. And of
                course, for long-term development.
              </p>
            </p>
            <p>
              <strong>Team & marketing: </strong> 139,380,840 (20%, vested)
              <p className="text-xs">
                Vesting ends on April 15, 2024. Team & marketing funds are used
                to fund development, staff, research, and marketing expenses.
              </p>
            </p>
            <p>
              <strong>Early seed: </strong> 209,071,260 (30%, vested)
              <p className="text-xs">
                Vesting ended on March 20, 2024. Early seed Solpakians raised
                over $3,000 for the initial liquidity pool. Additional funds
                were used to kickstart marketing.
              </p>
            </p>

            <p>
              <strong>Liquidity pool: </strong> 348,452,100 (50%)
              <p className="text-xs">
                Rest of the Solpaka tokens went into the liquidity pool. The
                liquidity pool is locked and cannot be pulled out. Rug-proof.
              </p>
            </p>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <Card className="p-0 overflow-hidden shadow-xl">
            <Image src={PumpImage} alt="solpaka pumping" width={650} />
          </Card>
        </div>
      </Container>
      <GlowEffect className="bg-purple-500 top-[-200px] right-[-200px]" />
      <GlowEffect className="bg-green-500 bottom-[-200px] right-[-200px]" />
    </Section>
  );
};

export default Tokenomics;

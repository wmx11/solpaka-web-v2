/* eslint-disable react/no-unescaped-entities */
import DegenFarmImage from "@/assets/images/degen-farm.png";
import Card from "@/components/Card";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Title from "@/components/Title";
import routes from "@/util/routes";
import Image from "next/image";
import Link from "next/link";

const DegenFarm = () => {
  return (
    <Section
      className="bg-error text-error-content pattern-topography"
      id="degen-farm"
    >
      <Container className="flex flex-col-reverse md:flex-row flex-wrap gap-8">
        <div className="flex-1 md:sticky top-20 h-full">
          <Title>The Degen Farm 🌾</Title>
          <div className="space-y-4">
            <p>
              The Degen Farm is a Solpaka product similar to a managed
              launchpad. Degen Farm aims to release farm-related projects that
              fit the narrative and are meant to leverage the current hype wave
              in the market.
            </p>
            <p className="space-y-4">
              <strong>Degen Farm Utilities: </strong>
              <br />
              <p>
                <strong>🚪 Early access (OG Solpaka NFT holders)</strong>
                <p className="text-xs">
                  <u>
                    OG Solpaka NFT holders will get early access to degen farm
                    projects.
                  </u>{" "}
                  This also means that degen farm projects will launch with an
                  already established user base.
                </p>
              </p>
              <p>
                <strong>🔥​ Solpaka token buybacks.</strong>
                <p className="text-xs">
                  Successful degen farm projects will be used to buyback Solpaka
                  tokens and burn them. This ensures Solpaka supply gets
                  reduced, increasing the scarcity of the token.
                </p>
              </p>
              <p>
                <strong>💰​ Marketing funds.</strong>
                <p className="text-xs">
                  Successful degen farm projects will be used to fund marketing
                  campaigns for the Solpaka project and farm-related projects,
                  including branding, partnerships, collaborations, and
                  potential CEX listings.
                </p>
              </p>
              <p>
                <strong>💉​ ​Liquidity pool injections.</strong>
                <p className="text-xs">
                  Successful degen farm projects will be used to strengthen the
                  liquidity pool of Solpaka by injecting additional funds.
                </p>
              </p>
              <p>
                <strong>Ride the wave while it lasts.</strong> All degen farm
                projects will have to adhere to 🔓 100% locked liquidity, 🙏 no
                rugs, and a 💪 solid community foundation. Leverage the hype and
                token lifecycles.
              </p>
            </p>
            <div>
              <Link href={routes.degenFarm}>
                <button className="btn btn-warning">
                  Enter The Degen Farm 🔥​
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <Card className="p-0 overflow-hidden shadow-xl">
            <Image src={DegenFarmImage} alt="degen farm cover" width={650} />
          </Card>
        </div>
      </Container>
    </Section>
  );
};

export default DegenFarm;

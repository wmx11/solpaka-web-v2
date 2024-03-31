import Container from "@/components/Container";
import Section from "@/components/Section";
import Title from "@/components/Title";

const About = () => {
  return (
    <Section className="pattern-topography">
      <Container>
        <Title>What is The Degen Farm?</Title>
        <div className="space-y-4">
          <p>
            The Degen Farm is a Solpaka product similar to managed launchapds.
            The goal of The Degen Farm is to leverage the current meme-token
            hype wave, launch farm-related tokens that fit the Solpaka Farm
            narrative, and provide early access to the OG Solpaka NFT holders.
          </p>
          <p>
            Solpaka aims to allow users to ride the wave without the risks of
            these projects rugging and with a lowered risk of dumps. All degen
            farm projects will have to adhere to the 🔓 100% locked liquidity,
            🙏 no rugs, and a 💪 solid community foundation.
          </p>
          <p>
            Solpaka will ride the wave together with its community and use the
            profits to strengthen the ecosystem by doing token buybacks, token
            burns, funding marketing, branding, development, staff, and a
            potential CEX listing.
          </p>
          <p>Leverage the hype and token lifecycles.</p>
        </div>
      </Container>
    </Section>
  );
};

export default About;

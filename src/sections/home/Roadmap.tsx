/* eslint-disable react/no-unescaped-entities */
import Card from "@/components/Card";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Title from "@/components/Title";

const Roadmap = () => {
  return (
    <Section id="roadmap">
      <Container>
        <div className="flex flex-wrap">
          <Title>Solpakian Roadmap</Title>
        </div>
        <div className="space-y-4">
          <div>
            <p>
              This roadmap is preliminary. Some things may change based on
              community sentiment, market conditions, and available resources.
            </p>
            <p>
              If you have any suggestions, please let us know in our Discord,
              Telegram, or Reddit.
            </p>
            <p className="text-xs italic">
              We want to emphasize that this is a long-term outlook so don't
              expect to see massive changes in just 24 hours from reading this.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="pattern-topography bg-zinc-500/20 prose justify-start">
              <h2 className="text-3xl line-through">Q1</h2>
              <p>Q1 has already passed. Solpaka launched in Q1 - March 15.</p>
            </Card>
            <Card className="pattern-topography prose bg-green-500/10 border-2 border-success scale-[1.01] justify-start">
              <h2 className="text-3xl">Q2</h2>
              <ul>
                <li>Establish brand identity</li>
                <li>Social media activity (organic marketing)</li>
                <li>TikTok</li>
                <li>Spaces</li>
                <li>YouTube?</li>
                <li>Partnership with a community/project (1)</li>
                <li>Community growth to +1,500 members</li>
                <li>Add more value to NFTs (news, articles, alpha, etc)</li>
                <li>
                  Research and validate viable utilities (Will announce a
                  proposal)
                </li>
              </ul>
            </Card>
            <Card className="pattern-topography prose justify-start">
              <h2 className="text-3xl">Q3</h2>
              <ul>
                <li>CEX?</li>
                <li>Additional community/project partnerships (2-4)</li>
                <li>Onboard/advise a project on the farm</li>
                <li>Established brand identity (people know us)</li>
                <li>Begin utility development (dApp or game)</li>
                <li>Community growth to +2,000 members</li>
              </ul>
            </Card>
            <Card className="pattern-topography prose justify-start">
              <h2 className="text-3xl">Q4</h2>
              <ul>
                <li>CEX?</li>
                <li>Release first MVP of the utility (dApp or game)</li>
                <li>Community growth to +3,000 members</li>
                <li>Research intro to RWA</li>
              </ul>
            </Card>
          </div>
          <div>
            <p>
              <strong>Solpaka vision</strong> - A strong, vibrant community
              foundation bringing new opportunities and partnerships in the Web3
              space.
              <br />
              <strong>Solpaka mission</strong> - Become one of the most admired
              and sought-after communities in the Web3 space.
              <br />
              <strong>Solpaka values</strong> - Fun, community, transparency,
              learning, experimentation, and authority.
              <br />
              <br />
              <span className="underline">
                Imagine a place where you can find like-minded people, share
                your ideas, find new opportunities, use utilities, and help
                other projects grow. This is the vision of Solpaka - one big
                farm filled with tools, talent, and chance.
              </span>
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Roadmap;

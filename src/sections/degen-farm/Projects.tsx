/* eslint-disable react/no-unescaped-entities */
import MordyProject from "@/assets/projects/mordy.png";
import Card from "@/components/Card";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Title from "@/components/Title";
import routes from "@/util/routes";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <Section className="bg-accent text-accent-content pattern">
      <Container>
        <div className="mb-8">
          <Title>The Degen Farm Projects</Title>
          <p>
            Explore the projects launched on The Degen Farm. These farm projects
            are related to the Solpaka Farm - a set of assets to help Solpaka
            grow and develop its ecosystem.
          </p>
          <p className="text-xs italic">
            Disclaimer: None of these projects are financial advice. The team
            does not guarantee any financial gains. These projects are created
            for entertainment purposes only. The Degen Farm projects are
            high-risk, please do your own due dilligence.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href={routes.degenFarm.concat("/#")}>
              <Card className="h-[320px] p-0 relative overflow-hidden hover:scale-[1.01] transition-transform border-2 border-yellow-300 shadow-yellow-500 shadow-lg">
                <Image
                  src={MordyProject}
                  alt="mordy project"
                  className="object-cover w-full h-full"
                />
              </Card>
            </Link>
            <div>
              <p>Mordy</p>
              <p className="flex items-start gap-2 flex-wrap">
                Launch date: 2024-04-03{" "}
                <span className="badge badge-sm badge-error">Not Live</span>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Projects;

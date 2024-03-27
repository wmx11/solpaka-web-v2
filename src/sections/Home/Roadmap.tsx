/* eslint-disable react/no-unescaped-entities */
import Container from "@/components/Container";
import Section from "@/components/Section";
import Title from "@/components/Title";
import React from "react";

const Roadmap = () => {
  return (
    <Section id="roadmap">
      <Container>
        <div className="flex flex-wrap">
          <Title>Solpakian Roadmap</Title>
          <div className="badge badge-primary">Coming soon</div>
        </div>
        <div className="space-y-4">
          <p>
            <u>Don't fret! The roadmap is coming soon</u>. <br />
            We're working on putting together a solid plan for the future.
            Solpaka is not JUST a meme token - it's a token with a goal and end
            vision in mind. Not many meme tokens can say that about themselves.
          </p>
          <p>
            Expect to see NFTs, long-term projects (RWAs, dApps), community
            hubs, VC hubs, alpha groups, and more...
          </p>
        </div>
      </Container>
    </Section>
  );
};

export default Roadmap;

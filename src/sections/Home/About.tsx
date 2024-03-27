import Container from "@/components/Container";
import Section from "@/components/Section";
import SocialsButtonGroup from "@/components/SocialsButtonGroup";
import Title from "@/components/Title";
import React from "react";

const About = () => {
  return (
    <Section className="bg-success pattern" id="about">
      <Container className="text-center text-base-100">
        <Title>More Than Just A Meme</Title>
        <div className="space-y-4">
          <p>
            SOLPAKA is a community-driven token aiming to build a strong and
            vibrant community in the Solana ecosystem. SOLPAKA is a meme coin
            but it does not stop it from being one of the most loved and admired
            tokens on Solana. SOLPAKA aims to build a strong foundation of
            open-minded people and continue building and investing in new,
            long-term projects.
          </p>
          <div className="flex gap-4 flex-wrap justify-center [&>*]:w-full [&>*]:md:w-auto">
            <SocialsButtonGroup />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default About;

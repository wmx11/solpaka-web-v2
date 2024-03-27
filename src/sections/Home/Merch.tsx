/* eslint-disable react/no-unescaped-entities */
import Container from "@/components/Container";
import Section from "@/components/Section";
import Title from "@/components/Title";
import React from "react";

const Merch = () => {
  return (
    <Section className="pattern-circles" id="merch">
      <Container>
        <div className="flex flex-wrap">
          <Title>Solpakian Merch</Title>
          <div className="badge badge-primary">Coming soon</div>
        </div>
        <div className="space-y-4">
          <p>
            <u>Yes, you got this right!</u>. <br />
            Solpaka merch (hoodies, shirts, mugs, plushies) is about to drop.
            Only a few moments and you will be able to show your support by
            wearing the cutest Solana mascot there is.
          </p>
          <p>
            Wear Solpaka merch. Be a Solpakian. Chill with Solpaka. Grow fleece.
          </p>
        </div>
        <div></div>
      </Container>
    </Section>
  );
};

export default Merch;

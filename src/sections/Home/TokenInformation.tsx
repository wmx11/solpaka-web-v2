import Container from "@/components/Container";
import Section from "@/components/Section";
import React from "react";
import baseConfig from "@/util/baseConfig";
import Title from "@/components/Title";

const TokenInformation = () => {
  return (
    <Section className="pattern-circles">
      <Container>
        <Title>Solpaka Token Information</Title>
        <div className="space-y-4">
          <p>
            <span className="font-bold">📜 Contract address: </span>
            <span className="break-all">
              <a
                className="link"
                href={`${baseConfig.explorerToken}/${baseConfig.contractAddress}`}
                target="_blank"
              >
                {" "}
                {baseConfig.contractAddress}
              </a>
            </span>
          </p>
          <p>
            <span className="font-bold">🔓​ Liquidity locked tx: </span>
            <span className="break-all">
              <a
                className="link"
                href={`${baseConfig.explorerTx}/${baseConfig.lpLockTxHash}`}
                target="_blank"
              >
                {baseConfig.lpLockTxHash}
              </a>
            </span>
          </p>
          <p>
            <span className="font-bold">📢​ Community donations: </span>
            <span className="break-all">
              <a
                className="link"
                href={`${baseConfig.explorerAccount}/${baseConfig.communityDonationsWallet}`}
                target="_blank"
              >
                {baseConfig.communityDonationsWallet}
              </a>
            </span>
            <p className="text-xs italic">
              Solpaka community members can donate to this wallet and help the
              project grow. Donations will be used to fund marketing efforts and
              potential CEX listings. Donations are not mandatory.
            </p>
          </p>
        </div>
      </Container>
    </Section>
  );
};

export default TokenInformation;

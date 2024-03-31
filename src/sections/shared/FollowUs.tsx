/* eslint-disable react/no-unescaped-entities */
import Container from "@/components/Container";
import Section from "@/components/Section";
import SocialsButtonGroup from "@/components/SocialsButtonGroup";
import Title from "@/components/Title";

const FollowUs = () => {
  return (
    <Section className="bg-neutral pattern" id="follow-us">
      <Container className="text-center text-base-100">
        <Title>Don't Miss Out On The Farm!</Title>
        <div className="space-y-4">
          <p>
            Follow us on X, join us on Telegram and Discord. Stay up to date
            with the latest news and development of Solpaka. Let's grow this
            farm.
          </p>
          <div className="flex flex-col gap-4 [&>*]:md:max-w-64 items-center [&>*]:w-full">
            <SocialsButtonGroup />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default FollowUs;

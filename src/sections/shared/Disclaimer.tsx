import Container from "@/components/Container";
import Section from "@/components/Section";
import Title from "@/components/Title";

const Disclaimer = () => {
  return (
    <Section id="disclaimer">
      <Container>
        <Title className="text-center">Solpaka. Chill and grow fleece.</Title>
        <p className="text-xs text-center">
          This cryptocurrency (SOLPAKA) was created solely for entertainment
          purposes and{" "}
          <u>should not be considered as a form of investment advice</u>.
          <u>The project team does not guarantee any returns</u>, and
          individuals who choose to invest in this cryptocurrency do so at their
          own risk. The project holds no responsibility for any financial losses
          incurred as a result of investing in or trading this cryptocurrency.
          Users are encouraged to conduct thorough research and consult with
          financial professionals before making any investment decisions.
        </p>
      </Container>
    </Section>
  );
};

export default Disclaimer;

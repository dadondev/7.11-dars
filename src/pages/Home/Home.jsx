import styled from "styled-components";
import Container from "../../general/components/Container";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "../../general/components/Contact";

const StyledContainer = styled(Container)`
  /* 111111 */
  @media (width >=768px) {
    padding-inline: 40px;
  }
  @media (width >=1024px) {
    padding-inline: 0;
  }
`;

const Home = () => {
  return (
    <StyledContainer>
      <Hero />
      <About />
      <Contact />
    </StyledContainer>
  );
};

export default Home;

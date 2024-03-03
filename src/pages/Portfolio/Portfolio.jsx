import styled from "styled-components";
import Container from "../../general/components/Container";
import Project from "./components/Project";
import Contact from "../../general/components/Contact";

const StyledContainer = styled(Container)`
  padding-inline: 32px;
  padding-top: 40px;
  height: auto;

  @media (media>=768px) {
    padding-top: 96px;
    padding-inline: 0;
  }
`;
const StyledContact = styled(Contact)`
  margin-top: 80px;
  @media (width >=768px) {
    margin-top: 96px;
  }
  @media (width>=1024px) {
    margin-top: 150px;
  }
`;

const datas = [
  {
    row: false,
    title: "Manage",
    text: "This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.",
    to: "/portfolio/1",
    img: "/pro1.jpg",
  },
  {
    row: true,
    title: "Bookmark",
    text: "This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the features section.",
    to: "/portfolio/2",
    img: "/pro2.jpg",
  },
  {
    row: false,
    title: "Insure",
    text: "This was a small project which mostly consisted of HTML and CSS. I built a fully-responsive landing page. The only JavaScript this project required was to enable the toggling of the mobile navigation.",
    to: "/portfolio/3",
    img: "/pro3.jpg",
  },
  {
    row: true,
    title: "Flyo",
    text: "This project was built in pure HTML and CSS. I had mobile and desktop designs to work to and built it so that it was fully-responsive. I took a mobile-first approach and used modern CSS like Flexbox and Grid for layout purposes.",
    to: "/portfolio/4",
    img: "/pro4.jpg",
  },
];

const Portfolio = () => {
  return (
    <StyledContainer>
      {datas.map((data, i) => (
        <Project data={data} i={i} />
      ))}
      <StyledContact />
    </StyledContainer>
  );
};

export default Portfolio;

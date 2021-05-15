import Section from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container";

const AuthorPage = () => (
    <Container>
        <Header title="About author" />
        <Section
            title="Hi, I'm Andrzej 👋"
            body={"I'm a 19yo front-end developer who started coding at the middle of 2019 and fell in love with React. I was motivated to start learning because I wanted to create \"something of my own\". Initially, after the failure of creating music in FL Studio, I decided to bet on programming... I became interested in Python, but after a few weeks of learning, I realized it wasn't for me. Then I found a channel on Youtube that explained the basics of HTML and that's how my passion with web development began."}
        />
    </Container>
);

export default AuthorPage;
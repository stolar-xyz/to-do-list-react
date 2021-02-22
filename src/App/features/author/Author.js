import React from "react";
import Section from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container";

const Author = () => (
    <Container>
        <Header title="About author" />
        <Section
            title="name surname"
            body={"something"}
        />
    </Container>
);

export default Author;
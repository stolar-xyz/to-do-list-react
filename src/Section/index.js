import React from "react";
import { Container, StyledSection, SubHeaderTitle, Wrapper } from "./styled";

const Section = ({ title, extraHeaderContent, body }) => (
    <StyledSection>
        <Container>
            <SubHeaderTitle>
                {title}
            </SubHeaderTitle>
            {extraHeaderContent}
        </Container>
        <Wrapper>
            {body}
        </Wrapper>
    </StyledSection>
);

export default Section;

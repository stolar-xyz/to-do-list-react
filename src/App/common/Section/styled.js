import styled from "styled-components";

export const StyledSection = styled.section`
    background-color: ${({theme}) => theme.colors.backgroundPrimary};;
    box-shadow: 0 0 10px 0 #d3d2d2;
    margin: 10px 0;
`;

export const Container = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-between;
    align-items: center;

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}px) {
        grid-template-columns: 1fr;
    }
`;

export const SubHeaderTitle = styled.h2`
    margin: 0;
    padding: 25px;
`;

export const Wrapper = styled.div`
    padding: 25px;
    border-top: 3px solid ${({theme}) => theme.colors.borderColor};;
`;